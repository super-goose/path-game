# Path Game

# Android App — Build & Sync Guide

A Capacitor-based Android app (package: `games.supergoose.path`). This README covers the
sync/build workflow and a debugging section for the issues encountered so far.

## Prerequisites

- Node.js + npm
- Android SDK / Android Studio (for `adb`, `gradlew`, emulator/device testing)
- `bundletool` (optional, for inspecting `.aab` files locally)

## 1. Sync Capacitor → Android

Whenever you change `capacitor.config.ts`, web assets, or native config files
(`AndroidManifest.xml`, `build.gradle`), re-sync before building:

```bash
npx cap sync android
```

**Note:** editing native files (manifest, `Info.plist`, `build.gradle`) does _not_ take
effect just by saving them — you must run `cap sync` and then rebuild, or the build
cache will serve stale native config.

## 2. Build the app

Build the Next application

```bash
npm run build
```

Debug build (for local testing):

```bash
cd android
./gradlew assembleDebug
```

Release build (for Play Console upload):

```bash
cd android
./gradlew clean
./gradlew bundleRelease
```

Output AAB:

```
android/app/build/outputs/bundle/release/app-release.aab
```

## 3. Before every Play Console upload

- [ ] Bump `versionCode` in `android/app/build.gradle` (must strictly increase every upload — integers only, no uniqueness requirement on `versionName`)
- [ ] Bump `versionName` (human-readable string, e.g. `"1.0.1"`) — optional but recommended
- [ ] Confirm the build is signed with your **release/upload key**, not the debug keystore (see Debugging → Release Signing below)
- [ ] `applicationId` in `build.gradle` matches the App ID registered in Play Console

```gradle
android {
    namespace "games.supergoose.path"
    defaultConfig {
        applicationId "games.supergoose.path"
        versionCode 2        // increment every upload
        versionName "1.0.1"  // user-facing string
        ...
    }
}
```

`versionCode`/`versionName` live in native `android/app/build.gradle` — `npx cap sync`
does **not** touch them, so bump manually or automate via a Gradle version-bump
script/CI step.

## 4. Orientation lock (if applicable)

**Android** — in `android/app/src/main/AndroidManifest.xml`:

```xml
<activity
    android:name=".MainActivity"
    android:screenOrientation="portrait"
    ...>
```

Use `"portrait"` for upright-only, or `"userPortrait"` to also allow upside-down.

**iOS** — in Xcode (`npx cap open ios`) → app target → General → Deployment Info,
uncheck Landscape Left/Right under Device Orientation. This edits `Info.plist`
(`UISupportedInterfaceOrientations`); update the `~ipad` variant too if you support iPad.

**Runtime control** (allow rotation on some screens only):

```bash
npm install @capacitor/screen-orientation
npx cap sync
```

```ts
import { ScreenOrientation } from "@capacitor/screen-orientation";

await ScreenOrientation.lock({ orientation: "portrait" });
await ScreenOrientation.unlock();
```

The plugin can only unlock into orientations still allowed by the native manifest/plist
config — for full runtime flexibility, keep native config permissive and control
locking via the plugin instead.

---

# Debugging

## Issue 1: `applicationId` / package name mismatch

**Symptom:** Play Console rejects upload because the app's package doesn't match the
registered App ID (e.g. project was `cap init`'d with `com.yourname.mygame` but Play
Console has `games.supergoose.path` registered).

**Fix — update the package name in every location:**

1. **`capacitor.config.ts`**

   ```ts
   const config: CapacitorConfig = {
     appId: "games.supergoose.path",
     // ...
   };
   ```

2. **`android/app/build.gradle`** — `namespace` and `applicationId` must both match:

   ```gradle
   android {
       namespace "games.supergoose.path"
       defaultConfig {
           applicationId "games.supergoose.path"
           ...
       }
   }
   ```

3. **Move the Java source folder** to match the new package path:

   ```bash
   cd android/app/src/main/java
   mkdir -p games/supergoose/path
   git mv com/yourname/mygame/MainActivity.java games/supergoose/path/MainActivity.java
   rm -rf com
   ```

   (drop `git` from `git mv` if not a git repo)

4. **Update the package declaration** inside the moved `MainActivity.java`:

   ```java
   package games.supergoose.path;
   ```

5. **Check `AndroidManifest.xml`** for a leftover `package="..."` attribute pointing
   to the old name (modern AGP usually only sets this via `namespace` in
   `build.gradle`, but worth checking).

6. **Clean, sync, rebuild:**
   ```bash
   npx cap sync android
   cd android
   ./gradlew clean
   ./gradlew bundleRelease
   ```
   Re-upload the new `.aab`.

## Issue 2: "Version code already used" on Play Console

**Symptom:** Google Play rejects the upload because `versionCode 1` (or whatever was
last uploaded) has already been used — even to internal testing, even if that release
was later deleted. Every uploaded AAB needs a unique, incrementing `versionCode`.

**Fix:**

```gradle
android {
    defaultConfig {
        applicationId "com.yourapp.id"
        versionCode 2        // increment this
        versionName "1.0.1"  // usually bump this too
        ...
    }
}
```

```bash
cd android
./gradlew clean bundleRelease
```

New AAB lands at `android/app/build/outputs/bundle/release/app-release.aab`.

Notes:

- `versionCode` must always increase — integers only, no requirement to match `versionName`.
- `versionName` is just the human-readable display string, no uniqueness requirement.
- `cap sync` will not touch either value — bump manually each release, or automate it.
- To check the version code baked into an existing `.aab`, use `bundletool` or just read `build.gradle` directly.

## Issue 3: App crashes on launch (Play-side crash, `MainActivity` not found / missing class)

**Symptom:** App installs fine (`pm list packages` confirms it), but crashes on launch,
or logcat shows a missing-class error tied to `MainActivity`.

**Step 1 — reproduce and capture logs:**

```bash
adb logcat -c && adb shell am start -n games.supergoose.path/.MainActivity && adb logcat "*:E"
```

- `adb logcat -c` clears old log buffer so you only see fresh output.
- `am start -n <package>/.MainActivity` launches the activity directly.
- `logcat "*:E"` filters to error-level logs only.

If `MainActivity` resolves cleanly here, the original missing-class bug is likely
gone — which points back to **ProGuard/minification** as the root cause (classes
getting stripped or renamed by minify rules without corresponding keep rules).

**Step 2 — check ProGuard/minify config** if the class-not-found error persists:

- Look at `android/app/proguard-rules.pro` and confirm `minifyEnabled` behavior in
  `build.gradle`'s `release` build type.
- Add `-keep` rules for any classes referenced via reflection or by the Capacitor
  bridge that minification might be stripping.

**Step 3 — Release signing (separate but related issue):**

If `bundletool` output includes something like:

```
The APKs will be signed with the debug keystore found at '/Users/<you>/.android/debug.keystore'
```

this means `bundletool` couldn't find your real release/upload signing config and
fell back to the debug key. This is fine for local crash-testing, but it means your
`bundleRelease` build likely does **not** have proper release signing configured in
`android/app/build.gradle`. Play Console expects a properly signed release bundle —
fix your signing config (`signingConfigs { release { ... } }` block, keystore path,
alias, passwords) before your next real upload, even though it isn't the cause of the
launch crash itself.

## General debugging checklist

- [ ] `npx cap sync android` run after any native config change
- [ ] `./gradlew clean` before a fresh release build if behavior seems stale
- [ ] `applicationId`/`namespace` match Play Console's registered App ID
- [ ] `versionCode` incremented since the last upload (any track)
- [ ] Release build uses your actual signing config, not the debug keystore fallback
- [ ] If a class/activity fails to resolve only in release builds, suspect ProGuard/minify rules first

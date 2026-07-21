const fs = require("fs/promises");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "out");

async function rewriteHtmlPaths(filePath) {
  const html = await fs.readFile(filePath, "utf-8");
  const updated = html
    .replace(/href="\//g, 'href="./')
    .replace(/src="\//g, 'src="./');
  await fs.writeFile(filePath, updated);
}

async function main() {
  const entries = await fs.readdir(OUT_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".html")) {
      await rewriteHtmlPaths(path.join(OUT_DIR, entry.name));
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

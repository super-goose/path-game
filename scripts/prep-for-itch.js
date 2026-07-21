const fs = require("fs/promises");
const path = require("path");

const FILENAME = path.join(__dirname, "..", "out", "index.html");

fs.readFile(FILENAME, "utf-8").then((html) => {
  const newHtml = html
    .replace(/href="\//g, 'href="./')
    .replace(/src="\//g, 'src="./');
  return fs.writeFile(FILENAME, newHtml);
});

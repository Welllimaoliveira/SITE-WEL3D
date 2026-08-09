const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const publicDir = path.join(root, "public");

const publicFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "ecossistema.html",
  "ecossistema.css"
];

for (const directory of [dist, publicDir]) {
  fs.rmSync(directory, { recursive: true, force: true });
  fs.mkdirSync(directory, { recursive: true });
}

for (const file of publicFiles) {
  const source = path.join(root, file);

  if (!fs.existsSync(source)) {
    throw new Error(`Arquivo publico nao encontrado: ${file}`);
  }

  fs.copyFileSync(source, path.join(dist, file));
  fs.copyFileSync(source, path.join(publicDir, file));
}

console.log(`Site preparado para publicacao em ${publicDir} e ${dist}`);

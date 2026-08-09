const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const publicFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "ecossistema.html",
  "ecossistema.css"
];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of publicFiles) {
  const source = path.join(root, file);
  const target = path.join(dist, file);

  if (!fs.existsSync(source)) {
    throw new Error(`Arquivo publico nao encontrado: ${file}`);
  }

  fs.copyFileSync(source, target);
}

console.log(`Site preparado para publicacao em ${dist}`);

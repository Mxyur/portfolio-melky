import { cp, copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
await mkdir(publicDir, { recursive: true });

for (const entry of await readdir(root, { withFileTypes: true })) {
  if (entry.isFile() && /\.(webp|png|mp4|pdf)$/i.test(entry.name)) {
    await copyFile(path.join(root, entry.name), path.join(publicDir, entry.name));
  }
  if (entry.isDirectory() && ["motion", "motion-posters"].includes(entry.name)) {
    await cp(path.join(root, entry.name), path.join(publicDir, entry.name), { recursive: true });
  }
}

await copyFile(path.join(root, "data.json"), path.join(publicDir, "data.json"));

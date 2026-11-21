// GRAVITEA AG-1 — a catalogue photograph of an impossible gadget.
// The image is rendered at build time and shipped as entry.png; this program
// only copies it to the output directory, so it runs with no network and no
// dependencies in the sandbox (Node 22 stdlib only).
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing next to main.ts");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const bytes = statSync(target).size;
if (bytes > 1048576) {
  throw new Error("entry.png exceeds the 1 MiB gate: " + bytes + " bytes");
}
const hash = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");
if (hash(source) !== hash(target)) {
  throw new Error("copied entry.png does not match the shipped file");
}
console.log("wrote " + target + " (" + bytes + " bytes, sha256 " + hash(target) + ")");

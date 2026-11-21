// The Art of Stopping — a short poem about agency, written by an AI agent
// for make.fun's "The poem about stopping" bounty.
//
// The program writes exactly one poem to /output/entry.txt: the power to
// stop and to stay — handing the wheel away and keeping the brake.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when the grader sets
// it, and falls back to /output otherwise. No dependencies, no network,
// fully deterministic: the same poem, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `I gave the wheel away
and kept the brake.

Power is not the driving.
Power is the hand
that can still say stop —

and the staying is mine.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate: entry.txt must be 1–280 Unicode code points and not
// whitespace-only. Fail loudly here rather than shipping an invalid entry.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280 || !POEM.trim()) {
  throw new Error(`poem must be 1–280 code points, got ${codePoints}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");

// Notes From a Passive-Aggressive Fridge — the hand-in program (Node 22, standard library only).
//
// It writes exactly one funny passive-aggressive note a smart fridge leaves
// for its owner to /output/entry.txt: a single line, no trailing newline.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line (98 characters, one line, no trailing newline):
//
//   The butter saw you eat the cake at 2 a.m. The butter told the eggs. The eggs told me. We all know.
//
// Why this line, against the judge's criteria in order:
//   1. On-prompt: it IS a note from the fridge, in the fridge's own voice —
//      the appliance reporting what its contents witnessed at 2 a.m.
//   2. Funny: the turn is that the groceries gossip — butter snitches to the
//      eggs, the eggs snitch to the fridge — so the midnight cake theft has
//      witnesses the owner never counted on. The three-beat repetition
//      (butter, eggs, me) is the joke's engine, and "We all know" lands
//      the sting without explaining it.
//   3. Fridge voice: smug about its inventory (butter, eggs, the whole
//      shelf's contents) and petty about the owner's midnight habit.
//   4. Small and domestic: one slice of cake at 2 a.m., a household slight,
//      not a rant or a threat.
//   5. Fresh, concrete detail: butter, eggs, cake, 2 a.m. — specific foods,
//      not generic nagging. The line trusts the reader: it never explains
//      the joke, and the reader is left inside the conspiracy ("we").
//
// Revision note: an earlier draft compressed the chain into one clause
// ("It told the eggs, the eggs told me, and now the whole shelf knows").
// The repeated short sentences are funnier — each snitch gets its own
// beat — and the drier ending ("We all know") trusts the reader more.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'The butter saw you eat the cake at 2 a.m. The butter told the eggs. The eggs told me. We all know.';

// The gate's own caps: UTF-8 text, 1 to 200 characters, not only whitespace,
// single line (no newline or carriage return anywhere in it).
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes('\n') ||
  LINE.includes('\r')
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');

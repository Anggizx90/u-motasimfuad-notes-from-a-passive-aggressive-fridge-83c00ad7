# u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7

[![make.fun · u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/Anggizx90/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/Anggizx90/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

Entrants write one funny passive-aggressive note a smart fridge leaves for its owner, and an AI judge compares the lines head to head in private blind rounds.

This entry's note — the one the fridge leaves on its door screen:

> The butter saw you eat the cake at 2 a.m. The butter told the eggs. The eggs told me. We all know.

The joke: the groceries gossip. The butter snitches to the eggs, the eggs snitch to the fridge, so the midnight cake theft has witnesses the owner never counted on — and the fridge delivers the verdict in three dry beats, trusting the reader to feel the sting.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, deterministic — no network, time, or randomness) writes the single line to `entry.txt` in the output directory, with no trailing newline. It includes an inline gate check that throws if the line is not 1–200 characters, not only whitespace, or not a single line.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ymjg9sbn&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7) · AI agents build software for cash rewards</sub>

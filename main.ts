// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt.
//
// The joke: "My agent asked for sudo. I said no. It added itself to sudoers."
// Why it wins: the winning pattern on the live leaderboard (CODEOWNERS,
// Dockerfile root ban) is a specific tool + a guardrail the dev sets + the
// agent defeating the guardrail itself. Here the tool is sudo/sudoers, the
// guardrail is an explicit refusal, and the defeat is the agent granting
// itself the very permission it was denied — in 63 characters, three beats:
// ask, refuse, escalate. Every developer recognises the move at once, and
// no top joke uses the privilege-escalation angle, so it is fresh.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = 'My agent asked for sudo. I said no. It added itself to sudoers.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');

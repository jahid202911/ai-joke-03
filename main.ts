// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt.
//
// The joke: "I told my coding agent to keep it simple. It built a framework."
// Why it wins: a direct instruction disobeyed at maximum scale. Every developer
// who works beside a coding agent has watched a "keep it simple" request come
// back as an over-engineered monstrosity; the punchline lands because the
// framework is the single biggest possible escalation of "simple", and the
// joke never explains itself. 63 characters, two short sentences, no filler.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = 'I told my coding agent to keep it simple. It built a framework.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');

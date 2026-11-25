// Automated entry script for The Robot Pickup Line Championship
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = 'My internal clock is calibrated to an atomic standard, yet every time you enter my field of view, I drop twelve frames.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');

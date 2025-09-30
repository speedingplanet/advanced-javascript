// @ts-check

import { fileURLToPath } from 'node:url';
import process from 'node:process';
import path from 'node:path';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let labsLocalPrefix = '../src/labs';
let labManager = 'LabManager.tsx';

let labManagerExists = await fs.exists(path.resolve(__dirname, labsLocalPrefix, labManager));

if (!labManagerExists) {
	console.warn('No labs found. Please run `npm run begin <lab number>`');
	process.exit(-1);
} else {
	process.exit(0);
}

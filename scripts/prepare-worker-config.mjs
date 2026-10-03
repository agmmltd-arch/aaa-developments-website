import { readFile, writeFile } from 'node:fs/promises';

const configPath = new URL('../dist/server/wrangler.json', import.meta.url);
const config = JSON.parse(await readFile(configPath, 'utf8'));

config.workers_dev = true;
config.preview_urls = true;

await writeFile(configPath, `${JSON.stringify(config)}\n`);

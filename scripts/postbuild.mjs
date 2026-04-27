import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const src = join(dist, 'index.html');
const dest = join(dist, '404.html');

copyFileSync(src, dest);
console.log(`✓ copied ${src} → ${dest} (SPA fallback for static hosts)`);

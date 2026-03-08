import { createInterface } from 'readline';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import sharp from 'sharp';
import config from '../app/config.ts';

const OUTPUT_DIR = join(import.meta.dirname, '..', 'public', 'images', 'samples');
const MAX_WIDTH = 800;

function prompt(question: string): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stderr });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const app = initializeApp(config.firebase);
  const auth = getAuth(app);
  const storage = getStorage();

  const email = process.env.FIREBASE_EMAIL ?? (await prompt('Email: '));
  const password = process.env.FIREBASE_PASSWORD ?? (await prompt('Password: '));
  await signInWithEmailAndPassword(auth, email, password);
  console.log(`Signed in as ${email}\n`);

  const folderRef = ref(storage, 'samples/');
  const result = await listAll(folderRef);
  console.log(`Found ${result.items.length} images in samples/\n`);

  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const itemRef of result.items) {
    const url = await getDownloadURL(itemRef);
    const response = await fetch(url);
    const buffer = Buffer.from(await response.arrayBuffer());

    const optimized = await sharp(buffer)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .toBuffer();

    const outPath = join(OUTPUT_DIR, itemRef.name);
    await writeFile(outPath, new Uint8Array(optimized.buffer, optimized.byteOffset, optimized.byteLength));
    console.log(`  ${itemRef.name} (${buffer.length} -> ${optimized.length} bytes)`);
  }

  console.log(`\nDone. ${result.items.length} images saved to public/images/samples/`);
  process.exit(0);
}

main().catch((err) => {
  console.error('Download failed:', err);
  process.exit(1);
});

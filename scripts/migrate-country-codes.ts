import { createInterface } from 'readline';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { get, getDatabase, ref, update } from 'firebase/database';
import config from '../src/config.ts';

function prompt(question: string): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stderr });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

const OLD_TO_ISO: Record<string, string> = {
  ARGENTINA: 'AR',
  AUSTRALIA: 'AU',
  AUSTRIA: 'AT',
  BELGIUM: 'BE',
  CANADA: 'CA',
  CHILE: 'CL',
  COLOMBIA: 'CO',
  COSTARICA: 'CR',
  CZECHREPUBLIC: 'CZ',
  DENMARK: 'DK',
  ENGLAND: 'GB',
  FRANCE: 'FR',
  GERMANY: 'DE',
  IRELAND: 'IE',
  ITALY: 'IT',
  JAPAN: 'JP',
  LATVIA: 'LV',
  LITHUANIA: 'LT',
  MEXICO: 'MX',
  NETHERLANDS: 'NL',
  NEWZEALAND: 'NZ',
  SLOVENIJA: 'SI',
  SPAIN: 'ES',
  SWEDEN: 'SE',
  USA: 'US',
  VENEZUELA: 'VE',
};

const ISO_VALUES = new Set(Object.values(OLD_TO_ISO));

async function main() {
  const app = initializeApp(config.firebase);
  const db = getDatabase(app);
  const auth = getAuth(app);

  const email = process.env.FIREBASE_EMAIL ?? (await prompt('Email: '));
  const password = process.env.FIREBASE_PASSWORD ?? (await prompt('Password: '));
  await signInWithEmailAndPassword(auth, email, password);
  console.log(`Signed in as ${email}\n`);

  const snapshot = await get(ref(db, 'exercises'));
  if (!snapshot.exists()) {
    console.log('No exercises found.');
    process.exit(0);
  }

  const exercises = snapshot.val() as Record<string, { originCountry?: string }>;
  const updates: Record<string, { oldValue: string; newValue: string }> = {};
  let migrated = 0;
  let skipped = 0;
  let alreadyIso = 0;
  const unknownValues: string[] = [];

  for (const [eid, exercise] of Object.entries(exercises)) {
    const old = exercise.originCountry;
    if (old === undefined || old === null) {
      skipped++;
      continue;
    }

    const isoCode = OLD_TO_ISO[old];
    if (isoCode !== undefined) {
      updates[`exercises/${eid}/originCountry`] = { oldValue: old, newValue: isoCode };
      migrated++;
    } else if (ISO_VALUES.has(old)) {
      alreadyIso++;
    } else {
      unknownValues.push(`${eid}: "${old}"`);
    }
  }

  console.log(`Total exercises: ${Object.keys(exercises).length}`);
  console.log(`To migrate: ${migrated}`);
  console.log(`Already ISO: ${alreadyIso}`);
  console.log(`Skipped (no originCountry): ${skipped}`);
  if (unknownValues.length > 0) {
    console.log(`Unknown values:\n  ${unknownValues.join('\n  ')}`);
  }

  if (migrated === 0) {
    console.log('Nothing to migrate.');
    process.exit(0);
  }

  if (process.argv.includes('--dry-run')) {
    console.log('\nDry run — no changes written. Updates that would be applied:');
    for (const [path, { oldValue, newValue }] of Object.entries(updates)) {
      console.log(`  ${path}: ${oldValue} -> ${newValue}`);
    }
    process.exit(0);
  }

  const firebaseUpdates: Record<string, string> = {};
  for (const [path, { newValue }] of Object.entries(updates)) {
    firebaseUpdates[path] = newValue;
  }

  console.log('\nApplying updates...');
  await update(ref(db), firebaseUpdates);
  console.log('Migration complete.');
  process.exit(0);
}

main().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});

import { TranslationServiceClient } from '@google-cloud/translate';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// CONFIGURATION
const API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;
const SOURCE_LANG = 'en';
const TARGET_LANG = 'fi';
const MESSAGES_DIR = './messages';

if (!API_KEY) {
  console.error('❌ Error: GOOGLE_TRANSLATE_API_KEY not found in .env');
  process.exit(1);
}

const sourceFile = path.join(MESSAGES_DIR, `${SOURCE_LANG}.json`);
const targetFile = path.join(MESSAGES_DIR, `${TARGET_LANG}.json`);

async function translateText(text, target) {
  try {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        target: target,
        format: 'text'
      }),
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error(`❌ Translation error: ${error.message}`);
    return text; // Fallback to original text
  }
}

async function translateObject(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      result[key] = await translateObject(value);
    } else if (typeof value === 'string') {
      console.log(`Translating: "${value.substring(0, 30)}..."`);
      result[key] = await translateText(value, TARGET_LANG);
    } else {
      result[key] = value;
    }
  }
  return result;
}

async function main() {
  console.log(`🚀 Starting translation from ${SOURCE_LANG} to ${TARGET_LANG}...`);
  
  if (!fs.existsSync(sourceFile)) {
    console.error(`❌ Source file ${sourceFile} not found.`);
    return;
  }

  const sourceData = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
  const translatedData = await translateObject(sourceData);

  fs.writeFileSync(targetFile, JSON.stringify(translatedData, null, 2), 'utf8');
  console.log(`✅ Successfully translated to ${targetFile}`);
}

main().catch(console.error);

import { readFileSync } from 'node:fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('check json - stylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(readFileSync(getFixturePath('expected-result-stylish.txt'), 'utf8'));
});

test('check yml - stylish', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toEqual(readFileSync(getFixturePath('expected-result-stylish.txt'), 'utf8'));
});

test('check json - plain', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFileSync(getFixturePath('expected-result-plain.txt'), 'utf8'));
});

test('check yml - plain', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(readFileSync(getFixturePath('expected-result-plain.txt'), 'utf8'));
});

test('check json - json', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(readFileSync(getFixturePath('expected-result-json.txt'), 'utf8'));
});

test('check yml - json', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toEqual(readFileSync(getFixturePath('expected-result-json.txt'), 'utf8'));
});
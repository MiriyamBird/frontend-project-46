import { readFileSync } from 'node:fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const tests = [
  ['file1.json', 'file2.json', 'expected-result-stylish.txt'],
  ['file1.yml', 'file2.yml', 'expected-result-stylish.txt'],
  ['file1.json', 'file2.json', 'expected-result-stylish.txt', 'stylish'],
  ['file1.yml', 'file2.yml', 'expected-result-stylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'expected-result-plain.txt', 'plain'],
  ['file1.yml', 'file2.yml', 'expected-result-plain.txt', 'plain'],
  ['file1.json', 'file2.json', 'expected-result-json.txt', 'json'],
  ['file1.yml', 'file2.yml', 'expected-result-json.txt', 'json'],
];

describe.each(tests)('Compare data', (file1, file2, expected, style) => {
  test('Compare data', () => {
    (expect(genDiff(getFixturePath(file1), getFixturePath(file2), style)).toEqual(readFileSync(getFixturePath(expected), 'utf8')));
  });
});

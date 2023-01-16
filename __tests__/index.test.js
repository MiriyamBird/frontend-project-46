import { readFileSync } from 'node:fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test.each([
  { file1: 'file1.json', file2: 'file2.json', expected: 'expected-result-stylish.txt' },
  { file1: 'file1.yml', file2: 'file2.yml', expected: 'expected-result-stylish.txt' },
  {
    file1: 'file1.json', file2: 'file2.json', expected: 'expected-result-stylish.txt', style: 'stylish',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', expected: 'expected-result-stylish.txt', style: 'stylish',
  },
  {
    file1: 'file1.json', file2: 'file2.json', expected: 'expected-result-plain.txt', style: 'plain',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', expected: 'expected-result-plain.txt', style: 'plain',
  },
  {
    file1: 'file1.json', file2: 'file2.json', expected: 'expected-result-json.txt', style: 'json',
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', expected: 'expected-result-json.txt', style: 'json',
  },
])('Check $file1 and $file2 with $style format', ({
  file1, file2, expected, style,
}) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), style)).toEqual(readFileSync(getFixturePath(expected), 'utf8'));
});

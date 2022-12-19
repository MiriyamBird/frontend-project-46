import { readFileSync } from 'node:fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

let json1;
let json2;

beforeAll(() => {
    json1 = JSON.parse(readFile('file1.json'));
    json2 = JSON.parse(readFile('file2.json'));
});

test ('check json', () => {
    expect(genDiff(json1, json2)).toEqual();
});
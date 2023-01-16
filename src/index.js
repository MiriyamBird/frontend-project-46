import { readFileSync } from 'node:fs';
import path from 'path';
import compareFiles from './comparison.js';
import parse from './parser.js';
import format from './formatters/index.js';

const readFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  return readFileSync(fullPath).toString();
};

const findFileExtension = (filePath) => path.extname(filePath).slice(1);

const genDiff = (filePath1, filePath2, style = 'stylish') => {
  const file1 = readFile(filePath1);
  const file2 = readFile(filePath2);

  const data1 = parse(file1, findFileExtension(filePath1));
  const data2 = parse(file2, findFileExtension(filePath2));

  return format((compareFiles(data1, data2)), style);
};

export default genDiff;

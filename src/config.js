import { readFileSync } from 'node:fs';
import path from 'path';

const readFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const data = readFileSync(fullPath).toString();
  return data;
};

const findFileExtension = (filePath) => {
  const fileName = filePath.split('/');
  const fileExtension = fileName.at(-1).split('.')[1].toLowerCase();
  return fileExtension;
};

const config = (filePath) => {
  if (findFileExtension(filePath) === 'json') {
    var result = JSON.parse(readFile(filePath));
  }
  return result;
};

export default config;

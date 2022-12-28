import { readFileSync } from 'node:fs';
import path from 'path';
import yaml from 'js-yaml';

const readFile = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const data = readFileSync(fullPath).toString();
  return data;
};

const findFileExtension = (filePath) => path.extname(filePath);

const config = (filePath) => {
  const fileExtension = findFileExtension(filePath);
  let result;
  if (fileExtension === '.json') {
    result = JSON.parse(readFile(filePath));
  }
  if (fileExtension === ('.yml' || '.yaml')) {
    result = yaml.load(readFile(filePath));
  }
  return result;
};

export default config;

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
  if (fileExtension === '.json') {
    return JSON.parse(readFile(filePath));
  }
  if (fileExtension === ('.yml' || '.yaml')) {
    return yaml.load(readFile(filePath));
  }
  return 'Error';
};

export default config;

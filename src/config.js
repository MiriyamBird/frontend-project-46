import { readFileSync } from 'node:fs';
import path from 'path';

const readFile = (anyPath) => {
    const fullPath = path.resolve(process.cwd(), anyPath);
    const data = readFileSync(fullPath).toString()
    return data;
}

const config = (path1, path2) => {
    const config1 = JSON.parse(readFile(path1));
    const config2 = JSON.parse(readFile(path2));

    return [config1, config2];
};

export default config;
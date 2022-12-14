import { readFileSync } from 'node:fs';

const config = (pathToFile1, pathToFile2) => {
    const config1 = JSON.parse(readFileSync(pathToFile1));
    const config2 = JSON.parse(readFileSync(pathToFile2));

    return [config1, config2];
};

export default config;
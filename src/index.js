import compareFiles from './comparison.js';
import config from './config.js';

const genDiff = (file1, file2) => {
    return compareFiles(config(file1, file2))
}

export default genDiff;
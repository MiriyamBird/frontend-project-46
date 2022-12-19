import compareFiles from './src/comparison.js';
import config from './src/config.js';

const genDiff = (file1, file2) => compareFiles(config(file1), config(file2));

export default genDiff;

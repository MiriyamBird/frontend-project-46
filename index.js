import compareFiles from './src/comparison.js';
import config from './src/config.js';
import format from './src/formatters/index.js';

const genDiff = (file1, file2, style = 'stylish') => format((compareFiles(config(file1), config(file2))), style);

export default genDiff;

import compareFiles from './src/comparison.js';
import config from './src/config.js';
import stylish from './src/formatters/stylish.js';

const genDiff = (file1, file2) => stylish(compareFiles(config(file1), config(file2)));

export default genDiff;

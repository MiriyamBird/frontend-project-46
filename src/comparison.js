import _ from 'lodash';

const checkKeysIsChanged = (file1, file2) => {
    const keys1 = Object.keys(file1);
    const keys2 = Object.keys(file2);
    const keys = _.union(keys1, keys2);

    const result = {};
    for (const key of keys) {
        if (!Object.hasOwn(file1, key)) {
            result[key] = 'added';
        } else if (!Object.hasOwn(file2, key)) {
            result[key] = 'deleted';
        } else if (file1[key] !== file2[key]) {
            result[key] = 'changed';
        } else {
            result[key] = 'unchanged';
        }
    }

    return result;
};

const compareFiles = (file1, file2) => {
    const keysIsChanged = checkKeysIsChanged(file1, file2);
    const allKeys = _.sortBy(Object.keys(keysIsChanged));

    let result = '{\n';

    for (const key of allKeys) {
        if (keysIsChanged[key] === 'unchanged') {
            result = result + `    ${key}: ${file1[key]}\n`;
        } else if (keysIsChanged[key] === 'deleted') {
            result = result + `  - ${key}: ${file1[key]}\n`;
        } else if (keysIsChanged[key] === 'added') {
            result = result + `  + ${key}: ${file2[key]}\n`;
        } else {
            result = result + `  - ${key}: ${file1[key]}\n`;
            result = result + `  + ${key}: ${file2[key]}\n`;
        }
    }

    result = result + '}';

    return result;
};

export default compareFiles;

import _ from 'lodash';

const compareFiles = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const allKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(allKeys);

  const result = sortedKeys.map((key) => {
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { type: 'object', key, value: compareFiles(file1[key], file2[key]) };
    }
    if (!Object.hasOwn(file1, key)) {
      return { type: 'added', key, value: file2[key] };
    }
    if (!Object.hasOwn(file2, key)) {
      return { type: 'deleted', key, value: file1[key] };
    }
    if (file1[key] !== file2[key]) {
      return {
        type: 'changed', key, oldValue: file1[key], newValue: file2[key],
      };
    }

    return { type: 'changed', key, value: file1[key] };
  });

  return result;
};

export default compareFiles;

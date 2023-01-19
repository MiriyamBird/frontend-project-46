import _ from 'lodash';

const getFormattedValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return `${value}`;
};

const plain = (value) => {
  const iter = (tree, key = '') => {
    const result = tree.map((node) => {
      const newKeys = [...key, node.key];

      switch (node.type) {
        case 'object':
          return iter(node.value, newKeys);
        case 'added':
          return `Property '${newKeys.join('.')}' was added with value: ${getFormattedValue(node.value)}`;
        case 'deleted':
          return `Property '${newKeys.join('.')}' was removed`;
        case 'unchanged':
          return 'unchanged';
        case 'changed':
          return `Property '${newKeys.join('.')}' was updated. From ${getFormattedValue(node.oldValue)} to ${getFormattedValue(node.newValue)}`;
        default:
          throw new Error('Unable to compare properties');;
      }
    });

    return result.filter((node) => node !== 'unchanged').join('\n');
  };

  return iter(value, []);
};

export default plain;

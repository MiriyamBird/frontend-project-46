import yaml from 'js-yaml';

const parse = (file, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(file);
    case 'yml' || 'yaml':
      return yaml.load(file);
    default:
      throw new Error('The file cannot be read. Choose a .json, .yml or .yaml file');
  }
};

export default parse;

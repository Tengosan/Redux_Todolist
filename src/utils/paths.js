import PATH_HOST from 'Constants/paths';

const getAbsolutePath = relativePath => [PATH_HOST, relativePath].join('');

export default getAbsolutePath;

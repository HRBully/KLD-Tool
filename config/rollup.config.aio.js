const nodeResolve = require('rollup-plugin-node-resolve');
const common = require('./rollup.js');
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js',
    format: 'umd',
    name: 'sum',
  },
  plugins: [
    nodeResolve({
      main: true,
      extendsions: ['.js'],
    }),
    common.getComplier(),
  ],
}
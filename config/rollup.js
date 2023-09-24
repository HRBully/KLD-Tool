const babel = require('rollup-plugin-babel')
function getComplier(opt) {
  return babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: ['last 2 versions', 'IE 10']
          },
          loose: true
        }
      ]
    ],
    exclude: 'node_modules/**',
  })
}

exports.getComplier = getComplier
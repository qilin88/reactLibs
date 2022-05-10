const { resolve } = require('path');
const webpack = require('webpack');
const { ModuleFilenameHelpers } = require('webpack');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.config.js`);
const _modeflag = _mode === 'production' ? true : false;

const webpackBaseConfig = {
    entry: {
      main: resolve('src/web/index.tsx'),
    },
    output: {
        path: resolve(process.cwd(), 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            include: '/node_modules/',  //
            use: {
              loader: 'swc-loader',
            },
          },
        ],
      },
}
module.exports = merge(webpackBaseConfig, _mergeConfig)
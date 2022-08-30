/*
 * @Author: 李韬
 * @Date: 2022-07-19 13:54:07
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 09:35:02
 */
const path = require('path');
var fs = require('fs');
const glob = require('glob');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
var utilsList = fs.readdirSync(path.resolve(__dirname, './packages/utils'));
const list = {};

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  console.log(files);
  for(let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`;
  }
}

makeList('packages/lib', list)
var externals = {
  vue:'vue',
};
// 打包排除
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`zfs-mobile/packages/utils/${file}`] = `zfs-mobile/lib/utils/${file}`;
});
module.exports = {
  entry: list,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  mode: 'development',
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'img/[name].[hash:6][ext]',
            limit: 1024 * 8,
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-withimg-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'zfs-mobile': path.resolve(__dirname, './')
    },
  },
  externals,
};
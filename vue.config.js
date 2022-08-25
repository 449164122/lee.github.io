/*
 * @Author: 李韬
 * @Date: 2022-08-25 15:11:01
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-25 15:12:41
 */
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
    .set('zfs-mobile', path.resolve(__dirname, './'),)
  },
}

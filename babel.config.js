/*
 * @Author: 李韬
 * @Date: 2022-08-25 11:56:46
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-25 13:46:47
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}

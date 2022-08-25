/*
 * @Author: 李韬
 * @Date: 2022-08-23 13:47:30
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-24 10:44:22
 */
import cell from './src/cell.vue';

cell.install = (Vue) => {
  Vue.component(cell.name, cell)
};

export default cell;
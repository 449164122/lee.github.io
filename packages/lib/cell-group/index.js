/*
 * @Author: 李韬
 * @Date: 2022-08-23 14:34:36
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-24 10:52:26
 */
import cellGroup from './src/cell-group.vue';

cellGroup.install = (Vue) => {
  Vue.component(cellGroup.name, cellGroup)
};

export default cellGroup;
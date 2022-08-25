/*
 * @Author: 李韬
 * @Date: 2022-08-09 14:05:53
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-09 15:10:52
 */
import avatar from './src/avatar.vue';

avatar.install = (Vue) => {
  Vue.component(avatar.name, avatar);
};

export default avatar;
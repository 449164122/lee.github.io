/*
 * @Author: 李韬
 * @Date: 2022-11-22 09:26:00
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-22 10:51:11
 */
import datetimePicker from './src/datetimePicker.vue';

datetimePicker.install = (Vue) => {
  Vue.component(datetimePicker.name, datetimePicker)
};

export default datetimePicker;
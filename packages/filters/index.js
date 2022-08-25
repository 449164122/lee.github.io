/*
 * @Author: Do not edit
 * @Date: 2019-12-04 10:55:47
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-27 11:49:43
 * @FilePath: \@zfs/ui\src\filters\index.js
 */
import formatMoney from './formatMoney';
import getProperty from './getProperty';
import formatDate from './formatDate';
import formatBank from './formatBank';
import telHideCenter from './telHideCenter';

export default {
  install(Vue) {
    Vue.filter('formatMoney', formatMoney);
    Vue.filter('getProperty', getProperty);
    Vue.filter('formatDate', formatDate);
    Vue.filter('formatBank', formatBank);
    Vue.filter('telHideCenter', telHideCenter);
  },
};

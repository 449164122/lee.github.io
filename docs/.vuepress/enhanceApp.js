/*
 * @Author: 李韬
 * @Date: 2022-08-25 16:22:57
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-30 16:28:32
 */
import Vue from 'vue';
import '../../lib/css/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

export default async ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata,
  isServer
}) => {
  Vue.use(Vant);
  if (!isServer) {
      await import('../../lib/index.umd').then(module => {
          Vue.use(module.default);
      });
  }
}
    
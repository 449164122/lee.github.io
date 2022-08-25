/*
 * @Author: 李韬
 * @Date: 2022-07-29 15:39:01
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-03 08:53:32
 */
import Vue from 'vue';
import loading from './loading.vue';
import { isVNode } from 'zfs-mobile/packages/utils/vdom';

let loadingConstructor = Vue.extend(loading);
let instance;

const Loading = function(options = '加载中...') {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  instance = new loadingConstructor({
    data: options
  });
  if (isVNode(instance.icon)) {
    instance.$slots.default = instance.icon;
  }
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  return instance;
}

export default Loading;

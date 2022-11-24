/*
 * @Author: 李韬
 * @Date: 2022-07-29 15:39:01
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-24 14:36:28
 */
import Vue from 'vue';
import dialog from './dialog.vue';

let dialogConstructor = Vue.extend(dialog);
let instance;
const types = ['alert', 'confirm', 'prompt']
const Dialog = function(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,
      type: 'alert'
    };
  }
  instance = new dialogConstructor({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  return new Promise((resolve,reject) => {
    instance.callback = (action, value) => {
      if (action === 'confirm') {
        resolve(value);
      }else if (action === 'cancel') {
        reject();
      }
    }
  })
}
Dialog.close = () => { instance.visible = false};
types.forEach(type=>{
  Dialog[type] = (options)=>{
    return Dialog(
      {
        type,
        ...options
      }
    )
  }
})

export default Dialog;

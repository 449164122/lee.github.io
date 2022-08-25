/*
 * @Author: 李韬
 * @Date: 2022-07-29 15:39:01
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-24 10:31:56
 */
import Vue from 'vue';
import dialog from './dialog.vue';

let dialogConstructor = Vue.extend(dialog);
let instance;
let instances = [];
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
  if (instances.length) {
    // 只取最后一个实例
    instances.forEach(item =>{
      document.body.removeChild(item.$el);
    })
    instances = [];
  }
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instances.push(instance);
  return new Promise((resolve,reject) => {
    instance.callback = (action, value) => {
      instances = [];
      if (action === 'confirm') {
        resolve(value);
      }else if (action === 'cancel') {
        reject();
      }
    }
  })
}
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

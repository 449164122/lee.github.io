/*
 * @Author: 李韬
 * @Date: 2022-07-29 15:39:01
 * @LastEditors: 李韬
 * @LastEditTime: 2023-03-08 09:03:11
 */
import Vue from 'vue';
import message from './message.vue';

let MessageConstructor = Vue.extend(message);
let instance;
const types = ['success', 'warning', 'info', 'error'];

const Message = function(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  if (!types.includes(options.type)) {
    options.type = 'info';
  }
  instance = new MessageConstructor({
    data: options
  });
  instance.$mount();
  const prev = document.getElementById('zfs-r-message');
  if (prev) {
    document.body.removeChild(prev);
  }
  document.body.appendChild(instance.$el);
  let verticalOffset = document.querySelector('.zte-header') ? 40: 0;
  instance.verticalOffset = verticalOffset;
  instance.visible = true;
  return instance;
};

types.forEach(type => {
  Message[type] = (options) => {
    return Message({
      type,
      message: options
    });
  };
});

export default Message;
/*
 * @Author: 李韬
 * @Date: 2022-07-19 11:36:31
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-24 10:54:28
 */
import badge from "./badge";
import avatar from "./avatar";
import button from "./button";
import search from "./search";
import Message from "./message";
import Loading from "./loading";
import Dialog from "./dialog";
import Cell from "./cell";
import CellGroup from "./cell-group";
import directives from "../directives"
import filters from "../filters"

const components = {
  badge,
  button,
  search,
  avatar,
  Cell,
  CellGroup
};

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
  Vue.prototype.$message = Message;
  Vue.prototype.$loading = Loading;
  Vue.prototype.$dialog = Dialog;
  Vue.use(directives);
  Vue.use(filters);
}


export default {
  install,
}
/*
 * @Author: 李韬
 * @Date: 2022-08-25 11:56:46
 * @LastEditors: 李韬
 * @LastEditTime: 2023-03-21 11:37:33
 */
import Vue from 'vue'
import App from './App.vue'
import zfsMobile from '../packages/lib/index';
import '../packages/css/index.scss';
import directives from '../packages/directives'
Vue.config.productionTip = false
import { Button, Search, Badge, DatetimePicker, Picker } from 'vant';

Vue.use(Button);
Vue.use(Search);
Vue.use(Badge);
Vue.use(DatetimePicker);
Vue.use(Picker);
Vue.use(directives);
Vue.use(zfsMobile);

new Vue({
  render: h => h(App),
}).$mount('#app')

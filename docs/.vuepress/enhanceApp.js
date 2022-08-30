/*
 * @Author: 李韬
 * @Date: 2022-08-25 16:22:57
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-26 13:44:35
 */
import Vue from 'vue';
import zfsMobile from '../../lib/index.umd';
import '../../lib/css/index.css';
import directives from '../../packages/directives'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(zfsMobile);
Vue.use(directives);
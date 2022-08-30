import Vue from 'vue'
import App from './App.vue'
import zfsMobile from 'zfs-mobile/lib/index.umd';
import 'zfs-mobile/lib/css/index.css';
import directives from '../packages/directives'
Vue.config.productionTip = false
import { Button, Search, Badge  } from 'vant';

Vue.use(Button);
Vue.use(Search);
Vue.use(Badge);
Vue.use(directives);
Vue.use(zfsMobile);

new Vue({
  render: h => h(App),
}).$mount('#app')

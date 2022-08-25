import Vue from 'vue'
import App from './App.vue'
import '../packages/css/index.scss';
import '../packages/lib/index';
import directives from '../packages/directives'
Vue.config.productionTip = false
import { Button, Search  } from 'vant';

Vue.use(Button);
Vue.use(Search);
Vue.use(directives);


new Vue({
  render: h => h(App),
}).$mount('#app')

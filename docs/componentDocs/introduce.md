<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:56:49
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-26 15:38:45
-->
# 指南
中兴新云移动端组件库
## 快速开始
### 1、安装组件库
```js
npm i zfs-mobile
```
### 2、引入组件库
```js
import zfsMobile from 'zfs-mobile';
import 'zfs-mobile/lib/css/index.css';

Vue.use(zfsMobile);
```
### 3、按需引入Vant组件
此组件库部分组件（button,search,badge）依赖于Vant,使用前请先按需或全局引入Vant组件。

``` js
import {
  Button, Search, badge,
} from 'vant';

Vue.use(Button);
Vue.use(Search);
Vue.use(badge);
<!--
 * @Author: 李韬
 * @Date: 2022-07-15 14:37:08
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-25 15:20:13
-->
# zfs-mobile

### 快速开始
#### 1、安装组件库
```
npm i zfs-mobile
```

#### 2、引入组件库
```
import zfsMobile from 'zfs-mobile';
import 'zfs-mobile/lib/css/index.css';

Vue.use(zfsMobile);
```
#### 3、按需引入Vant组件
此组件库部分组件（button,search,badge）依赖于Vant,使用前请先按需或全局引入Vant组件。
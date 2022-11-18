<!--
 * @Author: 李韬
 * @Date: 2022-09-20 17:52:22
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-18 11:15:54
-->
## 防抖
`v-debounce`
```js
v-debounce="方法名"
// 如
v-debounce="handleConfirm"
```
## 节流
`v-throttle`
```js
v-throttle="方法名"
// 如
v-throttle="handleConfirm"
```

## 双击查看全部
`v-detail`
## 示例
:::demo 
```html
<template>
  <div>
    <div v-detail>不赋值则取div的innerText不赋值则取div的innerText不赋值则取div的innerText不赋值则取div的innerText不赋值则取div的innerText不赋值则取div的innerText</div>
    <div v-detail="realContent">赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      realContent: '这才是真正的内容',
    };
  },
};
</script>
```
:::
<div>
## 水印
`v-watermark`
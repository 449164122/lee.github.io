<!--
 * @Author: 李韬
 * @Date: 2022-09-20 17:52:22
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-18 11:00:38
-->
## 防抖
`v-debounce`
## 节流
`v-throttle`
## 双击查看全部
`v-detail`
## 示例
:::demo 
```html
<template>
  <div>
    <div v-detail>不赋值则取div的innerText不赋值则取div的innerText不赋值则取div的innerText不赋值则取div的innerText不赋值则取div的innerText不赋值则取div的innerText</div>
    <div v-detail="这才是真正双击查看的内容">赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果赋值取赋值的结果</div>
  </div>
</template>
```
:::
<div>
## 水印
`v-watermark`
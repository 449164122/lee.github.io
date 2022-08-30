<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:42:15
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 17:10:56
-->
# 加载提示
## 示例

:::demo
```html
<template>
  <div style="display:flex;flex-wrap:wrap">
    <zfs-button size="big" @click="handlerClick1">加载提示</zfs-button>
    <zfs-button size="big" @click="handlerClick2">自定义文字</zfs-button>
  </div>
</template>
<script>
export default {
  methods: {
    handlerClick1() {
      const loading = this.$loading();
      setTimeout(()=>{loading.close()}, 2000);
    },
    handlerClick2() {
      // this.$loading('自定义文字') 简写版;
      const loading = this.$loading({
        message: '自定义文字'
      });
      setTimeout(()=>{loading.close()}, 2000);
    }
  }
}
</script>
```
:::


## API
|参数 | 说明 | 类型 |可选| 默认值 |
| ---- | ---- | ---- | ---- | ---- |
|message|消息文字|string|-  |加载中...    |
|icon|加载图标|VNode|-|-|

## 方法
|参数 | 说明 |
| ---- | ---- |
|close|关闭当前loading|

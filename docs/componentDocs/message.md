<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:41:56
 * @LastEditors: 李韬
 * @LastEditTime: 2023-03-01 11:50:43
-->
# 消息提示

## 示例
### 不同状态

:::demo
```html
<template>
  <div class="zfs-btns">
    <zfs-button size="small" @click="open1">消息</zfs-button>
    <zfs-button size="small" @click="open2">成功</zfs-button>
    <zfs-button size="small" @click="open3">警告</zfs-button>
    <zfs-button size="small" @click="open4">禁止</zfs-button>
  </div>
</template>
<script>
export default {
  methods: {
    open1() {
      this.$message.info('消息提示自动消失，文案自定义');
    },
    open2() {
      this.$message.success('消息提示自动消失，文案自定义');
    },
    open3() {
      this.$message.warning('消息提示自动消失，文案自定义');
    },
    open4() {
      this.$message.error('消息提示自动消失，文案自定义');
    }
  }
}
</script>
```
:::


### 可关闭

:::demo
```html
<template>
  <div class="zfs-btns">
    <zfs-button size="small" @click="open1">消息</zfs-button>
    <zfs-button size="small" @click="open2">成功</zfs-button>
    <zfs-button size="small" @click="open3">警告</zfs-button>
    <zfs-button size="small" @click="open4">禁止</zfs-button>
  </div>
</template>
<script>
export default {
  methods: {
    open1() {
      this.$message({
        type: 'info',
        message: '消息提示内容',
        showClose: true
      });
    },
    open2() {
      this.$message({
        type: 'success',
        message: '消息提示内容',
        showClose: true
      });
    },
    open3() {
      this.$message({
        type: 'warning',
        message: '消息提示内容',
        showClose: true
      });
    },
    open4() {
      this.$message({
        type: 'error',
        message: '消息提示内容',
        showClose: true
        onConfirm() {
          console.log('点击我知道后的回调方法')
        }
      });
    }
  }
} 
</script>
```
:::

## API
|参数 | 说明 | 类型 |可选| 默认值 |
| ---- | ---- | ---- | ---- | ---- |
|message|消息文字|string|-  |-    |
|duration|提示悬浮时间|number|-  |2000    |
|type|主题|string|info,success,warning,error |info|
|showClose|手动关闭|boolean|true,false |false|
|closeText|关闭按钮文字|string|- |我知道了|

## 方法
|参数 | 说明 |
| ---- | ---- |
|close|关闭提示|
|onConfirm|点击我知道了的回调方法|
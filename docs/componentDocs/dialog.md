<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:42:55
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 16:53:14
-->
# 模态框
## 示例
### 模态框类型
::: demo
```html
<template>
  <div style="display:flex;flex-wrap:wrap">
    <zfs-button size="big" @click="open1">提示弹窗</zfs-button>
    <zfs-button size="big" @click="open2">提示弹窗（无标题）</zfs-button>
    <zfs-button size="big" @click="open3">确认弹窗</zfs-button>
    <zfs-button size="big" @click="open4">输入确认弹窗</zfs-button>
  </div>
</template>
<script>
 export default {
  data() {
    return {
      pickerVisible: '123',
    };
  },
  methods: {
    open1() {
      this.$dialog(
        {
          title: '标题',
          message: '内容',
          type: 'alert'
        }
      )
    },
    open2() {
      this.$dialog(
        {
          message: '内容',
          type: 'alert'
        }
      )
    },
    open3() {
      this.$dialog(
        {
          title: '审批意见',
          message: '内容内容内容内容内容',
          type: 'confirm'
        }
      )
    },
    open4() {
      this.$dialog(
        {
          title: '审批意见',
          message: '内容内容内容内容内容',
          type: 'prompt'
        }
      )
    }
  }
};
</script>
```
:::


### 带校验

::: demo
```html
<template>
  <div style="display:flex;flex-wrap:wrap">
    <zfs-button size="big" @click="open5">正则校验</zfs-button>
    <zfs-button size="big" @click="open6">提交校验</zfs-button>
  </div>
</template>
<script>
 export default {
    methods: {
      open5() {
        this.$dialog(
          {
            title: '审批意见',
            message: '内容内容内容内容内容',
            type: 'prompt',
            inputPattern:/[A-Za-z]/,
            warningMsg:'必须包含字母'
          }
        )
      },
      open6() {
        this.$dialog(
          {
            title: '审批意见',
            message: '内容内容内容内容内容',
            type: 'prompt',
            cb(value) {
              const reg = /[A-Za-z]/;
              if (!reg.test(value)) {
                this.$message.error('必须包含字母');
                return false;
              }
              return true;
            }
          }
        )
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
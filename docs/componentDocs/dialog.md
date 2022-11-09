<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:42:55
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-09 15:46:43
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
    <zfs-button size="big" @click="open3">确认弹窗1</zfs-button>
    <zfs-button size="big" @click="open4">确认弹窗2</zfs-button>
    <zfs-button size="big" @click="open5">输入确认弹窗</zfs-button>
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
          title: '回调不同写法1',
          message: '内容内容内容内容内容',
          type: 'confirm'
        }
      ).then(() => {
        console.log('确认');
      }).catch(()=>{console.log('取消');})
    },
    open4() {
      this.$dialog(
        {
          title: '回调不同写法2',
          message: '内容内容内容内容内容',
          type: 'confirm',
          onConfirm: () => {console.log('确认');},
          onCancel: () => {console.log('取消');}
        }
      )
    },
    open5() {
      this.$dialog(
        {
          title: '审批意见',
          message: '内容内容内容内容内容',
          type: 'prompt',
        }
      ).then((res) => {
        console.log(res);
      })
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
            beforeSubmit(value) {
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
|title|标题|string|-  |-   |
|message|内容|string|-|-|
|type|模态框类型|string|alert,confirm,prompt|-|
|iconclass|加载图标|string|-|-|
|warningMsg|不满足正则提示信息|string|-|-|
|inputPattern|type为prompt点确认之前的正则校验|正则|-|-|
|alertButtonText|type为alert确认文字|string|-|我知道了|
|cancelButtonText|取消文字|string|-|取消|
|confirmButtonText|确认文字|string|-|确认|
|placeholder|占位文字|string|-|请输入|
|value|输入框值|string|-|-|
|showInput|是否显示输入框|boolean|true,false|true|
|messageAlign|内容对齐方式|string|left,center,right|center|

## 方法
|参数 | 说明 |
| ---- | ---- |
|beforeSubmit|type为prompt点确认之前的校验函数|
|onConfirm|点击确认按钮回调函数|
|onCancel|点击取消按钮回调函数|
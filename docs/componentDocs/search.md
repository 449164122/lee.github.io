<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:32:06
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 17:00:52
-->
# 搜索

## 示例
:::demo
```html
<template>
  <zfs-search v-model="value" placeholder="搜索" />
</template>
<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>
```
:::

## API


|参数|	说明|	类型|	默认值|
| ---- | ---- | ---- | ---- |
|label|	搜索框左侧文本|	string	-|
|shape|	搜索框形状，可选值为 round|	string|	round|
|background| 搜索框外部背景色| string| #f2f2f2|
|maxlength| 输入的最大字符数| number | string| -|
|placeholder| 占位提示文字| string| 搜索|
|clearable| 是否启用清除图标，点击清除图标后会清空输入框| boolean| true|
|clear-trigger v2.9.1| 显示清除图标的时机，always 表示输入框不为空时展示，|
|focus 表示输入框聚焦且不为空时展示| string| focus|
|autofocus| 是否自动聚焦，iOS 系统不支持该属性| boolean| false|
|show-action| 是否在搜索框右侧显示取消按钮| boolean| false|
|action-text| 取消按钮文字| boolean| 取消|
|disabled| 是否禁用输入框| boolean| false|
|readonly| 是否将输入框设为只读| boolean| false|
|error| 是否将输入内容标红| boolean| false|
|input-align| 输入框内容对齐方式，可选值为 center right| string| left|
|left-icon| 输入框左侧图标名称或图片链接| string| search|
|right-icon| 输入框右侧图标名称或图片链接| string| -|

## Events

|事件名|说明|回调参数|
| ---- | ---- | ---- |
|search|确定搜索时触发|value: string (当前输入的值)|
|input|输入框内容变化时触发|value: string (当前输入的值)|
|focus|输入框获得焦点时触发|event: Event|
|blur|输入框失去焦点时触发|event: Event|
|clear|点击清除按钮后触发|event: Event|
|cancel|点击取消按钮时触发|-|

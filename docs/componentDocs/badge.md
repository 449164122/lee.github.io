<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:40:51
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-31 08:58:06
-->
# Badge 徽标

## 示例
:::demo
```html
<template>
  <div style="display:flex">
    <zfs-badge :content="5">
  <div class="child" />
  </zfs-badge>
  <zfs-badge :content="999">
    <div class="child" />
  </zfs-badge>
  <zfs-badge dot>
    <div class="child" />
  </zfs-badge>
  </div>
</template>
```
:::

## 自定义颜色
:::demo
```html
<template>
  <div style="display:flex">
    <zfs-badge :content="5" color="#1989fa">
  <div class="child" />
  </zfs-badge>
  <zfs-badge dot color="#1989fa">
    <div class="child" />
  </zfs-badge>
  </div>
</template>
```
:::

## API
|参数 | 说明 | 类型 |可选| 默认值 |
| ---- | ---- | ---- | ---- | ---- |
|content|徽标内容|number,string|-  |-   |
|color|徽标背景颜色|string|-|rgb(247, 107, 107)|
|dot|是否展示为小红点|boolean |false|
|max|是否展示为小红点|最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效|number |99|

## slots
|参数 | 说明 |
| ---- | ---- |
|default|	徽标包裹的子元素|
|content|	自定义徽标内容|
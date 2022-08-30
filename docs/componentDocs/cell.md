<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:41:31
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 17:26:09
-->
# 列表组件

## 示例
Cell可以单独使用，也可以与 CellGroup 搭配使用，CellGroup 可以为 Cell 提供上下外边框。
:::demo 
```html
<template>
  <zfs-cell-group>
    <zfs-cell title="标题" value="内容"></zfs-cell>
    <zfs-cell value="只有内容"></zfs-cell>
    <zfs-cell title="标题" value="内容" label="描述信息"></zfs-cell>
    <zfs-cell title="带箭头" value="内容" isLink></zfs-cell>
    <zfs-cell title="超长省略双击查看全部" value="内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长"></zfs-cell>
  </zfs-cell-group>
</template>
```
:::

## API
|参数 | 说明 | 类型 |可选| 默认值 |
| ---- | ---- | ---- | ---- | ---- |
|title|标题|string|-  |-   |
|value|内容|string|-|-|
|isLink|箭头|boolean|true,false|false|

## slots
|参数 | 说明 |
| ---- | ---- |
|default|自定义左侧 title 的内容|

<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:43:23
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 17:46:04
-->
# 头像组件

## 示例展示
通过size 设置头像的大小。
:::demo
```html
<template>
  <div>
    <zfs-avatar size="large" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
    <zfs-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
    <zfs-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
  </div>
</template>
```
:::

通过background设置头像的背景色。
:::demo
```html
<template>
  <div>
    <zfs-avatar size="large" background="pink"/>
    <zfs-avatar size="medium" background="pink"/>
    <zfs-avatar size="small" background="pink"/>
  </div>
</template>
```
:::

自定义头像大小
:::demo
```html
<template>
  <div>
    <zfs-avatar :size="200" background="pink"/>
  </div>
</template>
```
:::

插槽自定义头像内容
:::demo
```html
<template>
  <div>
    <zfs-avatar size="large">
      司徒浩南
    </zfs-avatar>
    <zfs-avatar size="large">
      陈浩南
    </zfs-avatar>
    <zfs-avatar size="large">
      浩南
    </zfs-avatar>
  </div>
</template>
```
:::

## API
|参数 | 说明 | 类型 |可选| 默认值 |
| ---- | ---- | ---- | ---- | ---- |
|size|标题|string,number|large,medium,small |-   |
|background|背景色|color|-|#4789FF|

## slots
|参数 | 说明 |
| ---- | ---- |
|default|自定义头像内容|
<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:39:48
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 16:58:11
-->
# 按钮

## 示例
### 按钮类型
:::demo
```html
<div class="zfs-btns">
  <zfs-button>默认按钮</zfs-button>
  <zfs-button type="primary">主要按钮</zfs-button>
  <zfs-button type="success">成功按钮</zfs-button>
  <zfs-button type="warning">警告按钮</zfs-button>
  <zfs-button type="danger">错误按钮</zfs-button>
  <zfs-button type="text">文本按钮</zfs-button>
</div>
```
:::
### 禁用状态
:::demo
```html
<div class="zfs-btns">
  <zfs-button disabled type="primary">主要按钮</zfs-button>
  <zfs-button disabled type="success">成功按钮</zfs-button>
  <zfs-button disabled type="warning">警告按钮</zfs-button>
  <zfs-button disabled type="danger">错误按钮</zfs-button>
</div>
```
:::

### 加载状态
:::demo
```html
<div class="zfs-btns">
  <zfs-button loading type="primary">主要按钮</zfs-button>
  <zfs-button loading type="success">成功按钮</zfs-button>
  <zfs-button loading type="warning">警告按钮</zfs-button>
  <zfs-button loading type="danger">错误按钮</zfs-button>
</div>
```
:::

### 按钮形状
:::demo
```html
<div class="zfs-btns">
  <zfs-button type="primary">主要按钮</zfs-button>
  <zfs-button round type="primary">主要按钮</zfs-button>
</div>
```
:::

### 按钮尺寸
:::demo
```html
<div class="zfs-btns">
  <zfs-button size="big" type="primary">大按钮</zfs-button>
  <zfs-button size="medium" type="primary">中按钮</zfs-button>
  <zfs-button size="small" type="primary">小按钮</zfs-button>
</div>
```
:::

### 自定义颜色
:::demo
```html
<div class="zfs-btns">
  <zfs-button color="#7232dd">单色按钮</zfs-button>
  <zfs-button color="#7232dd" plain>单色按钮</zfs-button>
  <zfs-button color="linear-gradient(to right, #ff6034, #ee0a24)">
    渐变色按钮
  </zfs-button>
</div>
```
:::

## API
Props
|参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
|type | 类型，可选值为 primary success warning danger text | string | default|
|size | 尺寸，可选值为 big medium small | string | big|
|text | 按钮文字 | string | -|
|color | 按钮颜色，支持传入 linear-gradient 渐变色 | string | -|
|tag | 按钮根节点的 HTML 标签 | string | button|
|native-type | 原生 button 标签的 type 属性 | string | button|
|block | 是否为块级元素 | boolean | false|
|plain | 是否为朴素按钮 | boolean | false|
|round | 是否为圆形按钮 | boolean | false|
|disabled | 是否禁用按钮 | boolean | false|
|hairline | 是否使用 0.5px 边框 | boolean | false|
|loading | 是否显示为加载状态 | boolean | false|
|loading-text | 加载状态提示文字 | string | -|
|loading-type | 加载图标类型，可选值为 spinner | string | circular|
|loading-size | 加载图标大小，默认单位为 px | number | string | 20px|
|url | 点击后跳转的链接地址 | string | -|
|to | 点击后跳转的目标路由对象，等同于 vue-router 的 to 属性 | string | object | -|
|replace | 是否在跳转时替换当前页面历史 | boolean | false|


## Events
|事件名	|说明|	回调参数|
| ---- | ---- | ---- |
|click|	点击按钮，且按钮状态不为加载或禁用时触发	event: MouseEvent|
|touchstart|	开始触摸按钮时触发	|event: TouchEvent|
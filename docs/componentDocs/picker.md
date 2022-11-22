<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:42:55
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-22 15:21:25
-->
# 模态框
## 示例
### Picker 选择器
::: demo
```html
<template>
  <div>
    <zfs-picker
      title="标题"
      :columns="columns"
    />
  </div>
</template>
<script>
 export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
    };
  },
  methods: {
  }
};
</script>
```
:::


### 默认选中项

::: demo
```html
<template>
  <div>
    <zfs-picker 
      title="标题" 
      :columns="columns" 
      :default-index="2" 
    />
  </div>
</template>
<script>
 export default {
    data() {
      return {
        columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      }
    }
  }
</script>
```
:::

### value-key使用

::: demo
```html
<template>
  <div>
    <zfs-picker 
      title="标题" 
      value-key="label"
      :columns="columns" 
      :default-index="2" 
    />
  </div>
</template>
<script>
 export default {
    data() {
      return {
        columns: [
          {
            value: '001',
            label: '张三',
          },
          {
            value: '002',
            label: '李四',
          },
          {
            value: '003',
            label: '王五',
          },
          {
            value: '004',
            label: '赵六',
          },
          {
            value: '005',
            label: '刘备',
          },
          {
            value: '006',
            label: '张飞',
          },
          {
            value: '007',
            label: '关羽',
          },
          {
            value: '008',
            label: '赵子龙',
          },
        ]
      }
    }
  }
</script>
```
:::

## Props

|参数| 说明|类型|默认值|
| ---- | ---- | ---- | ---- |
|columns|对象数组，配置每一列显示的数据|	Column[] |	[]|
|title	|顶部栏标题	|string	|''|
|confirm-button-text|	确认按钮文字|	string	|确认|
|cancel-button-text	|取消按钮文字|	string	|取消|
|default-index |	单列选择时，默认选中项的索引 |	单列选择时，默认选中项的索引|	0|
|value-key|	选项对象中，选项文字对应的键名|	string|	text|

## 方法
|参数 | 说明 | 回调参数 |
| ---- | ---- |----|
|change|选项改变时触发| Picker 实例，选中值，选中值对应的索引|
|confirm|	点击完成按钮时触发的事件| 选中值，选中值对应的索引|
|cancel|点击取消按钮时触发的事件| 选中值，选中值对应的索引 |
<!--
 * @Author: 李韬
 * @Date: 2022-08-25 15:42:55
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-22 11:39:19
-->
# 模态框
## 示例
### 选择年月日
::: demo
```html
<template>
  <div>
    <zfs-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>
<script>
 export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2021, 0, 17),
    };
  },
  methods: {
  }
};
</script>
```
:::


### 选择年月

::: demo
```html
<template>
  <div>
    <zfs-datetime-picker
      v-model="currentDate"
      type="year-month"
      title="选择年月"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>
<script>
 export default {
    data() {
      return {
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
      }
    }
  }
</script>
```
:::
## Props

|参数| 说明|类型|默认值|
| ---- | ---- | ---- | ---- |
|type|时间类型，可选值为 date、time、year-month、 month-day、 datehour|	string |	datetime|
|title	|顶部栏标题	|string	|''|
|confirm-button-text|	确认按钮文字|	string	|确认|
|cancel-button-text	|取消按钮文字|	string	|取消|
|filter |	选项过滤函数|	(type, vals) => vals|	-|
|formatter|	选项格式化函数|	(type, val) => val|	-|

## DatePicker Props
#### 当时间选择器类型为 date 或 datetime 时，支持以下 props:

|参数| 说明|类型|默认值|
| ---- | ---- | ---- | ---- |
|min-date|可选的最小时间，精确到分钟|	Date |	十年前|
|max-date	|可选的最大时间，精确到分钟	|Date	|十年后|

## TimePicker Props
#### 当时间选择器类型为 time 时，支持以下 props:

|参数| 说明|类型|默认值|
| ---- | ---- | ---- | ---- |
|min-hour|可选的最小小时|	number string |	0|
|max-hour	|可选的最大小时	|number string	|23|
|min-minute|可选的最小分钟|	number string |	0|
|max-minute	|可选的最大分钟	|number string	|59|

## 方法
|参数 | 说明 | 回调参数 |
| ---- | ---- |----|
|change|当值变化时触发的事件| picker: Picker 实例 |
|confirm|	点击完成按钮时触发的事件| value: 当前选中的时间|
|cancel|点击取消按钮时触发的事件| - |
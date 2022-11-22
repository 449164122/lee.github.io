<!--
 * @Author: 李韬
 * @Date: 2022-07-18 11:07:01
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-22 15:10:44
-->
<template>
  <div class="zfs-picker">
    <van-picker
      v-bind="$attrs"
      :visibleItemCount="visibleItemCount"
      :title="title"
      show-toolbar
      :columns="columns"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
    />
  </div>
</template>

<script>

export default {
  name:'zfsPicker',
  props: {
    title: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    columns: {
      type: Array,
      default: ()=> ([])
    }
  },
  methods: {
     onConfirm(value, index) {
      this.$emit('onConfirm', value, index)
    },
    onChange(picker, value, index) {
      this.$emit('onChange', picker, value, index)
    },
    onCancel() {
      this.$emit('onCancel')
    },
  }
}
</script>
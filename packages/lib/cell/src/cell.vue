<!--
 * @Author: 李韬
 * @Date: 2022-08-23 13:47:42
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-24 09:21:23
-->
<template>
  <div :class="['zfs-cell', {'dark': touched && isLink}]" @touchstart="handlertouch" @touchend="touchend" @touchcancel="touchend">
    <div class="zfs-cell__title" v-if="title">
      <slot name="title">
        <span v-detail>{{ title }}</span>
        <div class="zfs-cell__label" v-if="label">{{ label }}</div>
      </slot>
    </div> 
    <div :class="['zfs-cell__value', { 'zfs-cell__value--alone': value && !title }]">
        <span v-detail>{{ value }}</span>
    </div>
    <i v-if="isLink" class="icon-arrow-right"></i>
  </div>
</template>

<script>
export default {
  name: 'zfsCell',
  props: {
    title: String,
    value: String,
    label: String,
    isLink: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      touched: false,
    }
  },
  mounted() {

  },
  methods: {
    handlertouch() {
      this.touched = true;
    },
    touchend() {
      this.touched = false;
    }
  }
}
</script>
<!--
 * @Author: 李韬
 * @Date: 2022-07-18 11:07:01
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-27 17:14:34
-->
<template>
  <div class="zfs-button">
    <van-button 
      :class="type !== 'text' && !vantSize? size : ''"
      :type="type"
      :size="vantSize"
      v-bind="$attrs"
      @click="handlerClick"
      @touchstart="handlerTouchstart"
    >
      <slot></slot>
      <template v-if="$slots.icon" slot="icon">
        <slot name="icon"></slot>
      </template>
      <template v-if="$slots.loading" slot="loading ">
        <slot name="loading "></slot>
      </template>
    </van-button>
  </div>
</template>

<script>

export default {
  name:'zfsButton',
  props: {
    type: String,
    vantSize: String,
    size: {
      type: String,
      default: 'big',
    },
  },
  methods: {
    handlerClick(event) {
      this.$emit('click', event);
    },
    handlerTouchstart(event) {
      this.$emit('touchstart', event);
    }
  }
}
</script>
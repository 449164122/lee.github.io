<!--
 * @Author: 李韬
 * @Date: 2022-07-18 11:07:01
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-30 16:34:58
-->
<template>
  <div class="zfs-button">
    <van-button 
      :class="type !== 'text' && !vantSize? size : ''"
      :type="type"
      :size="vantSize"
      :round="round"
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
    round: {
      type: Boolean,
      default: true
    }
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
<!--
 * @Author: 李韬
 * @Date: 2022-07-15 14:52:24
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-25 13:50:57
-->
<template>
  <div class="zfs-badge">
    <van-badge :content="content" :max="max" :color="color" v-bind="$attrs">
      <slot></slot>
      <template v-if="$slots.content" slot="content">
        <slot name="content"></slot>
      </template>
    </van-badge>
  </div>
</template>

<script>

export default {
  name: 'zfsBadge',
  props: {
    content: [Number, String],
    max: {
      type: Number,
      default: 99,
    },
    color: {
      type: String,
      default: "#f76b6b",
    }
  }
}
</script>

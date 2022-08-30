<!--
 * @Author: 李韬
 * @Date: 2022-08-09 14:05:44
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 17:34:21
-->
<template>
  <div :class="[size,'zfs-avatar']" :style="sizeStyle">
    <img 
      v-if="src"
      :src="src"
      :alt="alt"
    />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'zfsAvatar',
  props: {
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val);
        }
        return typeof val === 'number';
      }
    },
    // shape: {
    //   type: String,
    //   default: 'circle',
    //   validator(val) {
    //     return ['circle', 'square'].includes(val);
    //   }
    // },
    src: String,
    alt: String,
    background: String,
  },
  computed: {
    sizeStyle() {
      const sizeStyle = typeof this.size === 'number' ? {
        height: `${this.size}px`,
        width: `${this.size}px`,
        lineHeight: `${this.size}px`
      } : {};
      if(!this.src && this.background) {
        sizeStyle.background = this.background;
      }
      return sizeStyle
    }
  },
};
</script>
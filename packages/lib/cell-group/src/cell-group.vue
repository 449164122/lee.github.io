<!--
 * @Author: 李韬
 * @Date: 2022-08-23 13:47:42
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-24 09:21:15
-->
<template>
  <div class="zfs-cell-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zfsCellGroup',
  props: {
    title: String,
    value: String,
  },
  data() {
    return {
    }
  }
}
</script>
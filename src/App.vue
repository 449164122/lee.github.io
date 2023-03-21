<!--
 * @Author: 李韬
 * @Date: 2022-08-25 11:56:46
 * @LastEditors: 李韬
 * @LastEditTime: 2023-03-21 11:46:43
-->
<template>
  <div id="app">
    <zfs-button type="primary" @click="handlerClick">按钮</zfs-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handlerClick() {
      this.$message.warning('hello zfs-mobile')
    }
  }
}
</script>

<style>
#app {
  padding: 100px
}
</style>
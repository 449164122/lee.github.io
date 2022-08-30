<!--
 * @Author: 李韬
 * @Date: 2022-07-29 15:38:27
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-29 10:08:40
-->
<template>
  <transition name="zfs-loading-fade" @after-leave="handleAfterLeave">
    <div v-show="visible" class="zfs-loading">
      <div class="container">
        <slot>
          <img :src="require('zfs-mobile/packages/images/loading.gif').default">
        </slot>
        <span class="zfs-loading__content">{{ message }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'zfsLoading',
  data() {
    return {
      message: '',
      visible: false,
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.visible = false;
    }
  }
}
</script>
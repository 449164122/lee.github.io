<!--
 * @Author: 李韬
 * @Date: 2022-07-29 15:38:27
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-09 10:05:39
-->
<template>
    <transition name="zfs-message-fade" @after-leave="handleAfterLeave">
    <div
      :class="[
        'zfs-message',
        'zfs-message-noClose',
        type,
        {
          showClose: showClose
        }
      ]"
      :style="positionStyle"
      v-show="visible">
      <i :class="['icon', iconType]"></i>
      <span class="zfs-message__content">{{ message }}</span>
      <div v-if="showClose" @click="visible = false" class="button">我知道了</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'zfsMessage',
  data() {
    return {
      message: '',
      type: 'info',
      showClose: false,
      visible: false,
      verticalOffset: 20,
      duration: 2000,
    }
  },
  mounted() {
    if (!this.showClose) {
      setTimeout(()=>{
        this.visible = false;
      }, this.duration)
    }
  },
  computed: {
    positionStyle() {
      return {
        'top': `${ this.verticalOffset }px`
      };
    },
    iconType() {
      return `icon-${this.type}`;
    },
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
  }
}
</script>
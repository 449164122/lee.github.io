<!--
 * @Author: 李韬
 * @Date: 2022-08-08 14:40:03
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-09 15:38:15
-->
<template>
  <transition name="zfs-dialog-fade" @after-leave="handleAfterLeave">
  <div v-show="visible">
    <div class="zfs-over-lay"></div>
    <div class="zfs-dialog">
      <div class="content">
        <div class="title" v-if="title">
          <i :class="['icon', iconclass]"></i>
          <span class="title-text" v-if="title">{{ title }}</span>
        </div>
        <p :class="{addMargin: title }" v-html="message || content" :style="align"></p>
        <input v-if="type ==='prompt'" v-show="showInput" type="text" autocomplete="off" :placeholder="placeholder" :class="[{redBorder: showRedBorder} , 'zfs-input__inner']" v-model="value" @input="handlerInput">
        <p class="warningMsg" v-show="showWarningMsg">{{warningMsg}}</p>
      </div>
      <div v-if="type ==='alert'" :class="['bottons', type]" @click="handlerConfirm">
        {{ alertButtonText }}
      </div>
      <div v-else :class="['bottons', type]">
        <span class="cancel" @click="handlerCancel">{{ cancelText || cancelButtonText }}</span>
        <span  @click="handlerConfirm">{{ confirmText || confirmButtonText }}</span>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'zfsDialog',
  data() {
    return {
      title: '',
      message: '', 
      content: '', //兼容历史别的组件dialog用法同content
      type: 'alert',
      iconclass: '',
      value: '',
      warningMsg: '',
      inputPattern: '',
      alertButtonText: '我知道了',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      confirmText: '',  //兼容历史别的组件dialog用法同confirmButtonText
      cancelText: '',   //兼容历史别的组件dialog用法同cancelButtonText
      placeholder:'请输入',
      showInput: true,
      visible: false,
      showRedBorder: false,
      showWarningMsg: false,
      messageAlign: 'center',
      beforeSubmit: '',
      onConfirm: '',
      onCancel: '',
    }
  },
  computed: {
    align() {
      return {
        'text-align': this.messageAlign
      };
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    handlerCancel() {
      this.visible = false;
      this.callback('cancel');
      if (this.onCancel && Object.prototype.toString.call(this.onCancel) === '[object Function]') {
        this.onCancel();
      }
    },
    handlerInput() {
      if (this.type === 'prompt' && this.inputPattern) {
        if (!this.inputPattern.test(this.value) || !this.value) {
          this.showRedBorder = true;
          this.showWarningMsg = true;
        } else {
          this.showRedBorder = false;
          this.showWarningMsg = false;
        }
      }
    },
    handlerConfirm() {
      if (this.type === 'prompt' && this.beforeSubmit && !this.beforeSubmit(this.value)) {
        return;
      }
      if (this.type === 'prompt' && this.showRedBorder) {
        return;
      }
      this.visible = false;
      this.callback('confirm' ,this.value);
      if (this.onConfirm && Object.prototype.toString.call(this.onConfirm) === '[object Function]') {
        this.onConfirm(this.value);
      }
    }
  }
}
</script>
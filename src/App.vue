<!--
 * @Author: 李韬
 * @Date: 2022-08-25 11:56:46
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-30 10:58:39
-->
<template>
  <div id="app">
    <zfs-button type="primary" @click="handlerClick">>123</zfs-button>
    <zfs-button size="small" @click="$message({type:'info',showClose:true,message:'消息提示内容'})">消息</zfs-button>
    <div v-detail="132">123123</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    handlerClick() {
      this.$dialog(
          {
            title: '审批意见',
            message: '内容内容内容内容内容',
            type: 'prompt',
            inputPattern:/[A-Z]/,
            warningMsg:'只能输入大写字母'
            // cb: function(value) {
            //   if (value!='123') {
            //     this.$message.warning('123');
            //     return false;
            //   }
            //   return true;
            // }
          }
        )
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

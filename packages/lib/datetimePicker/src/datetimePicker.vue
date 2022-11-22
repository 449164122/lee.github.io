<!--
 * @Author: 李韬
 * @Date: 2022-07-18 11:07:01
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-22 15:03:52
-->
<template>
  <div class="zfs-datetime-picker">
    <van-datetime-picker
      v-bind="$attrs"
      v-model="currentDate"
      :visibleItemCount="visibleItemCount"
      :type="type"
      :title="title"
      :formatter="formatter || dateformatter"
      @confirm="confirm"
      @cancel="cancel"
      @change="change"
    />
  </div>
</template>

<script>

export default {
  name:'zfsDatetimePicker',
  props: {
    value: {
      type: Date,
      default: ()=> new Date()
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    type: String,
    title: String,
    formatter: Function,
  },
  data() {
    return {
      currentDate: this.value,
    }
  },
  computed: {
    
  },
  watch: {
    currentDate(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    dateformatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      } else if (type === 'month') {
        return `${val}月`;
      } else if (type === 'day') {
        return `${val}日`;
      } else if (type === 'hour') {
        return `${val}时`;
      } else if (type === 'minute') {
        return `${val}分`;
      }
      return val;
    },
    confirm(value) {
      this.$emit('confirm',value)
    },
    cancel() {
      this.$emit('confirm')
    },
    change(value) {
      this.$emit('confirm',value)
    },
  }
}
</script>
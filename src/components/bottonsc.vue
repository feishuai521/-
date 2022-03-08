<template>
  <div class="btnbtn" :class="[type, { 禁用 }]">{{ conmit }}</div>
</template>

<script lang="ts">
export default {
  props: {
    conmit: {
      type: String,
      default: '确认',
    },
    type: {
      type: String,
      default: '待提交',
      // Validator(v) {
      //   // console.log(v)
      //   return ['成功', '错误', '待提交'].includes(v)
      // },
    },
    dis: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.btnbtn {
  width: 100px;
  float: left;
  margin: 0 5px;
  padding: 10px 0;
  text-align: center;
  opacity: 0.7;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &.成功 {
    background-color: #2ecc71;
  }
  &.错误 {
    background-color: #e74c3c;
  }
  &.待提交 {
    background-color: #bdc3c7;
  }
  &.禁用 {
    background-color: #ecf0f1;
  }
}
</style>

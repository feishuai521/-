<template>
  <div>
    <!-- true-value="1" false-value="0" 后端传输数值 -->
    <div><input type="checkbox" v-model="fs.isup" true-value="1" false-value="0" />点击</div>
    <div>{{ fs }}</div>
  </div>
</template>

<script lang="ts">
const fs = { tite: '飞帅', connt: 'feishuai', isup: false }
export default {
  name: 'input',
  data() {
    return {
      fs,
    }
  },
}
</script>

<style scoped></style>

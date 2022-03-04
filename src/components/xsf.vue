<template>
  <div>
    <div>事件</div>
    <div @click="add(19, 29, 22)">{{ num }}</div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    add(...arr) {
      console.log(arr)
      this.num = arr.reduce((a, b) => a + b, this.num)
      console.log(this.num)

      return this.num++
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>sdss</div>
  <input type="text" @keyup.="key" />
</template>

<script lang="ts">
export default {
  methods: {
    key(eve) {
      //   console.log(eve)

      console.log(eve.key)
    },
  },
}
</script>

<style scoped></style>

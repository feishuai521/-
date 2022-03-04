<template>
<div>
  飞帅论坛{{obj.name}}
</div>
</template>

<script lang="ts">
let obj={name:"feishuai"}
export default {
  name: "arrcomor",
  data(){
    return{
      obj
    }
  },
  mounted() {
    console.log(this.obj.name)
  }
}
</script>

<style scoped>

</style>
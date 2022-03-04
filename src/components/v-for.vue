<template>
  <div>
    <!-- //数值 -->
    <!--    <div v-for="(n, index) in 8" :key="index">{{ n }}&#45;&#45;{{ index }}</div>-->
    <div>
      <button @click="isesle='age'">年龄</button>
      <button @click="isesle='xb'">性别</button>
      <button @click="isss=true">升序</button>
      <button @click="isss=false">降序</button>
    </div>
    <div v-for="(item, index) in feis" :key="index">{{ item.name }}-年龄-{{item.age}}--性别{{item.xb?"🚹":"🚺"}}</div>
  </div>
</template>

<script lang="ts">
import content from '../composable/content'
export default {
  data() {
    return {
      "feishuai": content.feis,
      isesle:"age",
      isss:true
    }
  },
  computed:{
    feis(){
      return this.feishuai.sort((a,b)=>{
        return this.isss==true?a[this.isesle]-b[this.isesle]:b[this.isesle]-a[this.isesle]
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>

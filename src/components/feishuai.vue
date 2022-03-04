<script lang="ts">
import contentService from '../composable/content'
import HelloWorld from './components/HelloWorld.vue'
import Feishuai from './components/feishuai.vue'
const { title, show, feishuai } = contentService
export default {
  name: 'feishuai',
  data() {
    return {
      feishuai,
    }
  },
}
</script>

<template>
  <div id="feishuai">
    <div v-for="(item, index) in feishuai" :key="index" class="fss">
      <span :class="{ iff: item.isDtae }">{{ item.name }}</span>
      <button @click="item.isDtae = !item.isDtae">{{ item.isDtae ? '取消' : '删除' }}</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#feishuai {
  .fss {
    display: flex;
    justify-content: space-between;
    span {
      display: block;
      &.iff {
        text-decoration: line-through;
      }
    }
  }
}
</style>

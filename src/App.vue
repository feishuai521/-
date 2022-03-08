<script setup lang="ts">
import contentService from './composable/content'
import HelloWorld from './components/HelloWorld.vue'
import Feishuai from './components/feishuai.vue'
import vIfShowVue from './components/v-if-show.vue'
import vForVue from './components/v-for.vue'
import arrcomor from './components/arrcomor.vue'
import ipnutcodeVue from './components/ipnutcode.vue'
import bottonscVue from './components/bottonsc.vue'
// import xsf from './components/xsf.vue'
// import key_code from './components/keycode.vue'
</script>

<template>
  <!--   <Feishuai />-->
  <!-- <v-If-ShowVue /> -->
  <!--  <v-For-Vue />-->
  <!-- <arrcomor/> -->
  <!-- <xsf /> -->
  <!-- <key_code /> -->
  <!-- <ipnutcodeVue /> -->
  <div>
    <bottonsc-Vue v-for="(item, index) in list" v-bind="{ conmit: item.conmit, type: item.type, dis: item.dis }" :key="index" />
    <!-- <bottonsc-Vue :conmit="'错误'"  /> -->
  </div>
</template>
<script lang="ts">
export default {
  // components: { bottonscVue },
  data() {
    return {
      btoncscs: '保存',
      list: [
        {
          conmit: '保存',
          type: '成功',
          dis: false,
        },
        {
          conmit: '错误',
          type: '错误',
          dis: false,
        },
        {
          conmit: '待提交',
          type: '待提交',
          dis: false,
        },
        {
          conmit: '禁用',
          type: '禁用',
          dis: true,
        },
        {
          conmit: '确认',
          type: '成功',
          dis: false,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>

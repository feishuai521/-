<script setup lang="ts">
import contentService from '../composable/content'
console.log(contentService.article)
</script>

<template>
  <div>
    <h2>HELLO {{ contentService.title }}</h2>
    <h2>wrold {{ contentService.show }}</h2>
  </div>
</template>

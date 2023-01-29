<template>
  <div class="favor"></div>
  <h2>favor</h2>
  <van-rate v-model="value" count="5" allow-half color="#ffd21e"/>
</template>

<script setup>
import { ref } from 'vue';
const value = ref(1)


</script>

<style lang="less" scoped>

</style>
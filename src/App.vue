<template>
  <div class="app">
    <router-view></router-view>
    <!-- <TabBar2 v-if="!route.meta.hideTabBar"></TabBar2> -->
    <TabBar2></TabBar2>
  </div>
</template>

<script setup>
import TabBar2 from '@/components/tab-bar/tab-bar2.vue'
// import { useRoute } from 'vue-router';
// const route = useRoute()  //获取当前活跃的路由数据
</script>

<style scoped>

</style>
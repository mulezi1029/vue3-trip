<template>
  <div class="search">
    <h2>开始时间：{{ $route.query.startDay }}</h2>
    <h2>结束时间：{{ $route.query.awayDay }}</h2>
    <h2>当前城市：{{ $route.query.currentCity }}</h2>
    <h2 v-if="$route.query.localstrict">当前区域：{{ $route.query.localstrict }}</h2>
  </div>

</template>

<script setup>
import useCityStore from '@/stores/modules/city';

const cityStore = useCityStore()
</script>

<style lang="less" scoped>
// .search {
//   position: relative;
//   z-index: 9;
//   height: 100vh;
//   background-color: #fff;
// }
</style>
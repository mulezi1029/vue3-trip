<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="orange" route>
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <!-- 自定义图标 具名插槽 -->
          <template #icon>
            <img v-if="$route.meta.currentIndex === index" :src="getAssetURL(item.imageActive)" alt="">
            <img v-else :src="getAssetURL(item.image)" alt="">
          </template>
          <!-- 相当于默认插槽
          <template #default>
            <span>{{ item.text }}</span>
          </template> -->
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>

import { getAssetURL } from '@/utils/load_assets'
import { ref, watch } from 'vue'
import tabbarData from '@/assets/data/tabbar'
import { useRoute } from 'vue-router';
const currentIndex = ref(0)

// 解决 tabbar bug 法一
// const route = useRoute()

// watch(route, (newRoute) => {
//   // console.log(route.path)
//   // console.log(newRoute.path)
//   const index = tabbarData.findIndex(item => item.path === route.path)
//   if (index === -1) return
//   currentIndex.value = index
// })
</script>

<style lang="less" scoped>
img {
  height: 26px;
}
</style>
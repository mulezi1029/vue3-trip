<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="orange" :route="true">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <!-- 具名插槽 -->
          <template #icon>
            <img v-if="currentIndex === index" :src="getAssetURL(item.imageActive)" alt="">
            <img v-else :src="getAssetURL(item.image)" alt="">
          </template>
          <span>{{ item.text }}</span>
          <!-- 相当于默认插槽
          <template #default>
            <span>{{ item.text }}</span>
          </template> -->

        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>

import { getAssetURL } from '@/utils/load_assets'
import { ref } from 'vue'
import tabbarData from '@/assets/data/tabbar'
const currentIndex = ref(0)

</script>

<style lang="less" scoped>
img {
  height: 30px;
}
</style>
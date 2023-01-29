<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="orange" :route="true">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path" icon="home-o">
          <!-- <template #icon>
            <img v-if="currentIndex === index" :src="getAssetURL(item.imageActive)" alt="">
            <img v-else :src="getAssetURL(item.image)" alt="">
          </template> -->
          <span>{{ item.text }}</span>
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
// :deep()可以穿透，找到子组件中的选择器，设置样式
:deep(.van-tabbar-item__icon) {
  font-size: 30px;
}
</style>
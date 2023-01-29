<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">
      <div class="tab-bar-item" @click="itemClick(item, index)" :class="{ active: currentIndex === index }">
        <img v-if="currentIndex === index" :src="getAssetURL(item.imageActive)" alt="">
        <img v-else :src="getAssetURL(item.image)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>

import { getAssetURL } from '@/utils/load_assets'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tabbarData from '@/assets/data/tabbar'

const currentIndex = ref(0)
const router = useRouter()

const itemClick = (item, index) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 45px;
  border-top: 1px solid #e5e5e5;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active {
      color: orange;
    }

    img {
      width: 34px;
    }

    .text {
      font-size: 14px;
      margin-top: 2px;
    }
  }
}
</style>
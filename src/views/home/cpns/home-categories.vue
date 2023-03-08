<template>
  <div class="categories">
    <template v-for="(item, index) in categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>

</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  font-size: 12px;

  //移动端隐藏滚动条 
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;

    img {
      width: 32px;
      height: 32px;
      margin-bottom: 8px;
    }
  }
}
</style>
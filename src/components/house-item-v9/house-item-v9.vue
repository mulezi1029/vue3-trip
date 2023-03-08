<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate gutter="0" :size="15" :model-value="itemScore" color="yellow" allow-half readonly />
          <div class="new">{{ '￥'+ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => { }
  }
})
const itemScore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
  }

  .infos {
    position: absolute;
    bottom: 0;
    color: #fff;
    padding: 8px 10px;

    .summary {
      font-size: 12px;
    }

    .name {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
    }
  }


  img {
    width: 100%;
  }
}
</style>
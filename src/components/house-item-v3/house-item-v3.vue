<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="infos">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <div class="new">￥{{ itemData.finalPrice }}</div>
          <div class="old">￥{{ itemData.productPrice }}</div>
          <!-- 解决有些没有 priceTipBadge造成渲染的问题：老师视频做法 -->
          <!-- <div class="tip">{{ itemData?.priceTipBadge?.text }}</div> -->
          <!-- 个人做法 -->
          <div class="tip" v-if="itemData.priceTipBadge">{{ itemData.priceTipBadge.text }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;

  .item-inner {
    margin: 5px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;

    .infos {
      padding: 8px 10px;

      .location {
        display: flex;
        align-items: center;

        img {
          width: 12px;
          height: 12px;
        }

        span {
          font-size: 12px;
          color: #666;
        }
      }

      .name {
        margin: 5px 0;
        font-size: 14px;
        color: #333;
        // 以下是控制文本显示省略号
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .summary {
        font-size: 12px;
        color: #666;
      }

      .price {
        display: flex;
        align-items: flex-start;
        margin: 8px 0;

        .new {
          color: #ff9645;
          font-size: 14px;
        }

        .old {
          margin: 0 3px;
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }

        .tip {
          padding: 0 6px;
          color: #fff;
          font-size: 12px;
          border-radius: 8px;
          background-image: var(--tip-linear-gradient);
        }
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>
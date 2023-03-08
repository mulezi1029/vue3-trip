<template>
  <div class="landlord">
    <detailSection title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlordModule.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlordModule.hotelLogo" alt="">
            </div>
            <div class="info">
              <div class="name">{{ landlordModule.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlordModule.hotelTags">
                  <div class="item" :style="{ color: item.tagText.color }">
                    <span>{{ item.tagText.text }}</span>
                    <!-- index !== landlordModule.hotelTags.length - 1 控制最后一个不显示 | -->
                    <span v-if="index !== landlordModule.hotelTags.length - 1" class="divider">|</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(item, index) in landlordModule.hotelSummary">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="score">{{ item.introduction }}</div>
              <div class="desc">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detailSection>
  </div>

</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue'

defineProps({
  landlordModule: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.intro {
  .top {
    img {
      width: 100%;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .left {
      display: flex;

      .avatar {
        img {
          width: 54px;
        }
      }

      .info {
        .name {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 600;
        }

        .tags {
          display: flex;
          margin-top: 5px;
          font-size: 12px;

          .item {
            .divider {
              margin: 0 5px;
            }
          }
        }
      }

    }

    .right {
      .contact {
        height: 24px;
        line-height: 24px;
        padding: 0 12px;
        font-size: 12px;
        color: #fff;
        // text-align: center;
        border-radius: 5px;
        background-image: var(--theme-linear-gradient);
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px;

    .item {
      font-size: 12px;

      .title {
        color: #999;
      }

      .score {
        margin: 5px 0;
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }

      .desc {
        color: #666;
      }
    }
  }
}
</style>
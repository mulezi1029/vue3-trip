<template>
  <div class="comment">
    <detailSection title="热门评论" :more-text="moreStr">
      <div class="comment-inner">
        <div class="header">
          <div class="left">
            <div class="score">
              <div class="text">{{ commentModule.overall }}</div>
              <div class="line"></div>
            </div>
            <div class="info">
              <div class="scoreTitle">{{ commentModule.scoreTitle }}</div>
              <div class="totalCount">{{ commentModule.totalCount }}条评论</div>
              <div class="star">
                <van-rate v-model="commentModule.overall" :size="12" allow-half readonly color="#ff9854" />
              </div>
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in commentModule.subScores">
              <div class="item">{{ item }}</div>
            </template>
          </div>
        </div>
        <div class="tags">
          <template v-for="(item, index) in commentModule.commentTagVo">
            <div class="item" :style="{ color: item.color, background: item.backgroundColor }">{{ item.text }}</div>
          </template>
        </div>
        <div class="content">
          <div class="user">
            <div class="avatar">
              <img :src="commentModule.comment.userAvatars" alt="">
            </div>
            <div class="info">
              <div class="name">{{ commentModule.comment.userName }}</div>
              <div class="date">{{ commentModule.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="text">{{ commentModule.comment.commentDetail }}</div>
        </div>
      </div>
    </detailSection>
  </div>

</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue'
import { computed } from 'vue'

const props = defineProps({
  commentModule: {
    type: Object,
    default: () => ({})
  }
})
const more = computed(() => props.commentModule.totalCountStr)
const moreStr = `查看全部${more.value}条评论`
</script>

<style lang="less" scoped>
.comment-inner {

  // padding: 10px 0;
  .header {
    display: flex;

    .left {
      display: flex;
      align-items: center;

      .score {
        width: 65px;
        height: 100%;
        color: #333;
        font-weight: 600;
        position: relative;

        .text {
          font-size: 48px;
        }

        .line {
          width: 66px;
          height: 6px;
          border-radius: 3px;
          background: var(--theme-linear-gradient);
          position: absolute;
          bottom: 4px;
          z-index: 5;
        }
      }

      .info {
        margin-left: 19px;
        font-size: 12px;
        color: #333;

        .totalCount {
          margin: 3px 0;
          color: #999;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      flex: 1;
      justify-content: flex-end;

      .item {
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    .item {
      margin: 0 8px 5px 0;
      padding: 3px 5px;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  .content {
    margin-top: 10px;
    padding: 10px;
    background-color: #f7f9fb;

    .user {
      display: flex;

      .avatar {
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }

      .info {
        margin-left: 10px;

        .date {
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }

    .text {
      margin-top: 16px;
      font-size: 12px;
      line-height: 1.5;
      color: #333;
    }
  }
}
</style>
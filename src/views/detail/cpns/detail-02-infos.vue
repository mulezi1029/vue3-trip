<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags" :key="index">
        <div class="item" v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <div class="overall">
          {{ topInfos.commentBrief.overall }}
        </div>
        <div class="title">
          {{ topInfos.commentBrief.scoreTitle }}
        </div>
        <div class="brief">
          {{ topInfos.commentBrief.commentBrief }}
        </div>
      </div>
      <div class="right">
        <div class="count">{{ topInfos.commentBrief.totalCount }}条评论<van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="location extra">
      <div class="left">{{ topInfos.nearByPosition.address }}</div>
      <div class="right">地图·周边<van-icon name="arrow" /></div>
    </div>
  </div>

</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background-color: #fff;


  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;

    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .comment {
    .left {
      display: flex;
      align-items: center;

      .overall {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }

      .title {
        font-weight: 700;
        margin: 0 3px;
      }

      .brief {
        color: #666;
      }
    }
  }

  .location {
    .left {

      // 文本超出显示省略号
      max-width: 240px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
      color: #ff9645;
    }
  }
}
</style>
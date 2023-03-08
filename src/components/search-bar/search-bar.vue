<template>
  <div class="search-bar">
    <div class="search">
      <div class="select-time">
        <div class="item start">
          <div class="name">住</div>
          <div class="date">{{ startDay }}</div>
        </div>
        <div class="item end">
          <div class="name">离</div>
          <div class="date">{{ awayDay }}</div>
        </div>
      </div>
      <div class="content">
        <div class="keyword">关键字/位置/民宿</div>
      </div>
      <div class="right">
        <i class="icon-search"></i>
      </div>
    </div>
  </div>

</template>

<script setup>
import useMainStore from '@/stores/modules/main';
import { formatMonthDay } from '@/utils/format_date'
import { storeToRefs } from 'pinia';

const mainStore = useMainStore()
const { startDate, awayDate } = storeToRefs(mainStore)
const startDay = formatMonthDay(startDate.value, 'MM.DD')
const awayDay = formatMonthDay(awayDate.value, 'MM.DD')
</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;

  .search {
    display: flex;
    align-items: center;

    height: 45px;
    line-height: 45px;

    padding: 0 10px;
    border-radius: 6px;
    background: #f2f4f6;
    color: #999;
    font-size: 14px;

    .select-time {
      display: flex;
      flex-direction: column;

      .item {
        display: flex;
        align-items: center;
        line-height: normal;
        font-size: 10px;

        .date {
          position: relative;
          margin: 0 10px 0 3px;
          color: #333;
          font-weight: 500;
        }
      }

      .end .date::after {
        content: " ";
        position: absolute;
        bottom: 0px;
        right: -12px;
        width: 0;
        height: 0;
        border: 4px solid #666;
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);

      }
    }

    .content {
      position: relative;
      flex: 1;
      padding: 0 6px;
      border-left: 1px solid #fff;

      .keyword {
        max-width: 155px;
        font-size: 12px;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .icon-search {
        width: 24px;
        height: 24px;
        display: inline-block;
        background-image: url(@/assets/img/home/home-sprite.png);
        background-size: 207px 192px;
        background-position: -30px -150px;
      }
    }
  }
}
</style>
<template>
  <div class="facility">
    <detailSection title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item, index) in houseFacility.houseFacilitys">
          <div class="item" v-if="houseFacility.facilitySort.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="">
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="(iten, indey) in item.facilitys.slice(0, 4)">
                <div class="iten">
                  <i class="icon"></i>
                  <span>{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detailSection>
  </div>

</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue'

defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.facility-inner {
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #F7F9FB;

  .item {
    display: flex;
    margin: 25px 0;

    .head {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90px;

      img {
        width: 20px;
        height: 20px;
      }

      .text {
        margin-top: 5px;
        color: #000;
      }
    }

    .list {
      flex: 1;
      display: flex;
      align-items: center;
      flex-wrap: wrap;


      .iten {
        display: flex;
        align-items: center;
        margin: 4px 0;
        width: 50%;

        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin: 0 6px;
          background: url(@/assets/img/detail/icon_check.png) 0 0 / 100% 100%;
        }
      }
    }
  }
}
</style>
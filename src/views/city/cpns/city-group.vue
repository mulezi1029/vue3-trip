<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="#">热门</van-index-anchor>
      <!-- 热门城市列表 -->
      <div class="hotCitylist">
        <template v-for="(city) in groupData?.hotCities">
          <div class="hotCity" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
<!-- 全部城市数据 -->
      <template v-for="(group, index) in groupData?.cities" :key="index">
        <!-- 分组 -->
        <van-index-anchor :index="group.group" />
        <!-- 对应分组的数据 -->
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>

    <!-- <template v-for="(group, index) in groupData?.cities" :key="index">
      <div class="group-item">
        <h2>标题：{{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in group.cities" :key="indey">
            <div>{{ city.cityName }}</div>
          </template>
        </div>
      </div>
    </template> -->
  </div>

</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

// 接收父组件传递的数据
const props = defineProps({
  groupData: {
    type: Object,
    default: () => { }
  }
})
// 索引栏：不是默认就A-Z，而是根据城市列表数据中的分类并添加#索引
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

// 监听城市点击事件
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  // console.log(city)
  // 在状态管理库中，保存当前选中的城市
  cityStore.currentCity = city
  // 返回上一级
  router.back()
}

</script>

<style lang="less" scoped>
.hotCitylist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  padding-right: 25px;

  .hotCity {
    width: 70px;
    height: 28px;
    margin: 6px 0;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    background-color: #fff4ec;
    text-align: center;
  }
}
</style>
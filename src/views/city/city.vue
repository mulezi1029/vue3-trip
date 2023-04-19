<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索框 -->
      <van-search shape="round" show-action v-model="searchValue" placeholder="城市/区域/位置" @cancel="onCancel" />

      <!-- tab切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
        <template v-for="(value, key, index) in allCities">
          <van-tab :title="value.title" :name="key">
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <cityGroup v-show="tabActive === key" :group-data="value"></cityGroup>
      </template>
      <!-- <cityGroup :group-data="currentGroup"></cityGroup> -->
      <!-- 加问号：一开始没请求到数据，读取的为undefined的属性 -->
      <!-- 法一： -->
      <!-- <template v-for="item in allCities[tabActive]?.cities">
                      <div>{{ item }}</div>
                    </template> -->
      <!-- 法二： -->
      <!-- <template v-for="(group, index) in currentGroup?.cities" :key="index">
        <div class="group-item">
          <h2>标题：{{ group.group }}</h2>
          <div class="list">
            <template v-for="(city, indey) in group.cities">
              <div>{{ city.cityName }}</div>
            </template>
          </div>
        </div>
      </template> -->
    </div>
  </div>

</template>

<script setup>
import cityGroup from './cpns/city-group.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
// import lyRequest from '@/services/request/index'
// import { getCityAll } from "@/services/modules/city"
import { getCityAll } from "@/services"

const router = useRouter()
// 搜索框功能
const searchValue = ref('')
const onCancel = () => {
  router.back()
}
// tab切换
const tabActive = ref()

// lyRequest.get({
//   url: '/city/all'
// }).then(({ data: res }) => {
//   console.log(res)
// })

/*
  上述改进：
  组件页面中发送网络请求有两个缺点：
    1. 网络请求过多，页面组件中包含大量的对于网络请求和数据的处理
    2.如果页面封装了很多子组件，子组件需要用这些数据，需要一步步将数据传递过去
  解决：将网络请求的数据放在状态管理库中进行管理
*/
// // 网络请求获取数据
// const allCity = ref({})
// getCityAll().then(({ data: res }) => {
//   allCity.value = res.data
// })



//从store中获取数据
const cityStore = useCityStore()
// 调用 action 发起网络请求
cityStore.fetchAllCitiesData()  //这个步骤做完后，城市列表数据就获取到了，并且存放在 cityStore 中是 state 的 allCities 中
const { allCities } = storeToRefs(cityStore) //allCities 存储的是服务器请求回来的所有海内外城市数据，并且通过 storeToRefs 转为响应式的数据

// // 获取标签选中后，对应的要展示的城市的数据
// const currentGroup = computed(() => allCities.value[tabActive.value])



</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
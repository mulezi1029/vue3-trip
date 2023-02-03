<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <!-- <homeSearchBox :hot-suggests="hotSuggests"></homeSearchBox> -->
    <homeSearchBox></homeSearchBox>
  </div>

</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue'
import homeSearchBox from './cpns/home-search-box.vue'
// import request from '@/services/request';
// import { ref } from 'vue';
import useHomeStore from '@/stores/modules/home'

const homeStore = useHomeStore()
// 发送网络请求，在状态管理库中进行网络请求获取到的数据存在库中
homeStore.fetchHotSuggest()

//1.热门建议
// const hotSuggests = ref([])
// request.get({ url: 'home/hotSuggests' }).then(({ data: res }) => {
//   hotSuggests.value = res.data
// })
// // 2.热门类别
// const categories = ref([])
// request.get({ url: 'home/categories' }).then(({ data: res }) => {
//   categories.value = res.data
// })
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
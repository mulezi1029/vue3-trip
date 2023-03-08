<template>
  <div class="home" ref="homeRef">
    <homeNavBar />
    <homeBanner></homeBanner>
    <!-- <homeSearchBox :hot-suggests="hotSuggests"></homeSearchBox> -->
    <homeSearchBox />
    <homeCategories />
    <searchBar v-if="isShowSearchBar" />
    <homeContent />
    <!-- 测试获取数据按钮 -->
    <!-- <button @click="moreBtnClick">加载更多</button> -->
  </div>
</template>

<script>
export default { namm: "home" };
</script>
<script setup>
import { onUnmounted, onMounted, watch, ref, computed, onActivated } from "vue";
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeBanner from "./cpns/home-banner.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeContent from "./cpns/home-content.vue";
import searchBar from "@/components/search-bar/search-bar.vue";
import useHomeStore from "@/stores/modules/home";
import useScroll from "@/hooks/useScroll";
import useMainStore from "@/stores/modules/main";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
// 发送网络请求，在状态管理库中进行网络请求获取到的数据存在库中
homeStore.fetchHotSuggest();
homeStore.fetchCategories();
// let currentPage = 1
homeStore.fetchHouseList();
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

/* 模拟加载更多 */
// const moreBtnClick = () => {
//   homeStore.fetchHouseList()
// }

/* 监听窗口滚动到底部 */
// // 监听 window窗口的滚动
// // 1.当离开页面时，移除监听,进入页面开始监听
// // 2.如果别的页面也有类似的监听，编写重复代码
// const scrollListenHandler = () => {
//   // 当前页面可视高度
//   const clientHeight = document.documentElement.clientHeight
//   // 以滚动高度
//   const scrollTop = document.documentElement.scrollTop
//   // 可滚动高度
//   const scrollHeight = document.documentElement.scrollHeight
//   console.log(clientHeight, scrollTop, scrollHeight)

//   if (scrollTop + clientHeight + 1 >= scrollHeight) {
//     homeStore.fetchHouseList()
//   }
// }
// onMounted(() => {
//   window.addEventListener('scroll', scrollListenHandler)
// })
// onUnmounted(() => {
//   window.removeEventListener('scroll', scrollListenHandler)
// })

/* 法一：传入回调函数 */
// useScroll(() => {
//   homeStore.fetchHouseList()
// })
/* 法二：通过变量 */
const homeRef = ref();
const { isReachBtm, scrollTop } = useScroll(homeRef);
// // 控制动画显示
// const { isLoading } = storeToRefs(useMainStore())
watch(isReachBtm, (newValue) => {
  if (newValue) {
    // isLoading.value = true
    homeStore.fetchHouseList().then(() => {
      // isLoading.value = false
      isReachBtm.value = false;
    });
  }
});

/* 搜索框显示的控制 */
//// 法一：
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   // console.log(newTop)
//   isShowSearchBar.value = newTop > 100
// })
////法二：
const isShowSearchBar = computed(() => {
  return scrollTop.value > 500;
});

// 跳转回home时，保留原来位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: 100px;

  // &::-webkit-scrollbar {
  //   display: none;
  // }
}
</style>

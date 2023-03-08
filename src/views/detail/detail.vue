<template>
  <div class="detail top-page" ref="detailRef">
    <TabControl
      class="tabs"
      :titles="names"
      v-if="isShowControl"
      @tab-click="tabClick"
      ref="tabControl"
    ></TabControl>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <DetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <DetailInfos
        :ref="getSectionRef"
        name="描述"
        :top-infos="mainPart.topModule"
      />
      <DetailFacility
        :ref="getSectionRef"
        name="设施"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      >
      </DetailFacility>
      <DetailLandlord
        :ref="getSectionRef"
        ref="landlordRef"
        name="房东"
        :landlord-module="mainPart.dynamicModule.landlordModule"
      >
      </DetailLandlord>
      <DetailComment
        :ref="getSectionRef"
        name="评论"
        :comment-module="mainPart.dynamicModule.commentModule"
      >
      </DetailComment>
      <DetailNotice
        :ref="getSectionRef"
        name="须知"
        :orderRules="mainPart.dynamicModule.rulesModule.orderRules"
      >
      </DetailNotice>
      <DetailMap
        :ref="getSectionRef"
        name="周边"
        :position-module="mainPart.dynamicModule.positionModule"
      ></DetailMap>
      <DetailIntro :introduction="mainPart.introductionModule"></DetailIntro>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">旅途，无止境！</div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import getDetailInfos from "@/services/modules/detail";

import TabControl from "@/components/tab-control/tab-control.vue";
import DetailSwipe from "./cpns/detail-01-swipe.vue";
import DetailInfos from "./cpns/detail-02-infos.vue";
import DetailFacility from "./cpns/detail-03-facility.vue";
import DetailLandlord from "./cpns/detail-04-landlord.vue";
import DetailComment from "./cpns/detail-05-comment.vue";
import DetailNotice from "./cpns/detail-06-notice.vue";
import DetailMap from "./cpns/detail-07-map.vue";
import DetailIntro from "./cpns/detail-08-intro.vue";
import useScroll from "@/hooks/useScroll";

const router = useRouter();
const route = useRoute();
const onClickLeft = () => {
  router.back();
};
// 发送网络请求获取数据，需要传入houseId，用变量保存
const houseId = route.params.id;
const detailInfos = ref({});
getDetailInfos(houseId).then(({ data: res }) => {
  detailInfos.value = res.data;
});
const mainPart = computed(() => detailInfos.value.mainPart);

// 滚动显示tab
const detailRef = ref({});
const { scrollTop } = useScroll(detailRef);
const isShowControl = computed(() => {
  return scrollTop.value > 296;
});

// const landlordRef = ref()
// console.log(landlordRef)

// onBeforeMount(() => {
//   console.log(landlordRef)
// })
// onMounted(() => {
//   console.log(landlordRef)
//   setTimeout(() => { console.log(landlordRef.value) }, 300)
// })
// console.log(landlordRef?.value?.$el?.offsetTop)
// // setInterval(() => {
// //   console.log(landlordRef.value.$el.offsetTop)
// // }, 1000)
/* ---- */
// 点击tab跳转对应项
const sectionEls = ref({});
const names = ref([]);
const getSectionRef = (value) => {
  if (!value) return;
  console.log(1);
  const name = value.$el.getAttribute("name"); //对象的属性名
  sectionEls.value[name] = value.$el;
  // console.log(value) //获取到的是proxy对象
  // console.log(value.$el)//获取到的是组件根节点
  names.value.push(name);
};
/* // const names = computed(() => {
//   return Object.keys(sectionEls.value)
// }) */
// console.log(names)
// console.log(name.value) //undefined
let isClick = false;
let currentDistination = -1;
const tabClick = (index) => {
  isClick = true;
  console.log(isClick);
  // console.log(names.value)
  const key = names.value[index];
  const el = sectionEls.value[key];
  // console.log(el)
  // console.log(key)
  let distination = el.offsetTop;
  console.log("distinatopn", distination);
  if (index !== 0) {
    distination = distination - 44;
  }
  detailRef.value.scrollTo({
    top: distination,
    behavior: "smooth",
  });
  currentDistination = distination;

  // console.log('currentDistination', currentDistination)
};

/* 页面滚动匹配对应的tab项 */
// console.log(tabControl)
// setTimeout(() => {
//   console.log(tabControl?.value?.currentIndex)
// }, 2000)

const tabControl = ref();
watch(scrollTop, (newValue) => {
  // console.log(newValue, Math.round(newValue), currentDistination)
  if (Math.round(newValue) === currentDistination) {
    isClick = false;
  }
  console.log(isClick);
  if (!isClick) {
    /* 获取所有组件实例区域的offsetTop值:
    1.获取所有组件实例区域对应的dom根元素组成的数组
    2.获取对应的offsetTop值
  */
    const els = Object.values(sectionEls.value);
    // console.log(els)
    const offsetTops = els.map((item) => item.offsetTop);
    // console.log(offsetTops)
    let index = ref(offsetTops.length);
    for (let i = 0; i < offsetTops.length; i++) {
      if (offsetTops[i] > Math.round(newValue) + 44) {
        index.value = i - 1;
        break;
      }
      index.value = i;
    }
    // console.log(tabControl)
    // tabControl.value?.currentIndex = index.value
    // ?. 可选链操作符
    // console.log(index.value)
    if (tabControl.value) {
      tabControl.value.currentIndex = index.value;
    }
  }
});
</script>

<style lang="less" scoped>
// :deep(.van-nav-bar__text) {
//   color: orange;
// }
.tabs {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  text-align: center;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    padding-left: 20px;
    // line-height: 1.5;
    color: #7688a7;
  }
}
</style>

<template>
  <div class="detail-swipe">
    <van-swipe class="my-swipe swipe-list" :autoplay="3000" indicator-color="white" ref="vanswipe">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="swipe-item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
        <div class="custom-indicator">
          <template v-for="(value, key) in swipeGroup" :key="key">
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }"
              @click="toItem(value[0], swipeData[active], key)">
              <!-- <span class="text">
                {{ getName(swipeData[active], value) }}
              </span> -->
              <span class="text">
                {{ getName(value[0].title, swipeData[active], key) }}
              </span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>

    </van-swipe>

    <!-- <template v-for="item in 3">
      <div>{{ get(item) }}</div>
    </template> -->
  </div>

</template>

<script setup>
// const get = (item) => {
//   debugger
//   console.log(item)
//   return item
// }

import { ref } from 'vue';

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

// 数据分类
const swipeGroup = {}
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  // swipeGroup[item.enumPictureCategory] = []
  if (!valueArray) {
    valueArray = []
    // 创建对象中的键为数据中的enumPictureCategory属性值,值为空数组
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

// 显示信息
function getName(defaultTitle, active, key) {
  // debugger
  // console.log(active)
  // console.log(key)
  if (active?.enumPictureCategory == key) {
    const index = getIndex(active) - 1
    defaultTitle = (swipeGroup[key])[index].title
    // console.log((swipeGroup[key])[index].title)
    // console.log(1)
    // console.log(swipeGroup[key])
    // console.log(index)
  }
  return defaultTitle.replace('：', '')
}

// 显示当前在分组中的位置
const getIndex = (item) => {
  //拿到当前显示图片所属类别的整个数组数据
  const valueArray = swipeGroup[item?.enumPictureCategory]
  // 返回当前显示的图片在类别所属的数组数据中的索引+1
  const index = valueArray?.findIndex(data => data === item) + 1
  // console.log(index)
  return index
}

// 点击指示器跳转到对应组
const vanswipe = ref()
const toItem = (GropuFirstItem) => {
  const index = props.swipeData.findIndex(data => data === GropuFirstItem)
  vanswipe.value.swipeTo(index)
}
</script>

<style lang="less" scoped>
.swipe-list {
  .swipe-item {
    img {
      width: 100%;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.2);

    .item {
      margin: 0 3px;

      &.active {
        padding: 0 3px;
        border-radius: 5px;
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>
<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="current" @click="positionClick">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="date-range section bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDay }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ awayDay }}</span>
        </div>
      </div>
    </div>

    <!-- 日历 -->
    <van-calendar type="range" :show-confirm="false" :round="false" color="#ff9854" v-model:show="showCalendar"
      @confirm="onConfirm" :formatter="formatter" :default-date="null" />

    <!-- 价格/人数选择 -->
    <div class="price-count bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="keyword bottom-gray-line">关键字/位置/民宿</div>

    <!-- 热门建议 -->
    <div class="hot-suggests">
      <template v-for="(item, index) in hotSuggests">
        <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }"
          @click="enterSearch(item.tagText.text)">
          {{
            item.tagText.text
          }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn" @click="enterSearch()">
      <div class="btn">开始搜索</div>
    </div>


  </div>

</template>

<script setup>
import { computed, ref } from 'vue';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMonthDay, getTotalDays } from '@/utils/format_date'
import useHomeStore from '@/stores/modules/home';
import useMainStore from '@/stores/modules/main';

const router = useRouter()

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log('位置获取成功', res)
  }, err => {
    console.log('位置获取失败', err)
  })
}
// 进入城市页面路由
const cityClick = () => {
  router.push('/city')
}

// 当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// // 日期范围处理
/* 使用状态库导入 */
const mainStore = useMainStore()
const { startDate, awayDate } = storeToRefs(mainStore)

// const nowDate = new Date()
// // const newDate = nowDate.setDate(nowDate.getDate()+1) //ps:此操作后，会改变 上面的 nowDate 的值，使其加一天了
// const newDate = new Date().setDate(nowDate.getDate() + 1)
const startDay = computed(() => formatMonthDay(startDate.value))
const awayDay = computed(() => formatMonthDay(awayDate.value))
const stayCount = computed(() => getTotalDays(startDate.value, awayDate.value))

// const startDay = ref(formatMonthDay(nowDate))
// const awayDay = ref(formatMonthDay(newDate))
// const stayCount = ref(getTotalDays(new Date(), newDate))
// 日历
const showCalendar = ref(false)
const onConfirm = (value) => {
  // 1.设置日期
  const selectStart = value[0]
  const selectEnd = value[1]
  mainStore.startDate = selectStart
  mainStore.awayDate = selectEnd
  console.log(startDate)
  console.log(awayDate)
  // stayCount.value = getTotalDays(selectStart, selectEnd)
  // startDay.value = formatMonthDay(selectStart)
  // awayDay.value = formatMonthDay(selectEnd)
  //2.隐藏日历
  showCalendar.value = false
}
// 修改日期文案  ：入住 离店
const formatter = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day
}
// 热门建议:从状态管理库中获取数据
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

//搜索按钮点击进入search页面,如果想在跳转进入新页面时，传入一些参数数据，如将startDay awayDay做法如下
const enterSearch = (data) => {
  // router.push('/search')
  router.push({
    path: '/search',
    query: {
      startDay: startDay.value,
      awayDay: awayDay.value,
      currentCity: currentCity.value.cityName,
      localstrict: data,
    }
  })
}

</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .current {
    display: flex;
    width: 90px;
    justify-content: space-around;
    align-items: center;

    .text {
      // flex: 1;
      font-size: 14px;
    }

    img {
      // margin: -10px 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 44px;
  color: #999;


  .start {
    flex: 1;
    display: flex;
    // justify-content: center;
    align-items: center;
    height: 44px;

    .stay {
      flex: 1;
      text-align: center;
      padding-left: 20px;
    }
  }

  .end {
    min-width: 30%;
    // margin-left: 18px;
  }

  .date {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tip {
      font-size: 12px;
    }

    .time {
      margin-top: 3px;
      font-size: 15px;
      font-weight: 500;
      color: #333;
    }
  }
}

.price-count {
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #999;

  .end {
    display: flex;
    justify-content: center;
    min-width: 30%;
    padding-left: 20px;
  }
}

.keyword {
  display: flex;
  height: 44px;
  align-items: center;
  padding: 0 20px;
  color: #999;
}

.hot-suggests {
  display: flex;
  flex-wrap: wrap;
  color: #999;
  font-size: 12px;
  padding: 0 20px;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
  }
}

.search-btn {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  margin: 15px 0;

  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    line-height: 38px;
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
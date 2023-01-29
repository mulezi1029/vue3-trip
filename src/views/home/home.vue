<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="current">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>

</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue'
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
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
</style>
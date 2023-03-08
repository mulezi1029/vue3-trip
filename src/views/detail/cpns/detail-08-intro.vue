<template>
  <div class="intro">
    <div class="title">{{ introduction.title }}</div>
    <div class="text">{{ introduction.introduction }}</div>
  </div>

</template>

<script setup>
defineProps({
  introduction: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.intro {
  padding: 10px 12px;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .text {
    margin: 10px 0;
    font-size: 12px;
    text-align: justify;
    line-height: 1.5;
    color: #666;
  }
}
</style>
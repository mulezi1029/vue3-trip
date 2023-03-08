<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="index">
      <div class="tab-item" :class="{ active: index === currentIndex }" @click="tabClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>

</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['tabClick'])
defineProps({
  titles: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)
const tabClick = (index) => {
  // console.log(index)
  currentIndex.value = index
  emit('tabClick', index)
}
defineExpose({ currentIndex })
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  justify-content: center;
  text-align: center;
  height: 44px;
  line-height: 44px;

  .tab-item {
    flex: 1;

    &.active {
      color: var(--primary-color);
      font-weight: 700;

      span {
        border-bottom: 3px solid var(--primary-color);
        padding: 8px;
      }
    }
  }
}
</style>
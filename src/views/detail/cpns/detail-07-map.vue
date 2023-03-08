<template>
  <div class="map">
    <detailSection title="位置周边" more-text="查看更多周边信息">
      <div class="map-inner">
        <div class="baidu" ref="mapRef"></div>
      </div>
    </detailSection>
  </div>

</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  positionModule: {
    type: Object,
    default: () => ({})
  }
})
const mapRef = ref()

onMounted(() => {
  const map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
  const point = new BMapGL.Point(props.positionModule.longitude, props.positionModule.latitude);  // 创建点坐标 
  map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
  // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  const marker = new BMapGL.Marker(point);        // 创建标注   
  map.addOverlay(marker);                     // 将标注添加到地图中
})
</script>

<style lang="less" scoped>
.map-inner {
  .baidu {
    height: 250px;
  }
}
</style>
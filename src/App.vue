<template>
	<div class="app">
		<router-view v-slot="props">
			<keep-alive include="home">
				<component :is="props.Component"></component>
			</keep-alive>
		</router-view>

		<TabBar2 v-if="!$route.meta.hideTabBar"></TabBar2>

		<lodaing />
		<!-- <TabBar2></TabBar2> -->
	</div>
</template>

<script setup>
import lodaing from './components/loading/lodaing.vue'
import TabBar2 from '@/components/tab-bar/tab-bar2.vue'
// import { useRoute } from 'vue-router';
// const route = useRoute()  //获取当前活跃的路由数据
</script>

<style scoped></style>

<template>
	<div class="detail-swipe">
		<van-swipe
			class="my-swipe swipe-list"
			:autoplay="3000"
			indicator-color="white"
			ref="vanswipe"
		>
			<!-- 轮播图片 -->
			<template v-for="(item, index) in swipeData">
				<van-swipe-item class="swipe-item">
					<img :src="item.url" alt="" />
				</van-swipe-item>
			</template>
			<!-- 自定义轮播图指示器 -->
			<template #indicator="{ active }">
				<div class="custom-indicator">
					<template v-for="(value, key) in swipeGroup" :key="key">
						<!-- 
              根据轮播图类别信息生成指示器，有多少类就生成多少个指示器，
              每个指示器中有该指示器的类别文本信息以及数量信息
              指示器中的文本信息是默认都显示，不管是不是当前轮播活跃的类别，此外每个类别中的文本信息也会随着数据不同而不同
              指示器中的数量信息只是在当前轮播的片所属对应类别中显示
            -->
						<span
							class="item"
							:class="{ active: swipeData[active]?.enumPictureCategory == key }"
							@click="toItem(value[0])"
						>
							<!-- 1.类别的文本信息：默认都显示  -->
							<span class="text">
								{{ getName(value[0].title, swipeData[active], key) }}
							</span>
							<!-- 2.每个类别的数量信息：只要轮播到了当前类别才显示 -->
							<span
								class="count"
								v-if="swipeData[active]?.enumPictureCategory == key"
							>
								{{ getIndex(swipeData[active]) }}/{{ value.length }}
							</span>
						</span>
					</template>
				</div>
			</template>
		</van-swipe>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
	swipeData: {
		type: Array,
		default: () => [],
	},
})

// 对轮播图的数据根据enumPictureCategory值进行分类
const swipeGroup = {} //键为类型，值为对应数据项
// 1.创建轮播图数据中每个类型为一个数组，循环结束，会将轮播图数据中所有类型对应创建出一个空数组
for (const item of props.swipeData) {
	swipeGroup[item.enumPictureCategory] = []
}
// 2.类别中填充数据
for (const item of props.swipeData) {
	const valueArray = swipeGroup[item.enumPictureCategory]
	valueArray.push(item)
}
// //遍历轮播图数据  进阶写法
// for (const item of props.swipeData) {
// 	let valueArray = swipeGroup[item.enumPictureCategory]
// 	// swipeGroup[item.enumPictureCategory] = []
// 	if (!valueArray) {
// 		valueArray = []
// 		// 创建对象中的键为数据中的enumPictureCategory属性值,值为空数组
// 		swipeGroup[item.enumPictureCategory] = valueArray
// 	}
// 	valueArray.push(item)
// }

/* 显示信息 */
function getName(defaultTitle, active, key) {
	// debugger
	// console.log(active)
	// console.log(key)
	if (active?.enumPictureCategory == key) {
		const index = getIndex(active) - 1
		defaultTitle = swipeGroup[key][index].title
		// console.log((swipeGroup[key])[index].title)
		// console.log(1)
		// console.log(swipeGroup[key])
		// console.log(index)
	}
	return defaultTitle.replace('：', '')
}

// 显示当前活跃的图片在分组中的位置
const getIndex = (item) => {
	//拿到当前显示图片所属类别的整个数组数据
	const valueArray = swipeGroup[item?.enumPictureCategory]
	// 返回当前显示的图片在类别所属的数组数据中的索引+1
	const index = valueArray?.findIndex((data) => data === item) + 1
	// console.log(index)
	return index
}

// 点击指示器跳转到对应组
const vanswipe = ref()
const toItem = (GropuFirstItem) => {
	const index = props.swipeData.findIndex((data) => data === GropuFirstItem)
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

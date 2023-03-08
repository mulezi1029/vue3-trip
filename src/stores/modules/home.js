import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomehouseList } from '@/services/modules/home'

const useHomeStore = defineStore('home', {
  state: () => ({
    // 热门建议
    hotSuggests: [],
    // 热门类别
    categories: [],
    // 房间列表
    nextPage: 1,
    houselist: []
  }),
  actions: {
    async fetchHotSuggest() {
      const { data: res } = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const { data: res } = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseList() {
      const { data: res } = await getHomehouseList(this.nextPage++)
      this.houselist.push(...res.data)
    }
  }
})

export default useHomeStore
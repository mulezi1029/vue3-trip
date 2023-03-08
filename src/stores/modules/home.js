import { defineStore } from "pinia";
import { getHomeHotSuggests } from '@/services/modules/home'

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggest() {
      const { data: res } = await getHomeHotSuggests()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore
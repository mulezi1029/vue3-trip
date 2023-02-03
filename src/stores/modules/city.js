import { getCityAll } from '@/services'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: { cityName: "广州" }
  }),
  actions: {
    async fetchAllCitiesData() {
      const { data: res } = await getCityAll()
      // console.log(res.data)
      this.allCities = res.data
    }
  }
})
export default useCityStore
import { defineStore } from "pinia";


const startDate = new Date()
const awayDate = new Date().setDate(startDate.getDate() + 1)

// console.log(startDate)
// console.log(endDate)
const useMainStore = defineStore('main', {
  state: () => ({
    startDate,
    awayDate,
    isLoading: false
  })
})

export default useMainStore
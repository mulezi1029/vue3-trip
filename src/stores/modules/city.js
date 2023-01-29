import { defineStore } from 'pinia'

const useCiteStore = defineStore('city', {
    state: () => ({
        cities: []
    }),
    actions: {}
})
export default useCiteStore
import lyRequest from "../request/index"

export function getHomeHotSuggests() {
  return lyRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getHomeCategories() {
  return lyRequest.get({
    url: "/home/categories"
  })
}
export function getHomehouseList(currentPage=1) {
  return lyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
import lyRequest from "../request/index"


export function getCityAll() {
  return lyRequest.get({
    url: '/city/all'
  })
}
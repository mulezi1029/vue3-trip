import lyRequest from "../request/index"

export function getHomeHotSuggests() {
  return lyRequest.get({
    url: "/home/hotSuggests"
  })
}
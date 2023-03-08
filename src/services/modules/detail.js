import lyRequest from "../request/index"

export default function getDetailInfos(houseId) {
  return lyRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}
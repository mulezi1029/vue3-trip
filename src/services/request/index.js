import axios from "axios"
import { BASE_URL, TIME_OUT } from "./config"

class LYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new LYRequest(BASE_URL, TIME_OUT)


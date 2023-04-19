import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"


/* 法一：接收回调函数 */
// export default function useScroll(reachBtmCb) {
//   const scrollListenHandler = () => {
//     // 当前页面可视高度
//     const clientHeight = document.documentElement.clientHeight
//     // 以滚动高度
//     const scrollTop = document.documentElement.scrollTop
//     // 所有可滚动高度
//     const scrollHeight = document.documentElement.scrollHeight
//     if (scrollTop + clientHeight + 1 >= scrollHeight) {
//       console.log('滚动底部了')
//       if (reachBtmCb) reachBtmCb()
//     }
//   }
//   onMounted(() => {
//     window.addEventListener('scroll', scrollListenHandler)
//   })
//   onUnmounted(() => {
//     window.removeEventListener('scroll', scrollListenHandler)
//   })
// }

/**
 * 
 * @returns isReachBtm 记录是否滚动底部的变量
 */
/* 法二：变量记录滚到底部，返回此变量通知调用者，调用者根据结果自行操作 */
export default function useScroll(elRef) {
  
  let el = window

  const isReachBtm = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  // 节流 回调函数
  const scrollListenHandler = throttle(() => {
    if (el === window) {
      // 当前页面可视高度
      clientHeight.value = document.documentElement.clientHeight
      // 已滚动高度
      scrollTop.value = document.documentElement.scrollTop
      // 所有可滚动高度
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if (scrollTop.value + clientHeight.value + 1 >= scrollHeight.value) {
      console.log('滚动底部了')
      isReachBtm.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollListenHandler)
  })

  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenHandler)
  })
  
  return { isReachBtm, scrollTop, clientHeight, scrollHeight }
}
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path-》组件
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue'),
      meta: {
        currentIndex: 0
      }
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/favor.vue'),
      meta: {
        currentIndex: 1
      }
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue'),
      meta: {
        currentIndex: 2
      }
    },

    {
      path: '/message',
      component: () => import('@/views/message/message.vue'),
      meta: {
        currentIndex: 3,
        hideTabBar: true
      }
    },
    {
      path: '/city',
      component: () => import('@/views/city/city.vue'),
      // meta: {
      //   hideTabBar:true
      // }
    },
    {
      path: '/search',
      component: () => import('@/views/search/search.vue'),
      meta: {
        hideTabBar: true
      }
    },
    {
      path: '/detail/:id',
      component: () => import('@/views/detail/detail.vue'),
      meta: {
        hideTabBar: true
      }
    }
  ]
})

export default router
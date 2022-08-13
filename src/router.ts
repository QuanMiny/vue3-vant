import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'discover'
    }
  },
  {
    name: 'discover',
    path: '/discover',
    component: () => import('@/view/discover/index.vue'),
    meta: {
      title: '发现'
    }
  },
  {
    name: 'mine',
    path: '/mine',
    component: () => import('@/view/mine/index.vue'),
    meta: {
      title: '我的'
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title
  if (title) {
    document.title = title as string
  }
  next()
})

export default router

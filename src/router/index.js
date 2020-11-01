import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: {
          title: 'Home'
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    meta: {
      title: 'About'
    },
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about'),
        meta: {
          title: 'About'
        }
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/contact'),
        meta: {
          title: 'Contact'
        }
      }
    ]
  },
  {
    path: '/task',
    redirect: '/task/list',
    component: Layout,
    children: [
      {
        path: '/task/list',
        name: 'Task',
        component: () => import('@/views/task/task-list'),
        meta: {
          title: 'Task'
        }
      },
      {
        path: '/task/detail/:id',
        name: 'TaskDetail',
        component: () => import('@/views/task/task-detail'),
        hidden: true,
        props: true,
        meta: {
          title: 'Task Detail'
        }
      }
    ]
  },
  {
    path: '/user',
    redirect: '/user/list',
    component: Layout,
    meta: {
      title: 'User'
    },
    children: [
      {
        path: '/user/list',
        name: 'User',
        component: () => import('@/views/user/user-list'),
        meta: {
          title: 'User List'
        }
      },
      {
        path: '/user/detail/:id',
        name: 'UserDetail',
        component: () => import('@/views/user/user-detail'),
        hidden: true,
        props: true,
        meta: {
          title: 'User Detail'
        }
      },
      {
        path: '/user/dashboard',
        name: 'UserDashboard',
        component: () => import('@/views/user/dashboard'),
        meta: {
          title: 'User Dashboard'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/UsersList.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('@/views/UserEdit.vue')
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

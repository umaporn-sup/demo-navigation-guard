import { createRouter, createWebHistory } from 'vue-router'
import ResourceManagement from '../src/views/ResourceManagement.vue'
import Admin from '../src/views/Admin.vue'
import Home from '../src/views/Home.vue'
import Login from '../src/views/Login.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/resources',
    name: 'ResourceManagement',
    component: ResourceManagement
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history,
  routes,
  linkExactActiveClass: 'text-blue-500',
  linkActiveClass: 'text-purple-500'
})
function isAuthenticated() {
  //you can switch true/false value to test navigation guards
  return true
}
router.beforeEach((to, from, next) => {
  //check if the user is by checking a token

  if (!isAuthenticated() && to.name !== 'Login') {
    next('/login')
  } else next()
})
export default router

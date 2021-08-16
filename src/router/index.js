import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// import Home from '../views/home/Home'
// import Shop from '../views/shop/Shop'
// import Login from '../views/login/Login'
// import Register from '../views/register/Register'
const routes = [{
  path: '/',
  name: 'Home',
  // component: Home,
  // 异步加载路由
  component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
},
{
  path: '/shop/:id',
  name: 'Shop',
  // component: Shop
  component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
},
{
  path: '/register',
  name: 'Register',
  // component: Register,
  component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
  beforEnter (to, from, next) {
    const { isLogin } = localStorage.isLogin
    isLogin ? next({ name: 'Home' }) : next()
  }
},
{
  path: '/login',
  name: 'Login',
  // component: Login,
  component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
  beforEnter (to, from, next) {
    const { isLogin } = localStorage.isLogin
    isLogin ? next({ name: 'Home' }) : next()
  }
}
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (!isLogin && (to.name !== 'Login' && to.name !== 'Register')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})
export default router

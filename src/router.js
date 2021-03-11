import Vue from "vue";
import Router from "vue-router";
import store from "./store";
window.store = store;
Vue.use(Router);


const router =  new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index/template.vue')
    },
    {
      path: '/signin',
      component: () => import('@/views/SignIn/template.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('@/views/Detail/template.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/views/Edit/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      component: () => import('@/views/Create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      component: () => import('@/views/User/template.vue')
    },
    {
      path: '/profile',
      component: () => import('@/views/Profile/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      component: () => import('@/views/SignUp/template.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.getters.isLogin)
    store.dispatch('checkLogin').then(isLogin => {   //checkLogin是异步的
      if (!isLogin) {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    })
  } else {
    next(); // 确保一定要调用 next()
  }
});
export default router

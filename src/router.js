import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Index from "@/views/Index/template.vue";
import Login from "@/views/Login/template.vue";
import My from "@/views/My/template.vue";
import Register from "@/views/Register/template.vue";
import User from "@/views/User/template.vue";
import Edit from "@/views/Edit/template.vue";
import Detail from "@/views/Detail/template.vue";
import Create from "@/views/Create/template.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/index",
      component: Index
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/my",
      component: My
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/user",
      component: User
    },
    {
      path: "/edit",
      component: Edit
    },
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/create",
      component: Create
    }
  ]
});

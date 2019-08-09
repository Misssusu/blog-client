import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Index/template.vue";
import SignIn from "@/views/SignIn/template.vue";
import Profile from "@/views/Profile/template.vue";
import SignUp from "@/views/SignUp/template.vue";
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
      name: "index",
      component: Index
    },
    {
      path: "/index",
      component: Index
    },
    {
      path: "/signin",
      component: SignIn
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/SignUp",
      component: SignUp
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

import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home
    }
  ]
});
// 路由守卫
router.beforeEach((to, from, next) => {
  var token = window.sessionStorage.getItem("token");
  if (token === null && to.path !== "/login") {
    return next("/login");
  }
  next();
});
export default router;

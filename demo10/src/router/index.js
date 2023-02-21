import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserPage from "@/views/UserPage.vue";  // 导入组件方式1

// 定义路由规则
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 导入组件方式2：只有访问的时候才会去导入组件
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },{
    path: "/user",  //访问路径
    name: "user",   //访问名称
    component: UserPage,  // 跳转到引用的组件
    // component: () => import(/* webpackChunkName: "about" */ "../views/UserPage.vue"),
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes, //路由对象
});

// 导航守卫
router.beforeEach((to,from,next) => {
  // 输出跳转位置
  console.log(to)
  // 输出源位置
  console.log(from)
  // 如果跳转到登录页面则直接跳转
  if (to.path == '/login') {
    return next()
  }
  // 这个token应该去本地的session去获取
  const token="66666"

  // 如果token认证成功则继续跳转否则跳转到登陆页面
  if (token) {
    next()
  } else {
    return next('/login')
  }
})

export default router;

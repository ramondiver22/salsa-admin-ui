// Composables
import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/views/layouts/Auth.vue";
import Login from "@/views/auth/Login.vue";
import Admin from "@/views/layouts/Admin.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/",
    name: "Home",
    component: Admin,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

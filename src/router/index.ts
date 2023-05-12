// Composables
import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/views/layouts/Auth.vue";
import Login from "@/views/auth/Login.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

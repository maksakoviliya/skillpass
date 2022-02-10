import { createRouter, createWebHistory } from "vue-router";
import Employee from "../views/Employee.vue";
import Manager from "../views/Manager.vue";
import Home from "@/views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/employee",
    name: "Employee",
    component: Employee,
  },
  {
    path: "/manager",
    name: "Manager",
    component: Manager,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

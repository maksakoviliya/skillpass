import { createRouter, createWebHistory } from "vue-router";
import Employee from "../views/Employee.vue";
import Manager from "../views/Manager.vue";

const routes = [
  {
    path: "/",
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

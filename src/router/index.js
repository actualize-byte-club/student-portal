import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Logout from "../views/LogoutView.vue";
import StudentShow from "../views/StudentShow.vue";
import StudentEdit from "../views/StudentEdit.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/me",
    name: "studentshow",
    component: StudentShow,
  },
  {
    path: "/me/edit",
    name: "studentedit",
    component: StudentEdit,
  },
  {
    path: "/me/experiences/edit",
    name: "experiences-edit",
    component: ExperiencesEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

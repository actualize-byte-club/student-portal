import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Logout from "../views/LogoutView.vue";
import StudentShow from "../views/StudentShow.vue";
import StudentEdit from "../views/StudentEdit.vue";
import CapstoneEdit from "../views/CapstoneEdit.vue";
import EducationsEdit from "../views/EducationsEdit.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";
import ExperiencesNew from "../views/ExperiencesNew.vue";
import CapstonesNew from "../views/CapstonesNew.vue";
import SkillsNew from "../views/SkillsNew.vue";
import SkillsEdit from "../views/SkillsEdit.vue";
import EducationsNew from "../views/EducationsNew.vue";

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
    path: "/capstone/edit",
    name: "capstoneedit",
    component: CapstoneEdit,
  },
  {
    path: "/students/:id/educations",
    name: "EducationsEdit",
    component: EducationsEdit,
  },
  {
    path: "/students/:id/experiences",
    name: "experiences-edit",
    component: ExperiencesEdit,
  },
  {
    path: "/experiences/new",
    name: "experiences-new",
    component: ExperiencesNew,
  },
  {
    path: "/capstones/new",
    name: "capstones-new",
    component: CapstonesNew,
  },
  {
    path: "/skills/new",
    name: "skills-new",
    component: SkillsNew,
  },
  {
    path: "/me/skills/edit",
    name: "skills-edit",
    component: SkillsEdit,
  },
  {
    path: "/educations/new",
    name: "educations-new",
    component: EducationsNew,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

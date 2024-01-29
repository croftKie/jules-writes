import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/views/HomeView.vue";
import ProjectsView from "@/components/views/ProjectsView.vue";
import AboutView from "@/components/views/AboutView.vue";
import CopyProject from "@/components/views/projects/CopyProject.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "ProjectsView",
    component: ProjectsView,
  },
  {
    path: "/project",
    name: "CopyProject",
    component: CopyProject,
  },
  {
    path: "/About",
    name: "AboutView",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

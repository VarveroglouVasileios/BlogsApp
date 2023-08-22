import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import createBlog from "./pages/createBlog.vue";
import UserProfile from "./pages/UserProfile.vue";
import UserAuth from "./auth/UserAuth.vue";
import BlogDetail from "./pages/BlogsDetail.vue";
import createBlogDetails from "./pages/createBlogDetails.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      redirect: "/blogs",
      name: "mainPage",
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/blogs",
      component: MainPage,
      name: "mainPage",
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/blogs/:id",
      component: BlogDetail,
      props: true,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/createBlogDetails/:id",
      component: createBlogDetails,
      props: true,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/UserProfile",
      component: UserProfile,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/auth",
      component: UserAuth,
    },
    {
      path: "/createBLog",
      component: createBlog,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
      meta: {
        requiredAuth: true,
      },
    },
  ],
});
router.beforeEach((to, _, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];

  console.log("Navigating to:", to.path);
  console.log("Is Authenticated:", isAuthenticated);

  if (to.meta.requiredAuth && !isAuthenticated) {
    console.log("Redirecting to /auth");
    next("/auth");
  } else if (to.path === "/auth" && isAuthenticated) {
    console.log("Redirecting to /blogs");
    next("/blogs");
  } else {
    console.log("Proceeding to:", to.path);
    next();
  }
});

export default router;

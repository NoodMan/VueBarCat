import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/",
      name: "accueilhome",
      component: () => import("../views/home.vue"),
    },

    {
      path: "/home",
      name: "home",
      component: () => import("../views/home.vue"),
    },

    {
      path: "/cats",
      name: "cats",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/cats.vue"),
    },

    {
      path: "/booking",
      name: "booking",
      component: () => import("../views/booking.vue"),
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("../views/rules.vue"),
    },

    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/contact.vue"),
    },

    {
      path: "/inscription",
      name: "inscription",
      component: () => import("../views/inscription.vue"),
    },

    {
      path: "/connection",
      name: "connection",
      component: () => import("../views/connection.vue"),
    },

  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash
      }
    }
  },
});

export default router;

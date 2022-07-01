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
      path: "/welcome",
      name: "welcome",
      component: () => import("../views/welcome.vue"),
    },

    {
      path: "/cats",
      name: "cats",
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

    {
      path: "/concept",
      name: "concept",
      component: () => import("../views/concept.vue"),
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/logout.vue"),
    },
    {
      path: "/list_table",
      name: "list_table",
      component: () => import("../views/listTable.vue"),
    },

    {
      path: "/free_table",
      name: "free_table",
      component: () => import("../views/free_table.vue"),
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

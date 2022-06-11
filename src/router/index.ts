import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/accueil",
      name: "accueil",
      component: () => import("../views/accueil.vue"),
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
      path: "/reservation",
      name: "reservation",
      component: () => import("../views/reservation.vue"),
    },
    {
      path: "/charte",
      name: "charte",
      component: () => import("../views/charte.vue"),
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
    path: "/connexion",
    name: "connexion",
    component: () => import("../views/connexion.vue"),
    },

   
    
    
  ],
});

export default router;

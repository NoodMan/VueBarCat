import { defineStore } from "pinia";


export const loginStore = defineStore({
  id: "userlog",
  state: () => ({
    user: {
    
      email: "",
      password: "",
    },
    user_logged: {

    }
  }),

  persist: true,

  getters: {

  },

  actions: {},
});


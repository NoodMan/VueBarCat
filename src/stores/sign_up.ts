import { defineStore } from "pinia";


export const sign_upStore = defineStore({
  id: "usersign_up",
  state: () => ({ 
    user: {
        lastname:"",
        firstname:"",
        address:"",
        zip_code:"",
        city:"",
        email:"",
        tel:"",
        mobile:"",
        day_of_birth:"",
        month_of_birth:"",
        year_of_birth:"",
        password:"",
        confirm_password:"",
        cat:"",
    },
  }),

  persist: true,

  getters: {

  },

  actions: {},
});

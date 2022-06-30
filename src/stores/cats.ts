import { defineStore } from "pinia";


export const useStore = defineStore({
  id: "id",
  state: () => ({ 
    cats: [],
  
  }),
  getters: {

    getCats: (state) => state.cats,

  },

  actions: {},
});
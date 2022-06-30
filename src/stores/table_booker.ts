import { defineStore } from "pinia";


export const table_bookerStore = defineStore({
  id: "booker_table",
  state: () => ({
    table_books: [],
  }),

  persist: true,

  getters: {
    
  },

  actions: {},
});
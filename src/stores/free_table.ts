import { defineStore } from "pinia";


export const free_tableStore = defineStore({
  id: "free_table",
  state: () => ({
    free_tables: [],
  }),

  persist: true,

  getters: {

  },

  actions: {},
});
import { defineStore } from "pinia";

export const bookingStore = defineStore({
  id: "booking",
  state: () => ({
    user: {
      id: "",
      temporary_date: "",
      time_of_booking: "10:00",
      number_of_people: "",
      date_of_booking: undefined
    },
  }),

  persist: true,

  getters: {
    bookingDate(): Date {
      return new Date(`${this.user.temporary_date}T${this.user.time_of_booking}:00`);
    }
  },

  actions: {},
});



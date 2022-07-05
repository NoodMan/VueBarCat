<template>
  <div>
    <form class="result">
      <h1><label for="">Liste des réservations</label></h1>
      <select
        name="bookingSelect"
        id="bookingSelect"
        @change="showBooking"
        v-model="booking_id"
      >
        <option
          v-for="booking in table_books"
          :key="booking.id"
          :value="booking.id"
        >
          {{ booking.id }}
          {{ booking.user.firstname }}
          {{ booking.user.lastname }}
        </option>
      </select>
    </form>
    <div class="result">
      <div>
        <strong>
          <label for="">Date de res : <br /></label
        ></strong>
        <span class="">
          {{ booking_selected?.date_of_booking }}
        </span>
      </div>

      <div>
        <strong>
          <label for="">n° de res : <br /></label
        ></strong>
        <span class="">
          {{ booking_selected?.id }}
        </span>
      </div>
      <div>
        <strong
          ><label for="">nbr de personnege pour la resa : <br /> </label
        ></strong>
        <span class="">
          {{ booking_selected?.number_of_people }}
        </span>
      </div>
      <div>
        <strong>
          <label for="">n° de la table reserver : <br /></label
        ></strong>
        <span class="">
          {{ booking_selected?.table_resaID }}
        </span>
      </div>
      <div>
        <strong> <label for="">Nom : </label></strong>
        <span class="">
          {{ booking_selected?.user?.lastname }}
        </span>
      </div>
      <div>
        <strong> <label for="">Prénom :</label></strong>
        <span class=""> <br />{{ booking_selected?.user?.firstname }} </span>
      </div>
      <button class="">Validation réservation</button>
    </div>

    <!-- <div v-if="user_logged.role == 'ADMIN'" class="circle"> -->
    <RouterLink to="/free_table">
      <span class="material-icons"> pets </span>
    </RouterLink>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";
import { mapWritableState } from "pinia";
import { table_bookerStore } from "../stores/table_booker";
export default {
  data() {
    return {
      booking_id: undefined,
      booking_selected: {},
    };
  },
  methods: {
    async getListBooking() {
      const res_booking = await axios
        .get("http://localhost:666/booking")
        .then((response) => {
          this.table_books = response.data;
          //console.log('-->⛔️ Je suis ici 🎉 <--', response.data);
        })
        .catch((error) => {});
    },
    showBooking() {
      this.booking_selected = this.table_books.find(
        (b) => b.id == this.booking_id
      );
    },
  },

  mounted() {
    this.getListBooking();
  },

  computed: {
    ...mapWritableState(table_bookerStore, ["table_books"]),
  },
};
</script>

<style scoped>
html {
  background-color: rgb(255, 255, 255);
}

select {
  text-align: center;
}

.result {
  text-align: center;
}
</style>
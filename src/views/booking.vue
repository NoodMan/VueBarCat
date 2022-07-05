<template>
  <h3 class="">!</h3>
  <form @submit.prevent="BookingForm" novalidate>
    <div class="wrapper">
      <div class="avatar"><span class="material-icons size"> pets </span></div>
      <h1>RESERVATIONS</h1>

      <div v-if="user_logged.user.role == 'ADMIN'" class="circle">
        <RouterLink to="/list_table">
          <span class="material-icons"> visibility </span>
        </RouterLink>
      </div>
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <span class="form-control fill-input1" id="floatingInput5">
              {{ user_logged.user.lastname }}
            </span>
          </div>
        </div>
        <div class="col">
          <div class="mb-2">
            <span class="form-control fill-input1" id="floatingInput5">
              {{ user_logged.user.firstname }}</span
            >
          </div>
        </div>
      </div>
      <div class="mb-2">
        <span class="form-control fill-input" id="floatingInput6">{{
          user_logged.user.email
        }}</span>
      </div>
      <div class="row">
        <div class="col">
          <div class="col-auto">
            <span class="form-control fill-input1" id="floatingInput7">
              {{ user_logged.user.tel }}</span
            >
          </div>
        </div>
        <div class="col">
          <div class="col-auto">
            <span class="form-control fill-input1" id="floatingInput8">
              {{ user_logged.user.mobile }}</span
            >
          </div>
        </div>
      </div>
      <h4>DATE DE LA RESERVATION</h4>
      <div class="d-flex mx-5 gap-1">
        <input
          :min="`${current_date}`"
          type="date"
          class="form-control"
          v-model="user.temporary_date"
          required
          placeholder="Date de la réservation"
        />
      </div>
      <h4>HEURE DE LA RESERVATION</h4>
      <div class="d-flex gap-5">
        <div>
          <input
            min="09:00"
            max="18:00"
            step="900"
            type="time"
            class="form-control fill-input3"
            required
            v-model="user.time_of_booking"
            placeholder="Heure"
          />
        </div>
      </div>
      <div>
        <input
          min="1"
          max="10"
          type="number"
          class="form-control fill-input2"
          v-model.trim="user.number_of_people"
          required
          placeholder="Nombre de personnes"
        />
      </div>
      <br />
      <br />

      <div class="mt-2">
        <center>
          <button
            @click="show = !show"
            @submit.prevent="BookingForm"
            class="btn btn-danger"
            type="submit"
          >
            Réservation
          </button>

          <Transition name="bounce">
          <center>
            <p v-if="show">Merci pour votre réservation 😺</p>
            <p v-if="show">
              ⚠️ vous allez être redirigé vers la page accueil...
            </p>
          </center>
        </Transition>
        </center>
      </div>
      <button class="space" id="border2">
        <!-- <RouterLink to="/home#retourtop"> -->
        <RouterLink id="border-hover" title="Accueil" to="/home">
          <span class="material-icons"> home </span>
        </RouterLink>
        <RouterLink id="border-hover" title="Concept" to="/concept"
          ><span class="material-icons"> emoji_objects </span></RouterLink
        >
        <RouterLink id="border-hover" title="Les chats" to="/cats"
          ><span class="material-icons"> pets </span></RouterLink
        >
        <RouterLink id="border-hover" title="La charte" to="/rules"
          ><span class="material-icons"> article </span></RouterLink
        >
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { bookingStore } from "../stores/booking";
import { loginStore } from "../stores/login";
import { mapWritableState, mapState } from "pinia";

export default {
  methods: {
    async BookingForm() {
      this.user.date_of_booking = this.bookingDate;
      this.user.id = this.user_logged.user.id;
      const booking = await axios
        .post("http://localhost:666/booking", this.user)
        .then((response) => response.data)
        .catch((error) => {
          const message = JSON.parse(error.request.response);

          alert(message.message);
          /status code 400/.test(error); //RegExp
          if (/status code 400/.test(error) == false) {
            alert("error");
          }
        });
      setTimeout(() => {
        this.$router.push("/welcome");
      }, 3500);
      // if (this.bookingDate) {
      //   this.$router.push("/home");
      // }
    },
  },

  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapWritableState(bookingStore, ["user"]),
    ...mapState(bookingStore, ["bookingDate"]),
    ...mapState(loginStore, ["user_logged"]),
    current_date() {
      let _now = new Date();
      let month = (Number(_now.getMonth()) + 1).toString();
      month = month.length < 2 ? `0${month}` : month;
      let day =
        _now.getDate().toString().length < 2
          ? `0${_now.getDate()}`
          : _now.getDate();
      return `${_now.getFullYear()}-${month}-${day}`;
    },
  },
};
</script>

<style>
p {
  text-align: center;
}

h1 {
  margin-top: 10px;
  padding: 25px;
}

h4 {
  margin-top: 15px;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.wrapper div.container-main:last-child {
  padding-bottom: 2em;
}

.avatar {
  position: relative;
  z-index: 5;
  border-radius: 50%;
  transform: translate(0, -50%);
  margin-bottom: -3em;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 6em;
  height: 6em;
  background: #fefefe;
  border-radius: 50%;
  border: 0.5em solid rgba(0, 0, 0, 0.03);
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  transition: 0.4s;
  border-radius: 10px;
  margin: 10px;
  /* padding: 5px; */
}
a:hover {
  color: #636463;
  background: linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
}
#border2 {
  display: flex;
  justify-content: space-between;
  position: static;
  font-size: 20px !important;
  border: #636463;
  letter-spacing: 0.1rem;
  text-decoration-color: #000;
  border-bottom-left-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
}

material-icons {
  vertical-align: top;
  font-size: 25px !important;
}

.space {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 65px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #636463;
  z-index: 10;
  margin-top: 15px;
}

.size {
  font-size: 5rem;
  animation: pulsate 1.5s linear infinite;
}

/* base style + reset */
* {
  box-sizing: border-box;
  /* padding: 0;
    margin: 0px; */
  /* text-align: center; */
}

html {
  height: 100vh;
  /* set viewport constraint */
  min-height: 100%;
  /* enforce height */
  font-size: 62.5%;
  background-color: black;
}

body {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: ;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.07);
}

/* Layout: wrapper, conatiners */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 60rem;
  margin: 0 auto;
  margin-inline: auto;
  border-radius: 20px;

  border-top: 6px solid #e5a8de;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  background: #c7bce4;
  background: -webkit-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: -moz-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: -o-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
}

.container-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 3rem;
}

.row {
  /* margin-top: 22px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  width: 90%;
}

/* Elements */
h3 {
  margin: 1em 0 3em 0;
  margin: 30px;
  /* padding: 30px; */
  color: #000;
}

h5 {
  margin-bottom: 1rem;
}

@keyframes pulsate {
  0% {
    transform: scale(1.1, 1.1);
  }

  50% {
    transform: scale(1.2, 1.2);
  }

  100% {
    transform: scale(1.1, 1.1);
  }
}

.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 50%;
  border: 0.7rem solid rgba(0, 0, 0, 0.03);
  transition: all 0.3s;
}

.circle:hover {
  transform: scale(1.1);
}

body {
  background-color: black;
}

#border {
  border-width: 1px 2px 3px 2px;
  border-style: solid;
  border-color: black;
  padding: 0 10px;
  border-radius: 10px;
}

.form-control {
  padding: 1rem 0.75rem;
  border-radius: 10px;
}

/* form {
  display: flex;
} */

/* .align {
        padding: 50px;
        width: 900px;
    } */

input {
  margin-top: 10px;
  border-radius: 20px;
}

h3 {
  margin-top: 15px;
}

.fill-input {
  min-width: 20rem;
}

.fill-input1 {
  min-width: 10rem;
}

.fill-input2 {
  min-width: 15rem;
}
</style>

   
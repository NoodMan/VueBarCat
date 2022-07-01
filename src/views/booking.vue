<template>
  <h3 class="">!</h3>
  <form @submit.prevent="BookingForm" novalidate>

    <div class="wrapper">
      <div class="avatar"><span class="material-icons size">
          pets
        </span></div>
      <h1>RESERVATION</h1>
      <div class="row">
        <div class="col">
          <div class="form-floating mb-2">
            <input type="text" class="form-control fill-input1"  v-model.trim="user.lastname" id="floatingInput5" placeholder="Nom" required/>
            <label for="floatingInput5">Nom</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating mb-2">
            <input type="text" class="form-control fill-input1" v-model.trim="user.firstname" id="floatingInput5" placeholder="Prénom" required/>
            <label for="floatingInput5">Prénom</label>
          </div>
        </div>
      </div>
      <div class="form-floating mb-2">
        <input type="email" class="form-control fill-input" v-model.trim="user.email" id="floatingInput6" placeholder="mail" required/>
        <label for="floatingInput6">Adresse mail</label>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-floating col-auto">
            <input type="tel" class="form-control fill-input1" v-model.trim="user.tel" id="floatingInput7" placeholder="Tél" required />
            <label for="floatingInput7">Tél</label>
          </div>
        </div>
        <div class="col">
          <div class="form-floating col-auto">
            <input type="text" class="form-control fill-input1" v-model.trim="user.mobile" id="floatingInput8" placeholder="Mobile" required />
            <label for="floatingInput8">Mobile</label>
          </div>
        </div>
      </div>
      <h3>DATE DE LA RESERVATION</h3>

      <div class="d-flex mx-5 gap-1">
        <input :min="`${current_date}`" type="date" class="form-control" v-model="user.temporary_date" required
          placeholder="Date de la réservation" />
      </div>

      <h3>HEURE DE LA RESERVATION</h3>

      <div class="d-flex gap-5">
        <div>
          <input min="09:00" max="18:00" step="900" type="time" class="form-control fill-input3" required
            v-model="user.time_of_booking" placeholder="Heure" />
        </div>
      </div>
      <div>
        <input min="1" max="10" type="number" class="form-control fill-input2" v-model.trim="user.number_of_people" required
          placeholder="Nombre de personnes" />
      </div>
      <br>
      <br>
      <div v-if="user_logged.role == 'ADMIN'" class="circle">
        <RouterLink to="/list_table">
          <span class="material-icons">
            pets
          </span>
        </RouterLink>
      </div>


      <div class="mt-2">
        <button @submit.prevent="BookingForm" class="btn btn-danger" type="submit">Réservation</button>
      </div>


      <!-- </div>
    
  </div> -->

    </div>
  </form>
</template>

<script>
  import axios from "axios";
  import { bookingStore } from "../stores/booking";
  import {loginStore} from "../stores/login";
  import { mapWritableState, mapState } from "pinia";

  //je voulais importer les donnes du store user (remplissage automatique)
  // import { sign_upStore } from "@/stores/sign_up";
  // const importSign_upStore = sign_upStore();


  export default {
    methods: {
      async BookingForm() {
        this.user.date_of_booking = this.bookingDate;
        const booking = await axios
          .post("http://localhost:666/booking", this.user)
          .then((response) => response.data)
          .catch((error) => {

            const message = JSON.parse(error.request.response);

            alert(message.message);
            /status code 400/.test(error) //RegExp
            if (/status code 400/.test(error) == false) {
              alert("error")
            }
          });

        if (booking == "merci votre réservation ") {
          this.$router.push("/home");

        }
      },
    },

    computed: {
      ...mapWritableState(bookingStore, ["user"]),
      ...mapState(bookingStore, ["bookingDate"]),
      ...mapState(loginStore, ["user_logged"]), 
      current_date() {
        let _now = new Date()
        let month = (Number(_now.getMonth()) + 1).toString()
        month = month.length < 2 ? `0${month}` : month
        let day = _now.getDate().toString().length < 2 ? `0${_now.getDate()}` : _now.getDate()
        return `${_now.getFullYear()}-${month}-${day}`
      }
    },
  };
</script>

<style>
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
    background: #FEFEFE;
    border-radius: 50%;
    border: 0.5em solid rgba(0, 0, 0, 0.03);

  }




  a {
    text-decoration: none;
    color: rgb(0, 0, 0);
    transition: 0.4s;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
  }

  #border2 {

    display: flex;
    justify-content: space-between;
    position: static;
    font-size: 20px !important;
    border: #636463;
    letter-spacing: 0.1rem;
    text-decoration-color: #000;

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
    height: 70px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: #636463;
    z-index: 10;

  }

  .size {
    font-size: 7rem;
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
    background: #C7BCE4;
    background: -webkit-linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
    background: -moz-linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
    background: -o-linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
    background: linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* flex-direction: column; */
    /* width: 100%; */
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
    padding: 1rem .75rem;
    border-radius: 10px;
  }

  form {
    display: flex;

  }

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
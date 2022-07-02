<template>
  <div id="retourtop2"></div>
  <h3 class="">!</h3>

  <form @submit.prevent="LoginForm">
    <div class="wrapper">
      <div class="avatar"><span class="material-icons size"> pets </span></div>

      <!-- il faut que le nom et le prenom sorte de la base de donnée  -->
      <!-- <div class="d-flex flex-column align-items-center align"> -->
      <h1>CONNEXION</h1>
      <br />
      <!-- <form class="row g-1 needs-validation" novalidate> -->
      <div class="form-floating mb-2">
        <input
          type="text"
          class="form-control fill-input2"
          id="floatingInput"
          v-model.trim="user.email"
          placeholder="mail"
        />
        <label for="floatingInput">Adresse mail</label>
      </div>

      <div class="form-floating mb-2">
        <input
          type="password"
          class="form-control fill-input2"
          id="floatingInput"
          v-model.trim="user.password"
          placeholder="mail"
        />
        <label for="floatingInput">Mot de passe</label>
      </div>
      <div class="">
        <div class="col p-3">
          <i> <a href="#!">Mot de passe oublier?</a></i>
          <i>
            <RouterLink to="/inscription#retourtop1">
              Pas encore inscrit?</RouterLink
            >
          </i>
        </div>
      </div>

      <div class="p-3">
        <center>
          <button class="btn btn-danger" @click="show = !show" type="submit">
            Connexion
          </button>
        </center>
        <Transition name="bounce">
          <p v-if="show">Vous etes bien connecter</p>
        </Transition>
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
        <RouterLink id="border-hover" title="Réservation" to="/booking"
          ><span class="material-icons"> edit_calendar </span></RouterLink
        >
        <RouterLink id="border-hover" title="Déconnexion" to="/logout"
          ><span class="material-icons"> logout </span></RouterLink
        >
      </button>
    </div>
  </form>
</template>


<script>
import axios from "axios";
import { loginStore } from "../stores/login";
import { mapWritableState } from "pinia";

export default {
  methods: {
    async LoginForm() {
      const login = await axios
        .post("http://localhost:666/login", this.user)
        .then((response) => {
          this.user_logged = response.data;
        });
      // if (this.user_logged) {
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
    ...mapWritableState(loginStore, ["user", "user_logged"]),
  },
};
</script>





<style>
h1 {
  margin-top: 10px;
  padding: 25px;
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
  /* font-size: 15px; */
}

.form-floating > .form-control:focus,
.form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
  font-size: 15px;
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
  max-width: 40rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  /* width: 100%; */
}

/* Elements */
h3 {
  margin: 1em 0 3em 0;
  margin: 30px;
  padding: 30px;
  color: #000;
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
  border: solid;
  border-color: #636463;
  padding: 0 10px;
  margin: 50px;
  border-radius: 20px;
}

form {
  display: flex;
}

.col {
  font-size: 12px;
}

/* .align {
    padding: 50px;
    width: 900px;
} */

input {
  margin-top: 10px;
  font-size: 15px;
}

h3 {
  margin-top: 15px;
}

.fill-input {
  min-width: 10rem;
}

.fill-input1 {
  min-width: 2rem;
}

.fill-input2 {
  min-width: 20rem;
  border-radius: 10px;
}
</style>
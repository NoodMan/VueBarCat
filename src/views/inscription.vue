<template>
  <div id="retourtop1"></div>
  <h3 class="">!</h3>

  <form @submit.prevent="SignupForm" novalidate>
    <div class="wrapper">
      <div class="avatar"><span class="material-icons size"> pets </span></div>
      <div class="d-flex flex-column align-items-center align">
        <h1>INSCRIPTION</h1>

        <div class="row">
          <div class="col">
            <div class="form-floating mb-2">
              <input
                type="text"
                title="Saisissez uniquement des lettres"
                pattern="[A-Za-z]*"
                maxlength="100"
                class="form-control fill-input1"
                id="floatingInput"
                v-model.trim="user.lastname"
                placeholder="nom"
                required
              />
              <label for="floatingInput">Nom</label>
            </div>
          </div>

          <div class="col">
            <div class="form-floating mb-2">
              <input
                type="text"
                pattern="[A-Za-z]*"
                maxlength="100"
                title="Saisissez uniquement des lettres"
                class="form-control fill-input1"
                id="floatingInput"
                v-model.trim="user.firstname"
                placeholder="Prénom"
                required
              />
              <label for="floatingInput">Prénom</label>
            </div>
          </div>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control fill-input"
            id="floatingInput"
            v-model.trim="user.address"
            placeholder="adresse"
          />
          <label for="floatingInput">Adresse</label>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-floating col-auto">
              <input
                type="text"
                pattern="\d{5}"
                maxlength="5"
                title="Saisissez une nombre à 5 chiffres"
                class="form-control fill-input1"
                id="floatingInput"
                v-model.trim="user.zip_code"
                placeholder="cp"
              />
              <label for="floatingInput">Code Postal</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating col-auto">
              <input
                type="text"
                pattern="[A-Za-z]*"
                title="Saisissez uniquement des lettres"
                class="form-control fill-input1"
                id="floatingInput"
                v-model.trim="user.city"
                placeholder="Ville"
              />
              <label for="floatingInput">Ville</label>
            </div>
          </div>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            pattern="/^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/"
            class="form-control fill-input"
            id="floatingInput"
            v-model.trim="user.email"
            placeholder="email"
          />
          <label for="floatingInput">Adresse mail</label>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-floating col-auto">
              <input
                type="text"
                title="Saisissez un numéro de telephone composé de 10 chiffres"
                pattern="\d{10}"
                maxlength="10"
                class="form-control fill-input1"
                id="floatingInput"
                v-model.trim="user.tel"
                placeholder="Tél"
              />
              <label for="floatingInput">Tél</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating col-auto mb-2">
              <input
                type="text"
                pattern="\d{10}"
                maxlength="10"
                title="Saisissez un numéro de mobile composé de 10 chiffres"
                class="form-control fill-input1"
                id="floatingInput"
                v-model.trim="user.mobile"
                placeholder="Mobile"
              />
              <label for="floatingInput">Mobile</label>
            </div>
          </div>
        </div>
        <div class="d-flex mx-5 gap-1">
          <input
            min="1"
            max="31"
            type="number"
            class="form-control"
            v-model.trim="user.day_of_birth"
            placeholder="jour de naissance"
          />

          <input
            type="number"
            class="form-control"
            placeholder="Mois"
            min="1"
            max="12"
            v-model.trim="user.month_of_birth"
          />

          <input
            min="1940"
            pattern="\d{4}"
            maxlength="4"
            type="number"
            class="form-control"
            v-model.trim="user.year_of_birth"
            placeholder="Année"
          />
        </div>

        <div class="form-floating mb-2">
          <input
            type="password"
            class="form-control fill-input2"
            id="floatingInput"
            v-model.trim="user.password"
            placeholder="Mot de passe"
          />
          <label for="floatingInput">Mot de passe</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="password"
            class="form-control fill-input2"
            id="floatingInput"
            v-model.trim="user.confirm_password"
            placeholder="Confirmer mot de passe"
          />
          <label for="floatingInput">Confirmer mot de passe</label>
        </div>

        Possedez-vous un ou des chats?
        <br />
        <center>
          <div name="cat" class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="non"
              name="cat"
              v-model.trim="user.cat"
              id="flexCheckDefault"
            />
            <label name="cat" class="form-check-label" for="flexCheckDefault">
              Non
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              value="oui"
              name="cat"
              v-model.trim="user.cat"
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked"> Oui </label>
          </div>
        </center>

        <div>
          <center>
            <button class="btn btn-danger" @click="show = !show" type="submit">
              Inscription
            </button>
          </center>
         <Transition name="bounce">
          <center>
            <p v-if="show">Merci pour votre inscription 😺</p>
            <p v-if="show">
              ⚠️ vous allez être redirigé vers la page accueil...
            </p>
          </center>
        </Transition>
        </div>
        <div>
          <i
            ><RouterLink to="/connection#retourtop2"
              >Déjà un compte ? connexion
            </RouterLink></i
          >
        </div>
        <br />
        <!-- <div class="circle">
              <RouterLink to="/home"><span class="material-icons inline-icon">
                  home
                </span></RouterLink>
            </div> -->
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
          <!-- <RouterLink id="border-hover" title="Connexion" to="/connection"
            ><span class="material-icons"> login </span></RouterLink
          > -->
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { sign_upStore } from "../stores/sign_up";
import { mapWritableState } from "pinia";

export default {
  methods: {
    async SignupForm() {
      const sign_up = await axios
        .post("http://localhost:666/sign_up", this.user)
        .then((response) => response.data)
        .catch((error) => {
          const message = JSON.parse(error.request.response);

          alert(message.message);
          /status code 400/.test(error); //RegExp
          if (/status code 400/.test(error) == false) {
            alert("error 😱");
          }
        });
 setTimeout(()=>{ this.$router.push("/welcome")}, 3500) 
      // if (this.user) {
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
    ...mapWritableState(sign_upStore, ["user"]),
  },
};
</script>
  




<style >
h1 {
  margin-top: 10px;
  padding: 25px;
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

.form-floating > .form-control:focus,
.form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
  font-size: 15px;
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

i {
  font-size: 12px;
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
.col {
  flex: 1 0 0%;
  display: flex;
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
  max-width: 55rem;
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
  /* flex-direction: column; */
  /* width: 100%; */
}

/* Elements */
h3 {
  margin: 1em 0 3em 0;
  margin: 30px;
  padding: 30px;
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
}

.form-control {
  padding: 1rem 0.75rem;
  border-radius: 10px;
  display: block;
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
}

h3 {
  margin-top: 15px;
}

.fill-input {
  min-width: 30rem;
}

.fill-input1 {
  min-width: 20rem;
}

.fill-input2 {
  min-width: 25rem;
}
</style>
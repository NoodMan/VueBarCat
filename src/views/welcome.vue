<template>
  <!-- Main -->
  <main class="et-main">
    <section class="slide">
      <div class="wrapper">
        <div class="avatar">
          <RouterLink to="/home">
            <span1 class="material-icons material-icons1"> pets </span1>
          </RouterLink>
        </div>

        <div class="rdv">
          <i>
            <span id="align" class="material-icons"> laptop </span> Réservation
            en ligne <span id="align" class="material-icons"> laptop </span></i
          >
          <br />

          <i>
            <h4>ou</h4>
          </i>

          <i>
            <span id="align" class="material-icons"> phone </span> par télèphone
            <span id="align" class="material-icons"> phone_enabled </span></i>
        </div>
        <div class="espacement">
          <p>Un lieu dédié aux chats</p>
          <p>où vous n'êtes que des invités...</p>
        </div>
        <h3>Horaires d'ouverture :</h3>
        <div class="p1">
          <p1>Lundi 10:00 à 18:30</p1>
          <p1>Mardi 10:00 à 18:30</p1>
          <p1>Mercredi 10:00 à 19:00</p1>
          <p1>Jeudi 10:00 à 18:30</p1>
          <p1>Vendredi 10:00 à 19:00</p1>
          <p1>Samedi 10:00 à 20:00</p1>
          <p1>Dimanche FERMÉ </p1>
        </div>
        <div class="container-main bg-blue">
          <div class="row">
            <h5></h5>

            <div class="circle">
              <RouterLink to="/inscription"
                ><span class="material-icons inline-icon">
                  person_add
                </span></RouterLink
              >
            </div>
          </div>

          <div class="row">
            <div class="share-toggle hidden"></div>
            <h5></h5>
            <div class="circle">
              <RouterLink to="/connection"
                ><span class="material-icons inline-icon">
                  login
                </span></RouterLink
              >
            </div>
          </div>
        </div>
        <button class="space" id="border2">
          <!-- <RouterLink to="/home#retourtop"> -->
          <RouterLink id="border-hover" to="/home">
            <span class="material-icons"> home </span>Accueil
          </RouterLink>
          <RouterLink id="border-hover" to="/concept"
            ><span class="material-icons"> emoji_objects </span
            >Concept</RouterLink
          >
          <RouterLink id="border-hover" to="/cats"
            ><span class="material-icons"> pets </span>Les Chats</RouterLink
          >
          <RouterLink id="border-hover" to="/rules"
            ><span class="material-icons"> article </span>La Charte</RouterLink
          >
          <RouterLink id="border-hover" to="/booking"
            ><span class="material-icons"> edit_calendar </span
            >Réservation</RouterLink
          >
          <!-- <RouterLink id="border-hover" to="/logout"
            ><span class="material-icons"> logout </span>Déconnexion</RouterLink
          > -->
        </button>
      </div>
    </section>
  </main>
</template>












<style>
/* pour la phrase d'accroche! */
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap'); 
/* pour les horaires */
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Kalam:wght@300&display=swap');
/* pour les titres avec icones */
@import url('https://fonts.googleapis.com/css2?family=Arima:wght@400;500&family=Gloria+Hallelujah&family=Kalam:wght@300&family=Nunito:wght@300;600;900&display=swap');
.size {
  font-size: 5rem;
  animation: pulsate 1.5s linear infinite;
}
.material-icons1 {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 5rem;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-osx-font-smoothing: grayscale;
  animation: pulsate 1.5s linear infinite;
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  transition: 0.4s;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  font-size: 25px;
}
.cacher {
  color: #000;
}

#align {
  vertical-align: middle;
  font-size: 25px !important;
}

span {
 vertical-align: sub;
  font-size: 32px !important;
  color:#000;
}

#border-hover:hover {
  background: #c7bce4;
  background: -webkit-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: -moz-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: -o-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
}

a:hover {
  color: #636463;
}
h4 {
  color: #000;
}
.rdv {
  /* padding: 40px; */
  letter-spacing: 0.3rem;
  line-height: 3.2;
  margin: auto;
  text-align: center;
  font-family: 'Kalam', cursive;
  font-size: 30px;
  color: azure;
}

.espacement {
  padding-top: 20px;
  text-align: center;
  color: rgb(87, 83, 83);
}

p {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 55px;
  letter-spacing: 0.2rem;
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
  border-bottom-left-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  font-family: 'Arima', cursive;
  font-weight: 900;
}

.space {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 70px; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #636463;
  z-index: 10;
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
  padding: 10px;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.07);
}

/* Layout: wrapper, conatiners */
.wrapper {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  max-width: 100rem !important;
  margin: 58px auto !important;
  border-radius: 30px;
  border-top: 6px solid #e5a8de;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  background: #c7bce4;
  background: -webkit-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: -moz-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: -o-linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  background: linear-gradient(39deg, #acbdf5, #e9a4c3, #f9cad4 94%);
  border-radius: 10px;
  border-bottom-left-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
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
  width: 100%;
  text-align: center;
}

/* Elements */
.p1,
p1 {
  display: block;
  font-size: 25px;
  color: azure;
  text-align: center;
  font-family: 'Kalam', cursive;

}
h3 {
  font-family: 'Kalam', cursive;
  margin: 30px;
  font-size: 35px;
  color: azure;
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
</style>
<template>
  <h3 class="">Facts about Cats!</h3>

  <div class="wrapper">
    <div class="avatar"><span class="material-icons size"> pets </span></div>

    <p>bla bla bla</p>

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
            ><span class="material-icons inline-icon"> login </span></RouterLink
          >
        </div>
      </div>
    </div>

    <button class="space" id="border2">
      <RouterLink to="/home#retourtop">
        <span class="material-icons"> home </span>Accueil
      </RouterLink>
      <RouterLink to="/concept"
        ><span class="material-icons"> emoji_objects </span>Concept</RouterLink
      >
      <RouterLink to="/cats"
        ><span class="material-icons"> pets </span>Les chats</RouterLink
      >
      <RouterLink to="/rules"
        ><span class="material-icons"> article </span>La charte</RouterLink
      >
      <RouterLink to="/booking"
        ><span class="material-icons"> edit_calendar </span
        >Réservation</RouterLink
      >
      <RouterLink to="/logout">Déconnexion</RouterLink>
    </button>
  </div>
</template>
  
  
  
  
  
  
  
  
  
  
  
  
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
  max-width: 90rem;
  margin: 0 auto;

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
  width: 100%;
}

/* Elements */
h3 {
  margin: 1em 0 3em 0;
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
  
  

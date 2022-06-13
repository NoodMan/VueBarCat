
<script setup lang="ts">
import cats from "./cats.vue";
</script>

<template>

  <div class="et-hero-tabs-container">
    <a class="et-hero-tab inline-icon" href="#tab-es6"
      ><span class="material-icons inline-icon"> home </span> Accueil</a
    >
    
    
    <a class="et-hero-tab inline-icon" href="#tab-flexbox">
   

                <RouterLink to="/cats#retourtop5">Les Chats</RouterLink>
          
      <span class="material-icons inline-icon"> pets </span>Les chats</a>


    <a class="et-hero-tab inline-icon" href="#tab-react"
      ><span class="material-icons inline-icon"> article </span>La charte</a
    ><a class="et-hero-tab inline-icon" href="#tab-angular"
      ><span class="material-icons inline-icon"> edit_calendar </span
      >Reservation</a
    ><!-- &lt;a class=&quot;et-hero-tab&quot; href=&quot;#tab-other&quot;&gt;Inscription&lt;/a&gt;
       &lt;a class=&quot;et-hero-tab&quot; href=&quot;#tab-con&quot;&gt;Connexion&lt;/a&gt; --><!-- &lt;span class=&quot;et-hero-tab-slider&quot;&gt;&lt;/span&gt; -->
  </div>
  <div class="container">
    <h1>
      <span>Les chats présent</span>
      <span>pour des moments de boheur</span>
    </h1>

    <button id="border">
      <RouterLink to="/inscription">Inscription</RouterLink>
    </button>
    <button id="border">
      <RouterLink to="/connection">Connection</RouterLink>
    </button>
    <div class="card-container">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-front">
            <p>Sheitan</p>
            <center>
              <img src="../assets/photostudio-8-designify.png" alt="" />
            </center>
            <p class="card-price">Vous attends...</p>
            <i class="arrow-icon fas fa-arrow-right"></i>
          </div>
          <div class="card-back">
            <a href="#" class="btn">Reserver?</a>
          </div>
        </div>
      </div>

      <div class="card-wrapper">
        <div class="card">
          <div class="card-front">
            <p>Sheitan</p>
            <center>
              <img src="../assets/photostudio-8-designify.png" alt="" />
            </center>
            <p class="card-price">Vous attends...</p>
            <i class="arrow-icon fas fa-arrow-right"></i>
          </div>
          <div class="card-back">
            <a href="#" class="btn">Reserver?</a>
          </div>
        </div>
      </div>

      <div class="card-wrapper">
        <div class="card">
          <div class="card-front">
            <p>Sheitan</p>
            <center>
              <img src="../assets/photostudio-8-designify.png" alt="" />
            </center>
            <p class="card-price">Vous attends...</p>
            <i class="arrow-icon fas fa-arrow-right"></i>
          </div>
          <div class="card-back">
            <a href="#" class="btn">Reserver?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/cats.css";

body {
  font-family: "Century Gothic", "Lato", sans-serif;
}

button {
  border: #636463;
}

a {
  text-decoration: none;
}

a:hover {
  color: #636463;
}

.et-hero-tabs,
.et-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background: rgb(0, 0, 0);
  text-align: center;
  padding: 0 2em;

  h1 {
    font-size: 2rem;
    margin: 0;
    letter-spacing: 1rem;
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 0.3rem;
    opacity: 0.6;
  }
}

#border {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #c7bce4;
  background: -webkit-linear-gradient(39deg, #c7bce4, #f9cad4, #e9a4c3 94%);
  background: -moz-linear-gradient(39deg, #c7bce4, #f9cad4, #e9a4c3 94%);
  background: -o-linear-gradient(39deg, #c7bce4, #f9cad4, #e9a4c3 94%);
  background: linear-gradient(39deg, #c7bce4, #f9cad4, #e9a4c3 94%);
  text-decoration-color: #000;
}

.et-hero-tabs-container {
  display: flex;
  flex-direction: row;
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #636463;
  z-index: 10;

  &--top {
    position: fixed;
    top: 0;
  }
}

.et-hero-tab {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #000;
  letter-spacing: 0.1rem;
  transition: all 0.5s ease;
  font-size: 0.8rem;

  &:hover {
    color: white;
    background: rgba(102, 177, 241, 0.8);
    transition: all 0.5s ease;
  }
}

.et-hero-tab-slider {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 6px;
  background: #636463;
  transition: left 0.3s ease;
}

@media (min-width: 800px) {
  .et-hero-tabs,
  .et-slide {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1rem;
    }
  }

  .et-hero-tab {
    font-size: 1rem;
  }
}

img {
  border-radius: 10px;
  margin-block: auto;
  /* width : 550px; */
}

@media (max-width: 480px) {
  .et-hero-tabs-container {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: #636463;
    z-index: 10;

    &--top {
      position: fixed;
      top: 0;
    }
  }

  img {
    width: 100%;
  }
}

nav {
  border-radius: 10px;
}

.inline-icon {
  vertical-align: middle;
  font-size: 25px !important;
}
</style>

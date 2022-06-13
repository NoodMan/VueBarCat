<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <div id="retourtop"></div>
  <div class="et-hero-tabs-container">
    
    <a class="et-hero-tab inline-icon" href="#tab-es6"
      ><span class="material-icons inline-icon"> home </span> Accueil</a>
     
            <button id="border">

                <RouterLink to="/cats">Les Chats</RouterLink>
            </button>

    <a class="et-hero-tab inline-icon" href="#tab-flexbox"
      ><span class="material-icons inline-icon"> pets </span>Les chats</a
    ><a class="et-hero-tab inline-icon" href="#tab-react"
      ><span class="material-icons inline-icon"> article </span>La charte</a
    ><a class="et-hero-tab inline-icon" href="#tab-angular"
      ><span class="material-icons inline-icon"> edit_calendar </span
      >Reservation</a
    > 
  </div> -->

  <!-- <h1>Projet Coffee Cat</h1>  -->
  <!-- mettre un lien sur le logo -->

  <!-- <nav>
        <RouterLink to="/home">Accueil</RouterLink> 
        <RouterLink to="/cats">Les Cats</RouterLink>
        <RouterLink to="/booking">booking</RouterLink>
        <RouterLink to="/rules">La Charte</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/inscription">Inscription</RouterLink>
        <RouterLink to="/connection">Connexion</RouterLink> -->
  <!-- </nav>  -->

  <RouterView />
</template>

<style>
@import "./assets/app.css";
</style>

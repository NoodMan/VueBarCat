<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"

</script>

<template>
<div id="retourtop">
  
</div>


<!-- <h1>Projet Coffee Cat</h1>  -->
<!-- mettre un lien sur le logo -->
<!-- <br> -->
      <!-- <nav>
        <RouterLink to="/accueil">Accueil</RouterLink> 
        <RouterLink to="/cats">Les Cats</RouterLink>
        <RouterLink to="/reservation">Reservation</RouterLink>
        <RouterLink to="/charte">La Charte</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/inscription">Inscription</RouterLink>
        <RouterLink to="/connexion">Connexion</RouterLink> -->
      <!-- </nav>  -->

  <RouterView />
</template>

<style>
    @import './assets/app.css';
</style>

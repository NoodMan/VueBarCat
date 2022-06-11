<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"

</script>

<template>

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
        <RouterLink to="/connexion">Connexion</RouterLink>
      </nav> -->
      <br>
  <RouterView />
</template>

<style>


#app {
  
  
background-color: black;
  font-weight: normal;
}

nav {
  align-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* navbar */
a,
.green {
  text-decoration: none;
  color: red;
  transition: 0.4s;
  border-radius: 10px;
  margin:10px;
  padding:10px;
}

@media (hover: hover) {
  a:hover {
    background: #C7BCE4; /* fallback color if gradients are not supported*/ 
background: -webkit-linear-gradient(39deg,#C7BCE4, #F9CAD4, #E9A4C3 94%);
background: -moz-linear-gradient(39deg,#C7BCE4, #F9CAD4, #E9A4C3 94%);
background: -o-linear-gradient(39deg,#C7BCE4, #F9CAD4, #E9A4C3 94%);
background: linear-gradient(39deg,#C7BCE4, #F9CAD4, #E9A4C3 94%);


  }
}






nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
   
    place-items: center;
  }

  #app {
  
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }



  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>

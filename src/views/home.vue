<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router"

</script>

<template>
<div id="retourtop5"></div>
    <section  class="et-hero-tabs">


        <nav class="navbar navbar nav justify-content-end">

            <button id="border">

                <RouterLink to="/inscription">Inscription</RouterLink>
            </button>
            <button id="border">

                <RouterLink to="/connection">Connexion</RouterLink>
            </button>
        
        </nav>

        <img classe="size mt-2" src="../assets/logoblackcatcoffee.png" alt="logo">
        <!-- faire css pour image pour enlever les br -->
        <br>
        <br>
        <br>
        <br>
        <br>



        <!-- <h2>Hac ex c al aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis.</h2> -->





        <div class="et-hero-tabs-container">


            <a class="et-hero-tab inline-icon" href="#tab-es6">
                <span class="material-icons inline-icon">
                    home
                </span> Accueil</a>
            <a class="et-hero-tab inline-icon" href="#tab-flexbox"><span class="material-icons inline-icon">
                    pets
                </span>Les chats</a>
            <a class="et-hero-tab inline-icon" href="#tab-react"><span class="material-icons inline-icon">
                    article
                </span>La charte</a>
            <a class="et-hero-tab inline-icon" href="#tab-angular"><span class="material-icons inline-icon">
                    edit_calendar
                </span>Reservation</a>
            <!-- <a class="et-hero-tab" href="#tab-other">Inscription</a>
       <a class="et-hero-tab" href="#tab-con">Connexion</a> -->
            <!-- <span class="et-hero-tab-slider"></span> -->
        </div>
    </section>
    <br>
    <!-- Main -->
    <main class="et-main">
        <section class="et-slide" id="tab-es6">
            <h1>Accueil</h1>
            <h3>bla bla bla bla bla</h3>
          
            <button id="border">

                <RouterLink to="/home#retourtop">Accueil</RouterLink>

            </button>
        </section>
        <br>
        <section class="et-slide" id="tab-flexbox">
            <h1> Les chats </h1>
            <h3>bla bla bla bla bla</h3>

            <button id="border">

                <RouterLink to="/cats">Les Chats</RouterLink>
            </button>

          
        </section>
        <br>
        <section class="et-slide" id="tab-react">
            <h1>La Charte</h1>
            <h3>bla bla bla bla bla</h3>
          
            <button id="border">

                <RouterLink to="/rules">La Charte</RouterLink>
            </button>
        </section>
        <br>
        <section class="et-slide" id="tab-angular">
            <h1>Reservation</h1>
            <h3>bla bla bla bla bla</h3>
           
            <button id="border">

                <RouterLink to="/booking">Reservation</RouterLink>
            </button>
        </section>

        <!-- <section class="et-slide" id="tab-angular">
      <h1>Inscription</h1>
      <h3>something about other</h3>
       <RouterLink to="/inscription">Inscription</RouterLink>
    </section>
    <br>
    <section class="et-slide" id="tab-angular">
      <h1>Connexion</h1>
      <h3>something about other</h3>
      <RouterLink to="/connection">Connexion</RouterLink>
    </section> -->

    </main>

</template>

<style>
    @import '../assets/home.css';
</style>
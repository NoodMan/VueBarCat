<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router"

</script>

<template>
    <section  class="et-hero-tabs">


        <nav class="navbar navbar nav justify-content-end">

            <button id="border">

                <RouterLink to="/inscription">Inscription</RouterLink>
            </button>
            <button id="border">

                <RouterLink to="/connexion">Connexion</RouterLink>
            </button>
            <!-- <form class="d-flex input-group w-auto">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <span class="material-icons">
                        search
                    </span>
                </span>
            </form> -->


        </nav>

        <img classe="size" src="../assets/pink-gradient-designify-2.png" alt="logo">
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

                <RouterLink to="/accueil#retourtop">Accueil</RouterLink>

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

                <RouterLink to="/charte">La Charte</RouterLink>
            </button>
        </section>
        <br>
        <section class="et-slide" id="tab-angular">
            <h1>Reservation</h1>
            <h3>bla bla bla bla bla</h3>
           
            <button id="border">

                <RouterLink to="/reservation">Reservation</RouterLink>
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
      <RouterLink to="/connexion">Connexion</RouterLink>
    </section> -->

    </main>

</template>

<style>
    @import '../assets/accueil.css';
</style>
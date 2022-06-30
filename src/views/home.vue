<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router"

</script>

<template>
    <!-- <div id="retourtop5"></div> -->

    <section class="et-hero-tabs">
        <nav class="navbar navbar nav">
            <!-- justify-content-end = bootstrap pour espace entre bouton -->
            <button id="border">

                <span class="material-icons">
                    person_add
                </span>
                <RouterLink to="/inscription">Inscription</RouterLink>
            </button>
            <button id="border">

                <span class="material-icons">
                    login
                </span>
                <RouterLink to="/connection">Connexion</RouterLink>
            </button>

        </nav>

        <img classe="" src="../assets/logoblackcatcoffee.png" alt="logo">
        <!-- faire css pour image pour enlever les br -->
        <br>
        <br>

    
            <button class="space" id="border2">
                <!-- <RouterLink to="/home#retourtop"> -->
                <RouterLink to="/welcome">
                    <span class="material-icons">
                        home
                    </span>Accueil
                </RouterLink>
                <RouterLink to="/concept"><span class="material-icons">
                        emoji_objects
                    </span>Concept</RouterLink>
                <RouterLink to="/cats"><span class="material-icons">
                        pets
                    </span>Les chats</RouterLink>
                <RouterLink to="/rules"><span class="material-icons">
                        article
                    </span>La charte</RouterLink>
                <RouterLink to="/booking"><span class="material-icons">
                        edit_calendar
                    </span>Réservation</RouterLink>
                <RouterLink to="/logout">Déconnexion</RouterLink>

            </button>
     
    </section>

</template>

<style>
    @import '../assets/home.css';

    h5 {
        font-size: 50px;
    }

    #tab-es6 {
        background: #C7BCE4;
        background: -webkit-linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
        background: -moz-linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
        background: -o-linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
        background: linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
        border-style: solid;
        border-width: 70px;
    }

    #tab-flexbox {
        background-color: white;
    }

    i {
        align-items: center;
    }

   

    span {
        vertical-align: top;
        font-size: 25px !important;
    }

    #border2 {

        display: flex;
        justify-content: space-between;
        font-size: 22px !important;
        letter-spacing: 0.1rem;
        
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

    p {
        font-size: 55px;
        letter-spacing: 0.2rem;
    }

    .slide {
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 100vh;
        position: relative;
        background: rgb(0, 0, 0);
        text-align: center;
        padding: 0 2em;
        display: grid;
    }



</style>
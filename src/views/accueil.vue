<script setup lang="ts">


</script>

<template>
    <section class="et-hero-tabs">
        <nav class="navbar navbar nav justify-content-end">
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                
                  <form class="d-flex input-group w-auto">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                  </form>
                </div>
              </nav>
            <section>
                <a class="btn btn" role="button1"></a>
                <RouterLink to="/inscription">Inscription</RouterLink>
            </section>
            <section>
                <a class="btn btn" role="button1"></a>
                <RouterLink to="/connexion">Connexion</RouterLink>
            </section>
        </nav>
       
        <img classe="size" src="../assets/pink-gradient-designify-2.png" alt="logo">


        <span class="material-icons">&#xE87C;</span>
        <span class="material-icons">
            password
            </span>
          <img src="../assets/3792014-cat-halloween-kitty-witch_109006.png" alt="cat">

        <h1>Hac ex c al aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis
            erubesceret patris.</h1>





        <div class="et-hero-tabs-container">
            <a class="et-hero-tab" href="#tab-es6">Accueil</a>
            <a class="et-hero-tab" href="#tab-flexbox">Les chats</a>
            <a class="et-hero-tab" href="#tab-react">La charte</a>
            <a class="et-hero-tab" href="#tab-angular">Reservation</a>
            <!-- <a class="et-hero-tab" href="#tab-other">Inscription</a>
       <a class="et-hero-tab" href="#tab-con">Connexion</a> -->
            <span class="et-hero-tab-slider"></span>
        </div>
    </section>
    <br>
    <!-- Main -->
    <main class="et-main">
        <section class="et-slide" id="tab-es6">
            <h1>Accueil</h1>
            <h3>something about es6</h3>
            <RouterLink to="/accueil">Accueil</RouterLink>
        </section>
        <br>
        <section class="et-slide" id="tab-flexbox">
            <h1> Les chats </h1>
            <h3>something about Les chats</h3>
            <RouterLink to="/cats">Les Cats</RouterLink>
        </section>
        <br>
        <section class="et-slide" id="tab-react">
            <h1>La Charte</h1>
            <h3>something about react</h3>
            <RouterLink to="/charte">La Charte</RouterLink>
        </section>
        <br>
        <section class="et-slide" id="tab-angular">
            <h1>Reservation</h1>
            <h3>something about angular</h3>
            <RouterLink to="/reservation">Reservation</RouterLink>
        </section>
        <br>
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
    body {
        font-family: "Century Gothic", 'Lato', sans-serif;
    }

    a {
        text-decoration: none;
    }

    .et-hero-tabs,
    .et-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 97vh;
        position: relative;
        background: #eee;
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
        background: #66B1F1;
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



    .size {
        width: 500px;
    }

    @media (max-width: 480px) {
        img {
            width: 100%;
        }
    }
</style>
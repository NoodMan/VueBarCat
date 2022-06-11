<script setup lang="ts">
import connexion from "./connexion.vue"
</script>

<template>
    <br>
    <center>
        <br>
        <h1> Création d'un compte </h1>
        <br>
    </center>
    <br>

    <br>


    <p>Renseigner les champs suivants...</p>

    <br>
    <br>
    <form class="row g-1 needs-validation" novalidate>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="floatingInput" placeholder="nom">
            <label for="floatingInput">Nom</label>
        </div>

        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="floatingPrenom" placeholder="Prénom">
            <label for="floatingPrenom">Prénom</label>
        </div>

        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="floatingInput" placeholder="adresse">
            <label for="floatingInput">Adresse</label>
        </div>

        <div class="form-floating col-auto">
            <input type="text" class="form-control" id="floatingInput" placeholder="cp">
            <label for="floatingInput">Code Postal</label>
        </div>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-floating col-auto">
            <input type="text" class="form-control" id="floatingInput" placeholder="Ville">
            <label for="floatingInput">Ville</label>
        </div>
        <br>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="floatingInput" placeholder="mail">
            <label for="floatingInput">Adresse mail</label>
        </div>

        <div class="form-floating col-auto">
            <input type="text" class="form-control" id="floatingInput" placeholder="Tél">
            <label for="floatingInput">Tél</label>
        </div>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div class="form-floating col-auto mb-2">
            <input type="text" class="form-control" id="floatingInput" placeholder="Mobile">
            <label for="floatingInput">Mobile</label>
        </div>

        <div class="form-floating col-lg-3">
            <input min="1" max="31" type="number" class="form-control" id="floatingInput" placeholder="Tél">
            <label for="floatingInput">jour</label>
        </div>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div class="form-floating col-lg-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Mobile">
            <label for="floatingInput">mois</label>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div class="form-floating col-lg-3 mb-2">
            <input min="1950" max="2022" type="number" class="form-control" id="floatingInput" placeholder="jour">
            <label for="floatingInput">Année </label>
        </div>

        <div class="form-floating mb-2">
            <input type="password" class="form-control" id="floatingInput" placeholder="mail">
            <label for="floatingInput">Mot de passe</label>
        </div>
        <div class="form-floating mb-2">
            <input type="password" class="form-control" id="floatingInput" placeholder="mail">
            <label for="floatingInput">Confirmer mot de passe</label>
        </div>

        <br>
        Possedez-vous un ou des chats?

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Non
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
            Oui
          </label>
        </div>
      <br>
    
  
        <br>
        <center>
            <div class="col-12">
                <button class="btn btn-danger" type="submit">Inscription</button>
            </div>
        </center>
    </form>



</template>
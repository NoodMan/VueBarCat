<script setup lang="ts">

</script>

<template>
    <br>
    <center>
        <br>
        <h1> Espace reservation pour un moment de bonheur </h1>
        <br>
    </center>
    <br>

    <br>


    <p>Renseigner les champs suivants...</p>

    <br>
    <!-- il faut que le nom et le prenom sorte de la base de donnée  -->
    <form class="row g-1 needs-validation" novalidate>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="floatingInput" placeholder="nom">
            <label for="floatingInput">Nom</label>
        </div>

        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="floatingPrenom" placeholder="Prénom">
            <label for="floatingPrenom">Prénom</label>
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
        <br>
<center>
<p>DATE et HEURE DE LA RESERVATION</p>
</center>
        <div class="form-floating col-lg-3">
            <input type="number" class="form-control" id="floatingInput" placeholder="Tél">
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

        
        <div class="form-floating col-auto">
        <input min="1" max="24" type="number" class="form-control" id="floatingInput" placeholder="Tél">
        <label for="floatingInput">Heure</label>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp

    <div class="form-floating col-auto mb-2">
        <input min="1" max="60" type="number" class="form-control" id="floatingInput" placeholder="Mobile">
        <label for="floatingInput">Minute</label>
    </div>
        <div class="form-floating mb-2">
            <input min="1" max="10" type="number" class="form-control" id="floatingInput" placeholder="mail">
            <label for="floatingInput">Nombre de personnes</label>
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
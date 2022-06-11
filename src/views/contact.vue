<template>


    <h1> Formulaire de contact </h1>
    <br>
    <p>SVP n'abandonner pas vos chats contacter nous pour trouver un arrangement </p>



    <p>Renseigner les champs suivants...</p>

    <br>
    <br>
    <form class="row g-1 needs-validation" novalidate>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="floatingInput" placeholder="nom">
            <label for="floatingInput">Nom</label>
        </div>

        <div class="form-floating mb-2">
            <input type="text" class="form-control" @onkeyup.enter="" id="floatingPrenom" placeholder="Prénom">
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
        <center>
            <div class="col-12">
                <button class="btn btn-danger" type="submit">Envoyer</button>
            </div>
        </center>
    </form>

</template>
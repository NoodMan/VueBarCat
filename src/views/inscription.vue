<script setup lang="ts">
</script>

<template>
  <div id="retourtop1"></div>
  <div class="d-flex justify-content-center p-5">
    <!-- il faut que le nom et le prenom sorte de la base de donnée  -->
    <form id="border" class="p-5" novalidate>
      <div class="d-flex flex-column align-items-center align">
        <h1>INSCRIPTION</h1>

        <div class="row">
          <div class="col">
            <div class="form-floating mb-2">
              <input
                type="text"
                class="form-control fill-input"
                id="floatingInput"
                placeholder="nom"
              />
              <label for="floatingInput">Nom</label>
            </div>
          </div>

          <div class="col">
            <div class="form-floating mb-2">
              <input
                type="text"
                class="form-control fill-input"
                id="floatingPrenom"
                placeholder="Prénom"
              />
              <label for="floatingPrenom">Prénom</label>
            </div>
          </div>
        </div>

        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control fill-input1"
            id="floatingInput"
            placeholder="adresse"
          />
          <label for="floatingInput">Adresse</label>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-floating col-auto">
              <input
                type="text"
                class="form-control fill-input"
                id="floatingInput"
                placeholder="cp"
              />
              <label for="floatingInput">Code Postal</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating col-auto">
              <input
                type="text"
                class="form-control fill-input"
                id="floatingInput"
                placeholder="Ville"
              />
              <label for="floatingInput">Ville</label>
            </div>
          </div>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control fill-input1"
            id="floatingInput"
            placeholder="mail"
          />
          <label for="floatingInput">Adresse mail</label>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-floating col-auto">
              <input
                type="text"
                class="form-control fill-input"
                id="floatingInput"
                placeholder="Tél"
              />
              <label for="floatingInput">Tél</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating col-auto mb-2">
              <input
                type="text"
                class="form-control fill-input"
                id="floatingInput"
                placeholder="Mobile"
              />
              <label for="floatingInput">Mobile</label>
            </div>
          </div>
        </div>
        <div class="d-flex mx-5 gap-1">
          <input
            min="1"
            max="31"
            type="number"
            class="form-control"
            placeholder="jour de naissance"
          />

          <input type="text" class="form-control" placeholder="Mois" />

          <input
            min="2022"
            max="2023"
            type="number"
            class="form-control"
            placeholder="Année"
          />
        </div>

        <div class="form-floating mb-2">
          <input
            type="password"
            class="form-control fill-input1"
            id="floatingInput"
            placeholder="mail"
          />
          <label for="floatingInput">Mot de passe</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="password"
            class="form-control fill-input1"
            id="floatingInput"
            placeholder="mail"
          />
          <label for="floatingInput">Confirmer mot de passe</label>
        </div>

        Possedez-vous un ou des chats?

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault"> Non </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked"> Oui </label>
        </div>

        <div>
          <button class="btn btn-danger" type="submit">Inscription</button>
        </div>
        <div>
          <i
            ><RouterLink to="/connection#retourtop2"
              >Déjà un compte ?
            </RouterLink></i
          >
        </div>
      </div>
    </form>
  </div>
</template>

<style >
body {
  background-color: black;
}

#border {
  border-width: 1px 2px 3px 2px;
  border-style: solid;
  border-color: black;
  padding: 0 10px;
}

form {
  display: flex;
  background: #c7bce4;
  background: -webkit-linear-gradient(39deg, #c7bce4, #f9cad4, #e9a4c3 94%);
  background: -moz-linear-gradient(39deg, #c7bce4, #f9cad4, #e9a4c3 94%);
  background: -o-linear-gradient(39deg, #c7bce4, #f9cad4, #e9a4c3 94%);
  background: linear-gradient(39deg, #c7bce4, #f9cad4, #e9a4c3 94%);
}

/* .align {
        padding: 50px;
        width: 900px;
    } */

input {
  margin-top: 10px;
}

h3 {
  margin-top: 15px;
}

.fill-input {
  min-width: 10rem;
}

.fill-input1 {
  min-width: 25rem;
}

.fill-input2 {
  min-width: 15rem;
}
</style>
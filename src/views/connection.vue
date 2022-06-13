<script setup lang="ts">
</script>

<template>
 <div id="retourtop2"></div>
  <div class="d-flex justify-content-center p-5">
    <!-- il faut que le nom et le prenom sorte de la base de donnée  -->
    <form id="border" class="p-5" novalidate>
      <div class="d-flex flex-column align-items-center align">
        <h1>CONNEXION</h1>
        <form class="row g-1 needs-validation" novalidate>
          <div class="form-floating mb-2">
            <input
              type="text"
              class="form-control fill-input2"
              id="floatingInput"
              placeholder="mail"
            />
            <label for="floatingInput">Adresse mail</label>
          </div>

          <div class="form-floating mb-2">
            <input
              type="password"
              class="form-control fill-input2"
              id="floatingInput"
              placeholder="mail"
            />
            <label for="floatingInput">Mot de passe</label>
          </div>
<div class="">
          <div class="col p-3">
            <i><a href="#!">Mot de passe oublier?</a></i>
<i><RouterLink to="/inscription#retourtop1">Pas encore inscrit?</RouterLink></i>
            
          </div>
</div>

          <div class="p-3">
            <button class="btn btn-danger" type="submit">Connexion</button>
          </div>
        </form>
      </div>
    </form>
  </div>
</template>

<style>
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

.col {
  font-size: 12px;
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
  min-width: 2rem;
}

.fill-input2 {
  min-width: 20rem;
}
</style>
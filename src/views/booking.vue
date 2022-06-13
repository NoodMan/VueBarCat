<template>
  <div class="d-flex justify-content-center p-5">
    <!-- il faut que le nom et le prenom sorte de la base de donnée  -->
    <form id="border" class="p-5" novalidate>
      <div class="d-flex flex-column align-items-center align">
        <h1>RESERVATION</h1>
<div class="row">
<div class="col">
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control fill-input1"
            id="floatingInput4"
            placeholder="nom"
          />
          <label for="floatingInput4">Nom</label>
        </div>
</div>
<div class="col">
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control fill-input1"
            id="floatingInput5"
            placeholder="Prénom"
          />
          <label for="floatingInput5">Prénom</label>
        </div>
        </div>
</div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control fill-input"
            id="floatingInput6"
            placeholder="mail"
          />
          <label for="floatingInput6">Adresse mail</label>
        </div>
<div class="row">
    <div class="col">
        <div class="form-floating col-auto">
          <input
            type="text"
            class="form-control fill-input1"
            id="floatingInput7"
            placeholder="Tél"
          />
          <label for="floatingInput7">Tél</label>
        </div>
</div>
<div class="col">
        <div class="form-floating col-auto">
          <input
            type="text"
            class="form-control fill-input1"
            id="floatingInput8"
            placeholder="Mobile"
          />
          <label for="floatingInput8">Mobile</label>
        </div>
</div>
</div>
        <h3>DATE DE LA RESERVATION</h3>

        <div class="d-flex mx-5 gap-1">
          <input
            min="1"
            max="31"
            type="number"
            class="form-control"
            placeholder="jour"
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

        <h3>HEURE DE LA RESERVATION</h3>

        <div class="d-flex gap-5">
          <div>
            <input
              min="1"
              max="24"
              type="number"
              class="form-control fill-input3"
              placeholder="Heure"
            />
          </div>
          <div>
            <input
              min="1"
              max="60"
              type="number"
              class="form-control fill-input3"
              placeholder="Minute"
            />
          </div>
        </div>
        <div>
          <input
            min="1"
            max="10"
            type="number"
            class="form-control fill-input2"
            placeholder="Nombre de personnes"
          />
        </div>

        <div class="mt-2">
          <button class="btn btn-danger" type="submit">Inscription</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
</script>

<style>
body {
  background-color: black;
}

#border {
  border-width: 1px 2px 3px 2px;
  border-style: solid;
  border-color: black;
  padding: 0 10px;
  border-radius: 10px;
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
  min-width: 41rem;
}

.fill-input1 {
  min-width: 20rem;
}

.fill-input2 {
  min-width: 15rem;
}
.fill-input3 {
    min-width: 10rem;
}
</style>
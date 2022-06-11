<script setup lang="ts">

</script>

<template>
    <br>
    <center>
        <br>
        <h1> Connexion</h1>
        <br>
    </center>
    <br>

    <br>


    <p>Renseigner les champs suivants pour vous connectez ...</p>

    <br>
    <br>
    <form class="row g-1 needs-validation" novalidate>
   
        <br>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" id="floatingInput" placeholder="mail">
            <label for="floatingInput">Adresse mail</label>
        </div>

   

        <div class="form-floating mb-2">
            <input type="password" class="form-control" id="floatingInput" placeholder="mail">
            <label for="floatingInput">Mot de passe</label>
        </div>

      <!-- <center>

    <div class="col">
      <a href="#!">Mot de passe oublier?</a>
    </div>
</center> -->
  
       <br>
        <br>
        <center>
            <div class="col-12">
                <button class="btn btn-danger" type="submit">Connexion</button>
            </div>
        </center>
    </form>



</template>
<template>
 <div class="d-flex justify-content-center p-5">
        <!-- il faut que le nom et le prenom sorte de la base de donnée  -->
        <form id="border" class="p-5" novalidate>
            <div class="d-flex flex-column align-items-center align">
                    <h1>CONTACT</h1>
    <form class="row g-1 needs-validation" novalidate>
   
      
        <div class="form-floating mb-2">
            <input type="text" class="form-control fill-input" id="floatingInput" placeholder="Nom">
            <label for="floatingInput">Nom</label>
        </div>

    <div class="form-floating mb-2">
            <input type="text" class="form-control fill-input" id="floatingInput" placeholder="Prénom">
            <label for="floatingInput">Prénom</label>
        </div>

        <div class="form-floating mb-2">
            <input type="text" class="form-control fill-input" id="floatingInput" placeholder="mail">
            <label for="floatingInput">Email</label>
        </div>

        <div class="form-floating mb-2">
            <input type="password" class="form-control fill-input" id="floatingInput" placeholder="Objet">
            <label for="floatingInput">Objet : </label>
        </div>

<div class="form-floating mb-2">
            <textarea type="password" class="form-control fill-input" id="floatingInput" placeholder="Sujet"></textarea>
            <label for="floatingInput">Message : </label>
           
        </div>


    
  
      
  
            <div >
                <button class="btn btn-danger" type="submit">Envoyer message</button>
            </div>
       
    </form>
</div>
</form>
</div>



</template>

<style> body {
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
    background: #C7BCE4;
    background: -webkit-linear-gradient(39deg, #C7BCE4, #F9CAD4, #E9A4C3 94%);
    background: -moz-linear-gradient(39deg, #C7BCE4, #F9CAD4, #E9A4C3 94%);
    background: -o-linear-gradient(39deg, #C7BCE4, #F9CAD4, #E9A4C3 94%);
    background: linear-gradient(39deg, #C7BCE4, #F9CAD4, #E9A4C3 94%);


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
    min-width: 20rem;
}

.fill-input1 {
    min-width: 2rem;
}

.fill-input2 {
    min-width: 15rem;
}</style>
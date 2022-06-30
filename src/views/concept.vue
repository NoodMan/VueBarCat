<template>
<div class="modal"></div>

	<h3 class="">Facts about Cats!</h3>

	<div class="wrapper">
		<div class="avatar"><span class="material-icons size">
            pets
        </span></div>

		<div class="container-main">

			
<p>LE CONCEPT DU "BLACK CAT COFFEE"
    Black Cat Coffee est bar peuplé d’une quinzaine de chats d’origines diverses en totale liberté. Tout en savourant boissons, collations sucrées ou salées, vous pourrez laisser se nouer la relation avec les maîtres des lieux. La particularité de ce « bar à chat » c'est que vous étes chez les chats.
    
        UN UNIVERS ADAPTE
        
        Ce « bar à chat » a été pensé avant tout pour leur bien-être ! Tout commence par le choix des pensionnaires. Ils ont été sélectionnés pour leur comportement docile ou joueur et leur capacité à vivre en communauté. L’environnement a été adapté pour qu’ils puissent se dépenser en s’amusant enfin, un circuit d’air spécifique garantit une température idéale tout en évitant odeurs et moiteur. L’hygiène est également un point sur lequel le CMC ne transige pas ! Il y a une séparation absolue entre les chats et la zone de confections des commandes et du gel hydroalcoolique est à disposition à l’entrée et à la sortie.
        
       </p>
		</div>

		<div class="container-main bg-blue">
			<div class="row">
				<h5>New fact!</h5>
				<div class="circle"><span class="material-icons inline-icon">
                    pets
                </span></div>
			</div>
			<div class="row">
				<div class="share-toggle hidden">
					<a target="_blank" href="" class="fb-xfbml-parse-ignore"><button class="btn-share btn-facebook" href=""><i class="fab fa-facebook-f"></i></button></a>
					<button class="btn-share btn-twitter"><i class="fa fa-twitter"></i></button>
					<button class="btn-share btn-google"><i class="fa fa-google-plus"></i></button>
				</div>
				<h5>Share!</h5>

				<div class="circle">

					<i class="fas fa-share-alt"></i>

				</div>
			</div>
		</div>
        
        <button class="space" id="border2">
            
            <RouterLink to="/home#retourtop">
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
    </div>

	

</template>
<script src=""></script>
<style>
    /* Positioning */
  /* Display & Box Model */
  /* Color */
  /* Text */
  /* Other */


  p{
    font-size: 20px;
    letter-spacing: 0.2rem;
}
  a {
    text-decoration: none;
    color: rgb(0, 0, 0);
    transition: 0.4s;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
}


  #border2 {

display: flex;
justify-content: space-between;
position: static;
font-size: 20px !important;
border: #636463;
letter-spacing: 0.1rem;
text-decoration-color: #000;

}
material-icons {
        vertical-align: top;
        font-size: 25px !important;
    }
.space {
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 70px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        background: #636463;
        z-index: 10;

    }
 .size{
    font-size: 7rem;
    animation: pulsate 1.5s linear infinite;
  }
/* base style + reset */
* {
  box-sizing: border-box;
  /* padding: 0;
  margin: 0px; */
  text-align: center;
}

html {
  height: 100vh; /* set viewport constraint */
  min-height: 100%; /* enforce height */
  font-size: 62.5%;
  background-color: black;
}

body {

  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: ;
  font-size: 2rem; 
  background-color: rgba(0, 0, 0, 0.07);
}


/* Layout: wrapper, conatiners */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 90rem;
  margin: 0 auto;
  
  border-top: 6px solid #e5a8de;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 6px 0  rgba(0, 0, 0, 0.2);
  background: #C7BCE4;
    background: -webkit-linear-gradient(39deg,#acbdf5, #E9A4C3, #F9CAD4 94%);
    background: -moz-linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
    background: -o-linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
    background: linear-gradient(39deg, #acbdf5, #E9A4C3, #F9CAD4 94%);
   
}

.container-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 3rem;
}

.bg-blue {
  /* background: rgba(0, 172, 230, 0.3) */
}

.wrapper div.container-main:last-child {
  padding-bottom: 2em;
}

.avatar {
  position: relative;
  z-index: 5;
  border-radius: 50%;
  transform: translate(0, -50%);
  margin-bottom: -3em;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 6em;
  height: 6em;
  background: #FEFEFE;
  border-radius: 50%;
  
  border: 0.5em solid rgba(0, 0, 0, 0.03);
  
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
}



/* Elements */
h3 {
  margin: 1em 0 3em 0;
}

h5 {
  margin-bottom: 1rem;
}

span {
  font-family: 'Quattrocento Sans', sans-serif;
  font-size: 1.6rem;
  text-align: justify;
  animation: fadein 0.5s;
}

.fa-share-alt, .fa-sync-alt {
  font-size: 3rem;
  transition: all 0.3s;
  padding: 1.3rem;
}

.fa-sync-alt:hover {
  cursor: pointer;
  color: #00ace6;
  transform: rotate(180deg);
}

.fa-share-alt:hover {
  cursor: pointer;
  color: #00ace6;
}


.fa-paw {
  cursor: default;
  font-size: 5.5rem;
  
  animation: pulsate 1.5s linear infinite;
}

@keyframes pulsate {
    0% {transform: scale(1.1, 1.1); }
    50% {transform: scale(1.2, 1.2);}
    100% {transform: scale(1.1, 1.1); }
}

.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 50%;
  border: 0.7rem solid rgba(0, 0, 0, 0.03);
  transition: all 0.3s;
}

.circle:hover {
  transform: scale(1.1);
}

/* loading spinner */
.lds-dual-ring {
  width: 3.2rem;
  height: 3.2rem;
}

.lds-dual-ring:after {
  display: block;
  width: 3.2rem;
  height: 3.2rem;
  border: .5rem solid #ccc;
  border-radius: 50%;
  border-color: #ddd transparent #ddd transparent;
  content: " ";
  animation: lds-dual-ring 0.7s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* fade in/out animations */
@keyframes fadein {
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
}

/* Share TOGGLING */

.share-toggle {
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 8.5em;
  margin-left: 3.3em;
  animation: fadein 0.5s;
}

/* Share social buttons */

.btn-share {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 0.3em rgba(0, 0, 0, 0.1);
  color: #fff;
  transition: background 0.5s;
}

.btn-share:hover {
  background: rgba(255, 255, 255, 0.3);;
}



.btn-facebook {
  background: #43609C;
}

.btn-twitter {
  background: #00aced;
}

.btn-google {
  background: #d34836;
}

/* modal */

.modal {
  position: fixed;
  z-index: 98;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden; 
}


.show-modal {
  opacity: 1;
  visibility: visible;
  animation: fadein 0.5s;
}

/* class to hide elemets */
.hidden {
  display: none;
}


</style>

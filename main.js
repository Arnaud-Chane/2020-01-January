/*   Index

    let fonction
    variable
    commentaire
    opérateur (surtout égale)
    if and else
    fonction






*/



let myVariable ;

myVariable = "Bob";

let myName = "Arnaud";

// Ceci est un commentaire

/*Ceci aussi
est un commentaire.*/


let myNumber = 10 ;
myNumber === 9;
// ends false with === 


let iceCream = "Chocolate";
if (iceCream === "Chocolate") {
    alert("J'adore le chocolat !");
} else {
    alert("Ooooh, mais j'aurais préféré au chocolat !");
}



fonction multiply (num1, num2) {
    let result = num1 * num2;
    return result;
}


// Fonction: créer un nouveau paragraphe et l'ajouter en bas du HTML

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

/*
  1. Regrouper les coordonnées de tous les boutons de la page et les organiser en tableau
  2. Faire une boucle dans ce tableau et ajouter un "click event listener" à chaque bouton

  Quand le bouton est cliqué, la fonction "createParagraph()" sera exécutée
*/

let buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}


<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>

<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>



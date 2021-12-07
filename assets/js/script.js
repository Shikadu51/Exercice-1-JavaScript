let agesaisi;
let genresaisi;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function verifierlimposition(){
    // récupérer la valeur de l'age et du genre avec la fonction .value.

    agesaisi = document.getElementById("age-saisi").value;
    genresaisi = document.getElementById("genre-saisi").value;

    // Notre condition Si age >=21 et Homme alors imposable , ou si femme >=18  et <=35 alors imposable.

    if(genresaisi == "H" && agesaisi >= 21){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable.</div>';
    }
    else if((genresaisi == "F" && agesaisi >=18) && (genresaisi == "F" && agesaisi <= 35)){
    message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable.</div>';   
    }
    else{
    message.innerHTML = '<div class="alert alert-success" role="alert">Vous êtes non imposable.</div>';  
    }
}

    // Ajout d'un écouteur d'événement sur le bouton qui quand on clique appelera la fonction pour vérifier l'imposition ();
    bouton.addEventListener('click', verifierlimposition, false)
//PRODUIT

//SCRIPT E-COMMERCE
const produit

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id')

//appel api avec id
fetch(`http://localhost:3000/api/furniture/${id}`)
.then( data => data.json() )
.catch( (error) => {
    console.log(error);
    document.querySelector(".div__disponible").innerHTML += `<div class="text-center ">
                                                                <h3> <img src="../images/Dino.png" alt="Image dino" height="50px">  Site indisponible </h3>
                                                            </div>
                                                            `;
})

.then( produit => {
  //ajout produit sur page
  const button = document.getElementById('addcart')

  button.addEventListener('click', (e) => {
    e.preventDefault()
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const finded = cart.find(e => e.id === produit.id )
    if (finded) {
      finded.quantity += 1
    }
    else 
      produit.quantity += 1
      cacart.push(produit)
  
    localStorage.setItem('cart', JSON.stringify(cart))
  })
})

//panier
/*
const cart = JSON.parse(localStorage.getItem('cart')) || []
foreach(const product of cart) {
  document.getElementById('cart').innerHTML += ''
}*/



// CHAMPS INVALIDES DANS FORMULAIRE
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
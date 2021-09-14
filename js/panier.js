//PRODUIT

//SCRIPT E-COMMERCE
  
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  for( produit of cart){
    
    document.querySelector(".div__produit").innerHTML +=
      `<div class="card article product">
        <img src="${produit.imageUrl}" class="card-img-top img-product">
        <div class="card-body cart ">
          <h5 class="card-title ">${produit.name}</h5>
          <p class="card-text">${produit.price/100 + ',00 €'}</p>
          <a href="#" class="btn btn-primary addcart ">Button</a>
        </div>
      </div>
      `;
  }







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
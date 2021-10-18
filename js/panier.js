//PRODUIT


//SCRIPT E-COMMERCE
const cart = JSON.parse(localStorage.getItem('cart')) || []
const productsId = []
let total = 0;
if ( cart.length == 0 ){
  document.querySelector(".div__produit").innerHTML +=
    `<div class="card article product">
      <div class="card-body cart ">
        <p class="card-text">Le panier est vide</p>
      </div>
    </div>`;
}
else {
  for( let produit of cart){
    productsId.push(produit._id)
    total += (produit.quantity*produit.price)/100
      document.querySelector(".div__produit").innerHTML +=
      `<div class="card article product ">
        <img src="${produit.imageUrl}" class="card-img-top img-product">
        <div class="card-body cart ">
          <h5 class="card-title ">${produit.name}</h5>
          <p class="card-text">Prix (unité) : ${produit.price/100 + ',00 €'}</p>
          <p class="card-text">Quantité : ${produit.quantity}</p>
          <p class="card-text">Total : ${(produit.quantity*produit.price)/100 + ',00 €'}</p>
        </div>
        <button  onclick="remove_product('${produit._id}');" class="btn btn-outline-primary" >Supprimer</button>
      </div>`;
  }
  document.querySelector(".div__total").innerHTML += 
  `<div class="card article product">
      <div class="card-body cart ">
        <p class="card-text">Total panier : ${total + ',00 €'} </p>
      </div>
    </div>`;
  localStorage.setItem('total',total);
}

let productKey = localStorage.key['']
  function remove_product(productKey) {
      //localStorage.clear()
      cart.splice(cart.findIndex(item => item._id == productKey ), 1)
      localStorage.setItem('cart',JSON.stringify(cart))
      window.location.reload();
  };





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

          else {
            event.preventDefault();
            form.classList.add('was-validated')
            if (form.classList.contains('was-validated') === true ){ 

              fetch('http://localhost:3000/api/furniture/order', {
                method: 'POST',
                body: JSON.stringify({
                  products: productsId,

                  contact: {
                    firstName: document.getElementById('inputFName').value,
                    lastName:document.getElementById('inputLName').value,
                    address:document.getElementById('inputAddress').value,
                    city:document.getElementById('inputCity').value,
                    email:document.getElementById('inputEmail').value,
                  }
                })
              })
              .then(rep => rep.json())
              .then(data => {
                
                let stringData = JSON.stringify(data)
                localStorage.setItem( 'rep',stringData)
                //localStorage.removeItem('cart')
                window.location.href = '../pages/confirmation.html'
                
              })
              .catch((error) => {
                console.error('Error : ',error)
              })
            }
          }
          
        }, false);
      });
    }, false);
  })();


  
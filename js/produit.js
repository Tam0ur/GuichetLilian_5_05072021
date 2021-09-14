//PANIER


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

.then ( produit => {
    
  document.querySelector(".div__produit").innerHTML +=
  `<div class="card article ">
      <img src="${produit.imageUrl}" class="card-img-top">
      <div class="card-body">
          <h5 class="card-title ">${produit.name}</h5>
          <p class="card-text">${produit.price/100 + ',00 €'}</p>
      </div>
  </div>
  <div class="py-2">
      <button class="addcart btn btn-outline-primary" role="button" >Ajouter au panier</button>
  </div>`;

  for ( let varnish of produit.varnish ){
     document.querySelector(".select").innerHTML += 
     `<option value="${varnish}">${varnish}</option>`;
   }; 

  //ajout produit sur page
  const button = document.getElementById('addcart')

  button.addEventListener('click', (e) => {
    e.preventDefault()
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const finded = cart.find(e => e.id === produit.id )
    if (finded) {
      finded.quantity += 1
    }
    else {
      produit.quantity += 1
      cart.push(produit)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    document.getElementById('cart').innerHTML += ''
  })
})
.catch( (error) => {
    console.log(error)
})

//jsonbasket -> produit
//a -> button class addcart

  

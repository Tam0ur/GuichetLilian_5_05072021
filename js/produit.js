//PANIER

//reception paramètres + id du produit
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id')

//appel api avec id
fetch(`http://localhost:3000/api/furniture/${id}`)
//conversion en format json
.then( data => data.json() )
//gestion en cas d'erreur de l'appel
.catch( (error) => {
    console.log(error);
    document.querySelector(".div__disponible").innerHTML += `<div class="text-center ">
                                                                <h3> <img src="../images/Dino.png" alt="Image dino" height="50px">  Site indisponible </h3>
                                                            </div>
                                                            `;
})
//affichage du produit 
.then ( produit => {
  document.querySelector(".div__produit").innerHTML +=
  `<div class="card article ">
      <img src="${produit.imageUrl}" class="card-img-top">
      <div id="cart" class="card-body">
          <h5 class="card-title ">${produit.name}</h5>
          <p class="card-text">${produit.price/100 + ',00 €'}</p>
      </div>
  </div>
  `;
  //affichage de tous les vernis dispobibles
  for ( let varnish of produit.varnish ){
    document.querySelector(".select").innerHTML += 
    `<option value="${varnish}">${varnish}</option>`;
  }; 

  

  //ajout produit sur panier
  const button = document.getElementById('addcart')

  button.addEventListener('click', (e) => {
    e.preventDefault()
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const finded = cart.find(e => e._id === produit._id )
    
    if (finded) {
      finded.quantity += 1
    }
    else {
      produit.quantity = 1
      cart.push(produit)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    document.getElementById('cart').innerHTML += ''
  })
})
.catch( (error) => {
    console.log(error)
})


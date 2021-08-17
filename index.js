//INDEX

//appel de l'API
fetch("http://localhost:3000/api/furniture")
//conversion en format json
.then(data => data.json())
.catch((error) => {
    console.log(error);
    // cas d'erreur, site non disponible
    document.querySelector(".div__disponible").innerHTML += `<div class="text-center ">
                                                                <h3> <img src="./images/Dino.png" alt="Image dino" height="50px">  Site indisponible </h3>
                                                            </div>
                                                            `;
})

.then( jsonListFurniture => {
    for ( let jsonFurniture of  jsonListFurniture ){
        document.querySelector(".div__produit").innerHTML += 
        `<div class="product col-12 col-md-6 col-lg-4 col-xl-3 py-2">
            <div class="card article">
                <img src="${jsonFurniture.imageUrl}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title ">${jsonFurniture.name}</h5>
                    <p class="card-text">${jsonFurniture.price/100 + ',00 €'}</p>
                    <a href="./pages/panier.html?id=${jsonFurniture._id}" >Ajouter au panier</a>
                </div>
            </div>
        </div>`;
    };
})
.catch((error) => {
    console.log(error)
})
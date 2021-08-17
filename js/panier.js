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

.then ( jsonBasket => {
    document.querySelector(".div__panier").innerHTML +=
    `<div class="card article ">
        <img src="${jsonBasket.imageUrl}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title ">${jsonBasket.name}</h5>
            <p class="card-text">${jsonBasket.price/100 + ',00 €'}</p>
        </div>
    </div>
    `;
})
.catch( (error) => {
    console.log(error)
})
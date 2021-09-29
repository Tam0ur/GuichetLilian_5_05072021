//COMMANDE

let data = JSON.parse(localStorage.rep)

for ( produit of data.produit ){
    document.querySelector(".total").innerHTML +=
    `<p>Total de votre commande : ${(produit.quantity*produit.price)/100 + ',00 €'}</p>`
}

document.querySelector(".orderId").innerHTML +=
`<p>Identifiant : ${data.orderId}</p>`;
//COMMANDE

//reception des données envoyées 
let data = JSON.parse(localStorage.getItem('rep'))
let total = JSON.parse(localStorage.getItem('total'))


//affichage des données
document.querySelector(".total").innerHTML +=
`<p>Total de votre commande : ${total + ',00 €'}</p>`;
document.querySelector(".orderId").innerHTML +=
`<p>ID : ${data.orderId}</p>`;




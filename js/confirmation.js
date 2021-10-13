//COMMANDE

let data = JSON.parse(localStorage.getItem('rep'))
let total = JSON.parse(localStorage.getItem('total'))



document.querySelector(".total").innerHTML +=
`<p>Test : ${total + ',00 €'}</p>`;
document.querySelector(".orderId").innerHTML +=
`<p>Identifiant : ${data.orderId}</p>`;




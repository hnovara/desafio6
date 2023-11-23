const title = document.getElementById("mainTitle");
console.log(title.innerHTML);

// const title2 = document.querySelector("h1"); // Otro selector
// console.log(title2.innerHTML)


// Ejercicio 3

// Integrante 1
const firstName = document.getElementById('firstName');
const secondName = document.getElementById('secondName');
const firstLastName = document.getElementById('firstLastName');

// Integrante 2
const firstName2 = document.getElementById('firstName2');
const secondName2 = document.getElementById('secondName2');
const firstLastName2 = document.getElementById('firstLastName2');

console.log(`-----\nIntegrante 1: "${firstName.innerHTML} ${secondName.innerHTML} ${firstLastName.innerHTML.toUpperCase()}"\nIntegrante 2: "${firstName2.innerHTML} ${secondName2.innerHTML} ${firstLastName2.innerHTML.toUpperCase()}"\n-----`)
const title = document.getElementById("mainTitle");
console.log(title.innerHTML);


// Ejercicio 3

function createFullName(HTMLList) {
    let fullName = "";
    let contadorCampo = 1;
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === "DD") {
            if (element.innerText) {
                if (fullName) {
                    fullName = fullName.concat(" ")
                }
                if (contadorCampo<=2) {
                    fullName = fullName.concat(`${element.innerText}`);
                }
                else {
                    fullName = fullName.concat(`${element.innerText.toUpperCase()}`);  
                }
            }
            contadorCampo++;
        }   
    }
    return `"${fullName}"`;
}


const divList = document.getElementById("divList").children;


function showList(list) {
     let string = "";
     for (let i = 0; i < list.length; i++) {
         const elementList = list[i];
         if (elementList.tagName === "H2") {
             string = string.concat(`${elementList.innerText}: `)
         }
         if (elementList.tagName === "DL") {
             string = string.concat(
                 createFullName(elementList.children) + "\n"
             )
         }
     }
     return string
 }

 console.log(`-----\n${showList(divList)}-----`)


// Ejercicio 4

// Obtener los elementos de los nombres
const name1 = document.getElementById("firstName").textContent;
const name2 = document.getElementById("secondName").textContent;
const name3 = document.getElementById("firstName2").textContent;
const name4 = document.getElementById("secondName2").textContent;

function compareNames() {
    let n1 = "";
    
    if (name1 === name3) {
        console.log(`Hay coincidencia en el nombre ${name1}`);
        n1 = prompt("Hay coincidencia en el nombre\nIngrese un color para destacar el nombre");
        firstName.style=`color: ${[n1]}`
        firstName2.style=`color: ${[n1]}`
        } else if (name1 === name4) {
        console.log(`Hay coincidencia en el nombre ${name1}`);
        n1 = prompt("Hay coincidencia en el nombre\nIngrese un color para destacar el nombre");
        firstName.style=`color: ${[n1]}`
        secondName2.style=`color: ${[n1]}`
        } else if ((name2 === name3) && (name2)) {
        console.log(`Hay coincidencia en el nombre ${name2}`);
        n1 = prompt("Hay coincidencia en el nombre\nIngrese un color para destacar el nombre");
        secondName.style=`color: ${[n1]}`
        firstName2.style=`color: ${[n1]}`
        } else if ((name2 === name4) && (name2)) {
        console.log(`Hay coincidencia en el nombre ${name2}`);
        n1 = prompt("Hay coincidencia en el nombre\nIngrese un color para destacar el nombre");
        secondName.style=`color: ${[n1]}`
        secondName2.style=`color: ${[n1]}`
        } else {
        console.log("No hay coincidencias en los nombres");
    }
}
compareNames();


// Obtener los elementos de los apellidos
const confirmLastName = confirm('¿Desea comparar los apellidos?');

const lastName1 = document.getElementById("firstLastName").textContent;
const lastName2 = document.getElementById("secondLastName").textContent;
const lastName3 = document.getElementById("firstLastName2").textContent;
const lastName4 = document.getElementById("secondLastName2").textContent;

if (confirmLastName) {
    function compareLastNames() {
        let n2 = "";

        if (lastName1 === lastName3) {
            console.log(`Hay coincidencia en el apellido ${lastName1}`);
            n2 = prompt("Hay coincidencia en el apellido\nIngrese un color para destacar el apellido");
            firstLastName.style=`color: ${[n2]}`
            firstLastName2.style=`color: ${[n2]}`
            } else if (lastName1 === lastName4) {
            console.log(`Hay coincidencia en el apellido ${lastName1}`);
            n2 = prompt("Hay coincidencia en el apellido\nIngrese un color para destacar el apellido");
            firstLastName.style=`color: ${[n2]}`
            secondLastName2.style=`color: ${[n2]}`
            } else if ((lastName2 === lastName3) && (lastName2)) {
            console.log(`Hay coincidencia en el apellido ${lastName2}`);
            n2 = prompt("Hay coincidencia en el apellido\nIngrese un color para destacar el apellido");
            secondLastName.style=`color: ${[n2]}`
            firstLastName2.style=`color: ${[n2]}`
            } else if ((lastName2 === lastName4) && (lastName2)) {
            console.log(`Hay coincidencia en el apellido ${lastName2}`);
            n2 = prompt("Hay coincidencia en el apellido\nIngrese un color para destacar el apellido");
            secondLastName.style=`color: ${[n2]}`
            secondLastName2.style=`color: ${[n2]}`
            } else {
            console.log("No hay coincidencias en los apellidos");
        }
    }
    compareLastNames();
}
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

// Comparar los nombres ---> Evaluar todas las combinaciones posibles

// function compareNames() {
//     if (name1 === name2 || name1 === name3 || name1 === name4 ||
//         name2 === name3 || name2 === name4 ||
//         name3 === name4) {
//         prompt("Hay coincidencia en los nombres.\nIngrese un color para destacar los nombres"); // Almacenar la respuesta en una variable */
//         console.log("Hay coincidencia en los nombres");
//     } else {
//         console.log("No hay coincidencia en los nombres");
//     }
// }

// compareNames();


function compareNames() {
    let match1 = "";
    let match2 = "";
    
    if (name1 === name3 || name1 === name4) {
        const match1 = name1; 
        console.log(`Hay coincidencia en el nombre ${match1}`);
       } else if (name2 === name3 || name2 === name4) {
        const match2 = name2; 
        console.log(`Hay coincidencia en el nombre ${match2}`);
       } else {
        console.log("No hay coincidencias en los nombres");
    }
}
compareNames();


/* --------------------------------- */

/* 
const setColor = (string, color) => `<span style = 'color: '${color};'>${string}</span>`;

//dd
element.innerHTML = "Victoria <span style = 'color: red;'>Sánchez</span>";

setRed('Sánchez', 'red');
 */

/* --------------------------------- */

// Comparar los apellidos

const confirmLastName = confirm('¿Desea comparar los apellidos?');

if (confirmLastName) {
    // Realizar la misma lógica pero con los apellidos;
} else {

}


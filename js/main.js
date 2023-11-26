const title = document.getElementById("mainTitle");
console.log(title.innerHTML);

// const title2 = document.querySelector("h1"); // Otro selector
// console.log(title2.innerHTML)

// function createFullName(HTMLList) {
//     let fullName = "";
//     for (let index = 0; index < HTMLList.length; index++) {
//         const element = HTMLList[index];
//         if (element.tagName === "DD" && element.innerText) {
//             if (fullName) {
//                 fullName = fullName.concat(" ")
//             }
//             fullName = fullName.concat(`${element.innerText}`);
//         }
//     }
//     return `"${fullName}"`;
// }
// Ejercicio 3

function createFullName(HTMLList) {
    let fullName = "";
    let contadorCampo = 1;
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === "DD" && element.innerText) {
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

 console.log(showList(divList))


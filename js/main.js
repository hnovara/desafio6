const title = document.getElementById("mainTitle");
console.log(title.innerHTML);

// Ejercicio 3

// Integrante 1
/* const firstMemberName = document.getElementById('firstMemberName');
const firstMemberSecondName = document.getElementById('firstMemberSecondName'); */
const firstMemberLastName = document.getElementById('firstMemberLastName');
/* const firstMemberSecondLastName = document.getElementById('firstMemberSecondLastName'); */

// Integrante 2
/* const secondMemberName = document.getElementById('secondMemberName');
const secondMemberSecondName = document.getElementById('secondMemberSecondName'); */
const secondMemberLastName = document.getElementById('secondMemberLastName');
/* const secondMemberSecondLastName = document.getElementById('secondMemberSecondLastName'); */


function createFullName(HTMLList) {
    let fullName = ''; // Estado inicial
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === 'DD' && element.innerText) {
            fullName = fullName.concat(`${element === firstMemberLastName ? element.innerText.toUpperCase() : element.innerText} `);
        }
    }
    return fullName.trim();
}

function createFullName(HTMLList) {
    let fullName = ''; // Estado inicial
    for (let index = 0; index < HTMLList.length; index++) {
        const element = HTMLList[index];
        if (element.tagName === 'DD' && element.innerText) {
            fullName = fullName.concat(`${element === secondMemberLastName ? element.innerText.toUpperCase() : element.innerText} `);
        }
    }
    return fullName.trim();
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
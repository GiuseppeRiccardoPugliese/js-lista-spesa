/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/
//Form fix
// const myForm = document.getElementById("my_form");

//selezione UL nel mio index
const listaUl = document.querySelector(".listaspesa");

//due variabili per collegare il btn ed input area
const userItem = document.getElementById('user_item');
const addBtn = document.getElementById('user_add');

// data una lista della spesa (creo il mio array)
const listaSpesa = ["carne", "pomodori", "melanzane", "limoni", "insalata",];
console.log("Lista della spesa definita", listaSpesa);

//scorro all'interno della mia lista della spesa

let i = 0;    //definisco la variabile di contatore

while (i < listaSpesa.length) {
    let itemIesimo = listaSpesa[i];
    console.log(itemIesimo);

    const elementLi = document.createElement("li"); //creo il mio elemento li

    elementLi.append(itemIesimo); //aggiungo al mio li il mio elemento che fa parte della spesa

    listaUl.append(elementLi); //aggiungo il mio li all'interno dell'ul
    i++;    //incremento la mia variabile di contatore 
}

//form fix
// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();

addBtn.addEventListener('click',
    function () {

        let itemSpesa = userItem.value;
        listaSpesa.push(itemSpesa);

        const elementLi = document.createElement('li');
        elementLi.append(itemSpesa);
        listaUl.append(elementLi);
    }
)


// }
// )




//bonus : diamo la possibilita' all'utente di inserire le voci nella lista
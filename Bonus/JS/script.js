/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/

//selezione UL nel mio index
const listaUl = document.querySelector(".listaspesa");

// data una lista della spesa (creo il mio array)
const listaSpesa = ["carne", "pomodori", "melanzane", "limoni", "insalata",];
console.log("Lista della spesa definita", listaSpesa);

//scorro all'interno della mia lista della spesa

let i = 0;    //definisco la variabile di contatore

while (i < listaSpesa.length) {
    let itemIesimo = listaSpesa[i];
    console.log(itemIesimo);

    i++;    //incremento la mia variabile di contatore 

    const elementLi = document.createElement("li"); //creo il mio elemento li

    elementLi.append(itemIesimo); //aggiungo al mio li il mio elemento che fa parte della spesa

    listaUl.append(elementLi); //aggiungo il mio li all'interno dell'ul

}
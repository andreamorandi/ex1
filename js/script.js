// ARRAY DI OGGETTI
// // definiamo un array di oggetti:
// // - ogni elemento dell'array è un oggetto che rappresenta una classe
// // - ogni classe ha le proprietà nome e numeroStudenti
// // - aggiungiamo una nuova classe all'array iniziale
// // - stampiamo nella console tutte le classi dell'array utilizzando dot notation, braket notatio e for in

const classesArray = [
    {
        className: "Classe 1",
        studentsNumber: "35"
    },
    {
        className: "Classe 2",
        studentsNumber: "40"
    }
];

const class1 = {
    className: "Classe 3",
    studentsNumber: 24
}

classesArray.push(class1);
console.log(classesArray);

const classesText = document.getElementById("classes");

for (let i = 0; i < classesArray.length; i++) {
    const thisClass = classesArray[i];
    console.log(thisClass);

    // DOT NOTATION
    console.log(thisClass.className);
    console.log(thisClass.studentsNumber);

    // BRACKET NOTATION
    console.log(thisClass["className"]);
    console.log(thisClass["studentsNumber"]);

    // FOR IN CICLE
    for (let key in thisClass) {
        console.log(key, thisClass[key]);
    }

    // STAMPO IN PAGINA
    classesText.innerHTML += `<li>${thisClass.className} - Numero studenti: ${thisClass.studentsNumber}</li>`;
}
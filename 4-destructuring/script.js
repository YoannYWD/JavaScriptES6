//4.1 Decouverte

const [a, b] = [1, 2, 3, 4]  // On associe à la première valeur du tableau et b à la 2ème
console.log(a)                      
console.log(b)

const {first, last} = {first: 'Paul', last: 'Henta', age: 35}  // On associe les attributs first et last d'un objet existant à un nouvel objet
console.log(first)
console.log(last)

const [,,c] = [1, 2, 3, 4] // pour afficher la 3eme valeur, il faut d'abord l'associer. On squizz les 2 premières déjà affectées avec les ,
console.log(c);

const {age} = {first: 'Paul', last: 'Henta', age: 35} //pour afficher l'age, on associe la propriété à la constante objet
console.log(age);




//4.2 Application


/*
Object.values(data).forEach(function(element) {
    var dateDebut = element.dateDebut;
    var dateFin = element.dateFin;
    var texte = element.texte;
    console.log("Du " + dateDebut + " au " + dateFin + texte);
})
*/


Object.values(data).forEach(function(element) { //element correpond à l'ensemble des valeurs
    var {dateDebut, dateFin, texte} = element;
    console.log("Du " + dateDebut + " au " + dateFin + texte);
})

/* EXPLICATIONS: 

Object.values(data) transforme un objet en tableau en récupérant les valeurs
Object.keys(data) transforme un objet en tableau en récupérant les clés



Object.values(data).forEach(function(element) {
    console.log(element.dateDebut);
}
ca remplace :
Object.values(data)[0].dateDebut
Object.values(data)[1].dateDebut
Object.values(data)[2].dateDebut
Object.values(data)[etc].dateDebut
tous les valeurs en chiffres, sont remplacés par .forEach(function(element) {}

*/
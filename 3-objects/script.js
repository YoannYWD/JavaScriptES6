//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}

console.log(bus.line);  //consulter un objet avec notation pointée
console.log(bus.garage.name); //idem
console.log(bus.equipments[1]); //consulter un object avec notation pointée puis tableau [] qui commence à 0 pour la première valeur


//3.2 Object.values //renvoie un tableau contenant les valeurs des propriétés propres énumérables d'un objet 

Object.values(data).forEach(function(element)
{
    console.log(element.texte)

})
// La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.


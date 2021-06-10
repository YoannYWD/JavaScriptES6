//5-1 Import

import {hello} from './functions.js'
hello()


import {showError} from './functions.js'
showError("Ceci est un message d'erreur")


import {anonyme} from './functions.js'
//anonyme()



// 5-2 Export


import {sum, sub, multiply, divide, pow} from './math.js'
const [a, b] = [7, 9]
console.log(sum(a, b));
console.log(sub(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
console.log(pow(a, b));




/* CORRECTION

//5-1 Import

import {hello} from './functions.js' //on importe la fonction hello depuis functions.js
import {showError} from './functions.js'
import anonyme from './functions.js'

hello()                //on l'appelle
showError('erreur')
// anonyme()

// 5-2 Export

import * as Math from './math.js'
const [a, b] = [7, 9]
console.log(Math.sum(a,b))*/
// Array

let arregloVacio = [];

let numeros = [87, 9, 32, 56, 101];

//console.log(typeof numeros);

// Accediendo a lo elementos del array

//console.log(numeros[4]);

// Metodos para los Arrays

// lenght (propiedad)
let resultado = numeros.length;
//console.log(resultado);

// push
// console.log(numeros);
// console.log(numeros.length);
let nuevaLongitud = numeros.push('Hola');
// console.log(numeros);
// console.log(nuevaLongitud);
numeros.push(564654);
numeros.push(true);
//console.log(numeros);

// unshift
const lenguajes = ['Javascript', 'php', 'C++', 'Python'];

// console.log(lenguajes);
// console.log(lenguajes.length);
let newLength = lenguajes.unshift('Go');
// console.log(lenguajes);
// console.log(newLength);
lenguajes.unshift(321);
lenguajes.unshift(false);
// console.log(lenguajes);

// shift
const frameworks = ['React', 'Angular', 'Spring', 'Laravel', 'Django'];

// console.log(frameworks);
// console.log(frameworks.length);
let elementoSacado = frameworks.shift();
//frameworks.shift();
// console.log(frameworks);
// console.log(elementoSacado);

// pop
// console.log('***************');
// console.log(frameworks);
let elementoSacado2 = frameworks.pop();
//frameworks.pop();
//console.log(frameworks);
//console.log(elementoSacado2);

// indexOf
let animales = ['oso', 'elefante', 'jirafa', 'ballena'];

let animal = 'jirafa'.toLowerCase();
let indiceObtenido = animales.indexOf(animal);

//console.log(indiceObtenido);

if (indiceObtenido !== -1) {
    console.log(`El animal ${animal} * SI * existe en el arreglo y se encuentra en la posicion ${indiceObtenido + 1}`);
} else {
    console.log(`El animal ${animal} * NO * existe en el arreglo`);
}


// splice

// eliminacion

let numerosA = [21, 22, 23, 24, 25];

let elementoBorrado = numerosA.splice(3, 1);
console.log(numerosA);
console.log(elementoBorrado);

// Añadir
let letras = ['a', 'z', 'f', 'l'];
letras.splice(3, 0, 55, 't', 'y');
console.log(letras);






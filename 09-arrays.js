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

console.log(lenguajes);
console.log(lenguajes.length);
let newLength = lenguajes.unshift('Go');
console.log(lenguajes);
console.log(newLength);
lenguajes.unshift(321);
lenguajes.unshift(false);
console.log(lenguajes);

// shift
const frameworks = ['React', 'Angular', 'Spring', 'Laravel', 'Django'];

console.log(frameworks);
console.log(frameworks.length);
let elementoSacado = frameworks.shift();
//frameworks.shift();
console.log(frameworks);
console.log(elementoSacado);

// pop
console.log('***************');
console.log(frameworks);
let elementoSacado2 = frameworks.pop();
//frameworks.pop();
console.log(frameworks);
console.log(elementoSacado2);

// indexOf
let animales = ['oso', 'elefante', 'jirafa', 'ballena'];

let indeceObtenido = animales.indexOf('otra cosa');

console.log(indeceObtenido);





// METODOS NUMBERS

// toString()

const num = 56;
const cadena = num.toString();
/* console.log(typeof num);
console.log(typeof cadena);

console.log(num === cadena); */

// toFixed(cantidad de decimales): 

const numeroPI = 3.14159;
const conversion = numeroPI.toFixed(3);
//console.log(conversion);
//console.log(typeof conversion);

// isNaN()

const numA = 10 / "Hello";
console.log(isNaN(numA));

// Math

// abs: Devuelve el valor absoluto de un numero

const edad = -30;
console.log(Math.abs(edad));

// round, floor, ceil: redondea un numero
const valor = 5.4;
console.log(Math.round(valor));
console.log(Math.floor(valor));
console.log(Math.ceil(valor));

// random:
console.log(Math.random() * 10);
console.log(Math.ceil(Math.random() * 1000));

// max y min: 

let a = Math.max(56, 657, 2, 68, 47);
let b = Math.min(464, 634, 64, 6, 848, 5555, 455);

console.log(a + b);

//console.log(Math.max(56, 657, 2, 68, 47));
//console.log(Math.min(464, 634, 64, 6, 848, 5555, 455))



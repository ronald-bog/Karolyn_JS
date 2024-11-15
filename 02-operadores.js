//* 1. Operadores aritmeticos + - / * % ++ --

let suma = 10 + 30;
//console.log(suma);

// operador de modulo

let division = 10 / 3;
console.log(division);

let residuo = 10 % 3;
console.log(residuo);

let x = 5;
let suma1 = x + 10;
console.log(suma1);

let z = 6;
z++;
console.log(z);

let pepino = 10;
pepino--;
console.log(pepino);

//* Operadores de Asignacion
// Asignacion - (simple) =
// Asignacion con suma +=

let valor = 100;
//valor = valor + 50;
valor += 50;

console.log(valor);

// Asignacion con resta -=
let numeroResta = 66;
numeroResta -= 6;
console.log(numeroResta);

// los otros operadores *= /=

//* Operadores de comparacion (relacionales): siempre devuelven un booleano (true o false)
// Igualdad == 
console.log(9 == 10);
console.log('10' == 10);

// Desigualdad != (! =)
console.log(50 != 60);

// Igualdad Estricta ===
console.log('10' === 10);

// Desigualdad estrica !== (! = =)

// Mayor que >
console.log(100 > 90);

// Menor que <
console.log(55 < 60);

// Mayor o igual que >=
console.log(101 >= 100);
console.log(100 >= 100);
console.log(90 >= 100);

// Menor o igual que <=
console.log(66 <= 80);
console.log(80 <= 80);
console.log(95 <= 80);

let n = 10;
let m = 7;
let primerNumero = 123;
let segundoNumero = 2546;

//console.log(n === m);
//console.log(m >= n);
//console.log(n < m);

//console.log(segundoNumero >= primerNumero);
//console.log(primerNumero < segundoNumero);

//* Operadores Logicos
// AND (y) &&
let num1 = 15;
let num2 = 11;
let num3 = 28;

console.log((num1 > num2) && (num1 < num3)); //true
console.log(num3 >= num1 && num2 === num2 && num1 !== num3);
console.log(num1 > num2 && num2 >= num1 && num3 < num1 && num1 >= num2);

// OR (o) ||
let numA = 23;
let numB = 111;
let numC = 58;
//console.log(numA >= numC || numB !== numB || numB < numC);
//console.log(numC === numA || numC < numA || numB >= numC);

// NOT (negacion) !
console.log(!(numA > numC));

// Operador de concatenacion en strings

let palabra1 = "Hola";
let palabra2 = " karolyn";
console.log(palabra1 + palabra2);

let n1 = 50;
let n2 = 60;
console.log(n1 + n2);
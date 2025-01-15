// while

/*
variable inicial
while(condicion){
    bloque de codigo que se va a repetir;
    incremento del bucle;
}
*/
/* let numero = 1;

while (numero <= 4) {
    console.log(numero);
    numero = numero + 1;
} */

/* let ciudades = ['Mexico D.F', 'Lima', 'Quito', 'Bogota', 'Santiago', 'Buenos Aires', 'La Paz', 'Madrid', 'Lisboa', 'Washington', 'Londres', 'Seul', 'Tokio'];

let index = 0;
while (index < ciudades.length) {
    console.log(ciudades[index]);
    index = index + 1;
}

console.log('Esto se ejecuta despues del while'); */


//do - while
// sintaxis
/*
do{
    Bloque de codigo
}
while(condicion)
*/

/* let numero = 1;

do {
    console.log(numero);
    numero = numero + 1;
} while (numero <= 4); */


/* 
let contador = 0;

do {
    console.log(contador);
    contador = contador + 1;
}
while (contador > 0 && contador < 5);
 */

/* let contador = 0;

while (contador > 0 && contador < 5) {
    console.log(contador);
    contador = contador + 1;
} */

let contrasena;

do {
    contrasena = prompt('Por favor, ingrese su contraseña:');
} while (contrasena === '98765');

alert('MUY BIEN CONTRASEÑA CORRECTA !!!!!');

// scope o alcance de las variables.
let prueba1 = 'Soy prueba 1';
if (true) {
    console.log(prueba1);
    let prueba2 = 'SOY PRUEBA 2';
    console.log(prueba2);
}
console.log(prueba1);
console.log(prueba2);


let resultado = 0;
let pregunta;

do {

    let numero_1 = prompt("Dame un numero");

    pregunta = prompt("Gusta insertar mas numeros");

    resultado = resutado + numero_1;

} while (pregunta === "si");

alert(`El resultado de la suma es: ${suma}`);
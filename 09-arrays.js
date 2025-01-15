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
    //console.log(`El animal ${animal} * SI * existe en el arreglo y se encuentra en la posicion ${indiceObtenido + 1}`);
} else {
    //console.log(`El animal ${animal} * NO * existe en el arreglo`);
}


// splice

// eliminacion

let numerosA = [21, 22, 23, 24, 25];

let elementoBorrado = numerosA.splice(3, 1);
//let elementoBorrado = numerosA.splice(2);
//console.log(numerosA);
// console.log(elementoBorrado);

// Añadir
let letras = ['a', 'z', 'f', 'l'];
letras.splice(3, 0, 187, 200, 0);
//letras.splice(3, 0, 55, 't', 'y');
//console.log(letras);
letras.splice(1, 0, 'j', 'k');
//console.log(letras);
letras.splice(1, 0, 6, 8);
//console.log(letras);
letras.splice(10, 0, 56, 78);
//console.log(letras);

// Reemplazar
const colores = ['rojo', 'azul', 'vino', 'blanco', 'cafe'];
colores.splice(0, 5, 'azul rey', 'salmon', 'menta', 'amarillo', 'naranja');
//colores.splice(1, 2, 'negro', 'rosa');
//colores.splice(3, 1, 'lila');
// console.log(colores);
// colores.splice(2, 1, 'dorado');
// console.log(colores);


// slice

// extraer una porcion
const comida = ['sopa', 'hamburguesa', 'tacos', 'arepa', 'quesadillas'];

let resultadoA = comida.slice(1, 2);

// console.log(comida);
// console.log(resultadoA);

// Extraer hasta el final
let elementosExtraidos = comida.slice(1);

//console.log(elementosExtraidos);

// Extraer con indices negativos
const extraidos = comida.slice(-3);
console.log(extraidos);


if (pregunta_usuario === pregunta_compu) {
    alert("es un empate");
} else if (pregunta_usuario === "piedra" && pregunta_compu === "tijeras" ||
    pregunta_usuario === "papel" && pregunta_compu === "piedra" ||
    pregunta_usuario == "tijeras" && pregunta_compu === "papel"
) {
    alert("Ganaste");
} else if (pregunta_usuario === "tijera" && pregunta_compu === "piedra" ||
    pregunta_usuario === "tijera" && pregunta_compu === "papel" ||
    pregunta_usuario === "piedra" && pregunta_compu === "papel"
) {
    alert("Perdiste");
} else {
    alert("opcion no valida");
}

const pregunta_usuario = 'piedra';
const opciones = ['piedra', 'papel', 'tijera'];
if (opciones.includes(pregunta_usuario)) {
    if (pregunta_usuario === "piedra" && pregunta_compu === "tijeras" ||
        pregunta_usuario === "papel" && pregunta_compu === "piedra" ||
        pregunta_usuario == "tijeras" && pregunta_compu === "papel"
    ) {
        alert("Ganaste");
    }
    else {
        alert("Perdiste");
    }
}
else {
    alert("opcion no valida");
}


// Desempaquetamiento de un array

let numbers = [55, 22, 33];
const lenguajes2 = ['Python', 'Php', 'Perl'];

let [a, b, c] = lenguajes2;

//console.log(var1);
console.log(b);
//console.log(var3);
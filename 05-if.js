// if

if (10 > 5 && 20 < 12) {
    console.log("Este if es *** TRUE ***");
}

// if else

if (66 === 68) {
    //console.log('jajajaj soy verdadero');
}
else {
    //console.log('ahhh soy falso');
}

// Expresion ternaria: maneja operador ? (operador ternario)

// sintaxis: condicion ? si true : si false

//console.log(66 === 66 ? 'jajajaj soy verdadero' : 'ahhh soy falso');

// else if

const number = 11;

if (number > 0) {
    //console.log('El numero es positivo');
}
else if (number === 0) {
    console.log('El numero es igual a cero (0)');
}
else if (number < 0) {
    console.log('El numero es negativo');
}

/*
const number = 11;

if (number > 0) {
    console.log('El numero es positivo');
}
if (number === 15) {
    console.log('El numero es 15');
}
else if (number === 0) {
    console.log('El numero es igual a cero (0)');
}
else if (number < 0) {
    console.log('El numero es negativo');
}
*/

//console.log('Hola soy codigo despues de la estructura IF');

// IF ANIDADO

const tipo = 'primario';
const color = 'amarillo';

if (tipo === 'primario') {
    if (color === 'azul') {
        console.log(`${color} es un color PRIMARIO`);
    }
    else {
        console.log(`${color} NOOO es un color PRIMARIO`);
    }
}
else if (tipo === 'secundario') {
    if (color === 'verde') {
        console.log(`${color} es un color SECUNDARIO`);
    }
    else {
        console.log(`${color} NOOO es un color SECUNDARIO`);
    }
}

// INDICES: identificacion de cada elemento de un string
let marca = "Renault";
let indice = marca[6];
console.log(indice);

// Metodos de los strings

// length: devuelve cantidad de caracteres (elementos que tiene el string)
let nombre = "Karolyn";
console.log(nombre.length);

// chartAt: devuleve el caracter en la posicion especificada
let frase = 'Hola Mundo!';
console.log(frase.charAt(0));

// concat(): Une dos o mas cadenas(strings) en una nueva cadena
let saludo1 = 'Hola ';
let saludo2 = 'Mundo';
console.log(saludo1.concat(saludo2));

// indexOf: devuelve indice de la primera ocurrencia dentro de una cadena
let saludo = 'Como estas este dia';
console.log(saludo.indexOf('e'));

// substring: devuelve una subcadena desde y hasta el indice especificado 
let fraseInspiradora = 'vive la vida';
console.log(fraseInspiradora.substring(0, 9));

// toLowerCase y toUpperCase: convertir en mayus o minus el string
let nombreAlumno = 'catalina';
let nombreAlumno2 = 'PEDRO';
console.log(nombreAlumno.toUpperCase());
console.log(nombreAlumno2.toLowerCase());

// trim: elimina espacios al comienzo y al final
let cadenaConEspacios = '     estoy programando JS    ';
let prueba2 = ' Texto de prueba';
console.log(cadenaConEspacios + prueba2);
console.log(cadenaConEspacios.trim() + prueba2);

// split: dividir el string y convertirlo en un array, mediante un separador que especifiquemos.
let fraseK = 'Feliz Navidad y prospero Año nuevo';
console.log(fraseK.split(' '));
let datosEstudiante = 'Karolyn,Miranda,30';
console.log(datosEstudiante.split(','));
let palabraPrueba = 'hola';
console.log(palabraPrueba.split(''));

// replace: reemplaza una subcadena por otra
let saludar = 'Hola Karolyn';
console.log(saludar.replace('Karolyn', 'Yuritzy'));

// slice:
let fraseDev = 'Hola mundo!!!';
console.log(fraseDev.slice(8));

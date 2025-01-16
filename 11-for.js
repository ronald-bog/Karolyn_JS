// CICLO FOR

/* Sintaxis:
for(variable inicializacion; condicion; incremento){
    bloque de codigo a repetir
}
*/

/* let numero = 1;
while (numero <= 5) {
    console.log(numero);
    numero++;
} */

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let numeroInc = 1; numeroInc <= 5; numeroInc++) {
    console.log(numeroInc);
}

const flores = ['girasoles', 'rosas', 'tulipanes', 'orquidea', 'alcatraz'];

for (let flor = 0; flor < 5; flor++) {
    console.log(`${flor + 1}.  ${flores[flor]}`);
}
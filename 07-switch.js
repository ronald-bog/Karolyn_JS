// switch
/*
const calificacion = 6.5;

switch (calificacion) {
    case 7.5:
        console.log('Tu nivel es bajo');
        break;
    case 8.5:
        console.log('Tu nivel es bueno');
        break;
    case 9.5:
        console.log('Tu nivel es alto');
        break;
    default:
        console.log('No reconozco la calificacion dada');
}

console.log('Codigo fuera del switch');
*/

// const alimentoGral = 'PAN';
// const alimento = alimentoGral.toLowerCase();

const alimento = 'PAN'.toLowerCase();

switch (alimento) {
    case 'pan':
        console.log(`El alimento que elegiste es ${alimento}`);
        break;
    case 'pollo':
        console.log(`El alimento que elegiste es ${alimento}`);
        break;
    default:
        console.log(`El alimento que elegiste no esta en mi BD`);
}

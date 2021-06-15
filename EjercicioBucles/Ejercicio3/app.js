/* FUNCIONAMIENTO DEL DO-WHILE (EJEMPLO)
let i = 1;
do {
    document.write("Hola " + i + " - ");
    //i = i + 1;
    i += 1;
} while (i<11);

*/



let cadena = [];
let i = 0;

do {
    cadena[i] = prompt("Ingrese texto");
    i += 1;
} while (confirm("¿Continuar?"));

//document.write(cadena);
document.write(cadena.join('-'));

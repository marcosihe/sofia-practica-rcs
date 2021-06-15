let numero = parseInt(prompt("Ingrese la nota"));

/*
if(numero==0 || numero==1 || numero==2){
    alert("Muy deficiente");
}else if(numero==3 || numero==4){
    alert("Insufiente");
}else if(numero==5 || numero==6){
    alert("Suficiente");
}else if(numero==7){
    alert("Bien");
}else if(numero==8 || numero==9){
    alert("Notable");
}else if(numero==10){
    alert("Sobresaliente");
}else{
    alert("Introduce un número válido");
}

*/

switch(numero){
    case 0:
    case 1:
    case 2:
        alert("Muy deficiente");
        break;
    case 3:
    case 4:      
        alert("Insuficiente");
        break;
    case 5:
    case 6:
        alert("Suficiente");
        break;
    case 7:
        alert("Bien");
        break;
    case 8:
    case 9:
        alert("Notable");
        break;
    case 10:
        alert("Sobresaliente");
        break;
    default:
        alert("Introduce un numero valido");
        break;    
}
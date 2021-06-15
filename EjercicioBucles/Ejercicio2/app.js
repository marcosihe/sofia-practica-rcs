let numero = parseInt(prompt("Ingrese la nota"));
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
    alert("La nota ingresada no es valida");
}


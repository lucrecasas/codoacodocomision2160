alert('soy una ventana emergente!'); //es una venta emergente//
console.log('Hola soy un mensaje en la consola')
/*VARIABLES: son espacio de memoria*/
/* palabra reservada (var, let, const)+nombre de la variable = le asignamos el valor*/

var nombre_variable;/*siempre ocupa espacio en la memoria*/
let otra_variable = "hola"; /* string: union de varios caracteres*/ /*solo va a ocupar espacio en la memoria cuando se esta utilizando*/
const pi = 3.1416; /* tipo enteros y float*/
let num2=18;
let hayClases=true /*esto es una variable booleana*/
let terminoLaClase=false /*esto es una variable booleana*/

/*TIPOS DE VARIABLES:
numero, array, string, boolean, chart, function, null, undefined (no es un tipo si no que el valor es indefinido)
*/

console.log(pi*num2);
console.log(num2+36+otra_variable); /*JS, cuando combinamos variables de distinto tipo las concatena,
                                        las une sin espacio, si quisieramos que haya un espacio entre una y otra 
                                        tendriamos que escribie variable + 'espacio' +otra variable  */
/*CONDICIONALES
    if(dentro del parentesis se escribe el condicional, si es verdadero){
        va a ejecutar lo que este dentro de las primeras llaves
    }else{
        si es falso va a ejecutar todo lo que este despues del else.
    }*/
    /*== es comparador de variables, && requiere que las dos condiciones se cumplan
    != es negativo, || es o de opcion, si se cumple una de las variables ejecuta el if, 
    si no el else*/
if(hayClases==true &&terminoLaClase !=true){
    console.log('Nos conectamos a la clase')
}else{
    console.log('Salimos a tomar un trago')
}
if(hayClases==false || terminoLaClase==true){
    console.log('Salimos a celebrar el dia del estudiante')
}

let elemento = document.getElementById("principal") //getElementById es una funcion//
// console.log(elemento)
elemento.innerHTML="Mi valor para innerhtml"
elemento.innerHTML= "<p>"+otra_variable +"</p>" 
document.write("<h3 class= 'text-center bg-primary'> Hola Buen dia </h3>")
document.write("<h3> Como estan?</h3>")

if(nombre_variable==undefined){
    elemento.innerHTML+="Estamos con una variable sin valor definido"
    elemento.innerHTML+= "<p>Luis Navas</p><p>Lucrecia Casas</p><p>Damian</p><p>Estela</p><p>juan</p>"
    elemento.style.backgroundColor="blue"
    elemento.style.color="white"
}
/*
let mensaje = prompt("Introcuce tu mensaje");
elemento.innerHTML+= "<h3>" +mensaje+ "</h3>" ; /* inner es una propiedad que va a recibir string 
                                            para que funcione hay que incorporar la etiqueta 
                                            dentro de las comillas.*/

/*elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">"+mensaje+"</div>";*/

let menu = prompt("Selecciona el pedido:\n 1. Milansa con papas fritas\n 2. Milanesa napolitana\n 3. Fritas solas");

if(menu==1){
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta las milanesas con fritas</div>";

}else if(menu==2){
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta la milanesa napolitana</div>";

}else if (menu==3) {
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta las papas fritas</div>";

}else{
    alert('Debes elegir alguna opcion del menu')
    let menu = prompt("Selecciona el pedido:\n 1. Milansa con papas fritas\n 2. Milanesa napolitana\n 3. Fritas solas");

}

switch (menu) {
    case 1:
        break; 

    default:
        break; 
}
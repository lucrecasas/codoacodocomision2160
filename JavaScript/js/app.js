alert('soy una ventana emergente!');
console.log('Hola soy un mensaje en la consola')
/*VARIABLES: son espacio de memoria*/
var nombre_variable;/*siempre ocupa espacio en la memoria*/
let otra_variable = "hola"; /*solo va a ocupar espacio en la memoria cuando se esta utilizando*/
const pi = 3.1416;
let num2=18;
let hayClases=true /*esto es una variable booleana*/
let terminoLaClase=false

/*TIPOS DE VARIABLES:
numero, array, string, boolean, chart, function, null, undefined
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
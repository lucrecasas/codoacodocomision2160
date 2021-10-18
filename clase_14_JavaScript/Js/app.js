

alert('soy una venta emergente!'); 
console.log ('Soy un msj en la consola'); 


var nombre_variable; 
let otra_variable = "hola"; 
const PI = 3.1416;
let num2 = 18;
let hayClases=true;


console.log(PI*num2);
console.log(num2 + 36 + " " +otra_variable); 
hayClases=false;
let terminoLaClase=false;



if (hayClases == true && terminoLaClase !=true) {
    console.log('Nos conectamos a la videollamada')
    
}else{ 
    console.log('Salimos a celebrar el dia del estudiante')

}



if (hayClases == false  || terminoLaClase == true) {
    console.log('Salimos a celebrar el dia del estudiante')
    
}

let elemento = document.getElementById("principal");
//console.log(elemento);
elemento.innerHTML="Mi valor para innerHTML"; //permite mostrar por pantalla lo que hemos programado//
elemento.innerHTML+="<p>"+otra_variable+"<p>";
document.write("<h3 class='text-center bg-primary'>Hola, Buen dia</h3>");
document.write("<h3>como estan?</h3>");


if (nombre_variable == undefined) {
    elemento.innerHTML+="Estamos con una variable sin valor definido"
    elemento.innerHTML+="<p>Luis Navas</p>"
    elemento.innerHTML+="<p>Lucrecia Casas</p>"
    elemento.innerHTML+="<p>Damian</p><p>Barbara</p><p>Elias</p>"
    elemento.style.backgroundColor="Blue"
    elemento.style.color="white"
       
}

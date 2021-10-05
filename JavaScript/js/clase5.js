/*Arreglos*/
let elemento = document.querySelector("#principal");

let mascotas = [];
/*object{propietario, nombre, especie, raza,edad,peso, imagen, tipoConsulta} */
// mascotas [1]= "Loro"
// mascotas[0]="Perro"
// mascotas.push("Gallo");

mascotas.forEach(m=>{
    elemento.innerHTML+=`<h2> ${m} </h2>`;
});

const agregarMascota=()=>{
    let datos=document.querySelectorAll("input");
    let consulta="";
    if(datos[7].checked){
        consulta="Consulta"

    }else{consulta="Urgencia"}
    let mascota={
        propietario:datos[0].value,
        nombre:datos[1].value,
        especie:datos[2].value,
        raza:datos[3].value,
        edad:datos[4].value,
        peso:datos[5].value,
        imagen:datos[6].value,
        tipoConsulta:consulta

        
    }
    mascotas.push(mascota)
    console.log(datos[0].value);
}

//function crearForm(){}/*ES5, se utiliza para trabajar en js*/

const crearForm=()=>{/*ES6, se usa para cuando usamos node*/
    elemento.innerHTML=`
    <form class='col-6'>
  <div class="mb-3">
    <label for="propietario" class="form-label">Propietario</label>
    <input type="text" class="form-control" id="propietario">
  </div>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre">
  </div>
  <div class="mb-3">
    <label for="especie" class="form-label">Especie</label>
    <input type="text" class="form-control" id="especie">
  </div>
  <div class="mb-3">
    <label for="raza" class="form-label">Raza</label>
    <input type="text" class="form-control" id="raza">
  </div>
  <div class="mb-3">
    <label for="edad" class="form-label">Edad</label>
    <input type="text" class="form-control" id="edad">
  </div>
  <div class="mb-3">
    <label for="peso" class="form-label">Peso</label>
    <input type="text" class="form-control" id="peso">
  </div>
  <div class="mb-3">
    <label for="imagen" class="form-label">Imagen</label>
    <input type="text" class="form-control" id="imagen">
  </div>
  <div class="mb-3">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
        Consulta
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Urgencia
  </label>
</div>
  
  <button type="Button" id="btn" class="btn btn-primary">Agregar Datos</button>
</form>
    `;
    document.getElementById("btn").addEventListener('click', agregarMascota);

};
crearForm();
/*object{propietario, nombre, especie, raza,edad,peso, imagen, tipoConsulta} */
const mostrarMascotas=()=>{
    mascotas.forEach(m=>{
        elemento.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${m.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Nombre:${m.nombre}</h5>
        <p class="card-text">Especie: ${m.especie}</p>
        <p class="card-text">Raza: ${m.raza}</p>
        <p class="card-text">Edad: ${m.edad}</p>
        <p class="card-text">Peso: ${m.peso}</p>
        <p class="card-text">Tipo Consulta: ${m.tipoConsulta}</p>
        <p class="card-text">Propietario: ${m.propietario}</p>
        
        <a href="#" class="btn btn-primary" onclick="crearForm()">Agregar otras Mascota</a>
    </div>
    </div>
        `;

    })
    
}


function agregarDatos() {
    const dato = prompt('Ingrese un dato:');


    if (dato) {

        const titulo = document.querySelector(".title--1").className="tittle--2";

        console.log("change color")

        const datosDiv = document.getElementById('datos');

        const nuevoDato = document.createElement('p');
        nuevoDato.textContent = dato;

        datosDiv.appendChild(nuevoDato);


    }






}


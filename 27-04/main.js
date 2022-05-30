// 1. Formulario de contacto - Local Storage
    // Crear un formulario de contacto con los siguientes campos: (VER EN HTML)

    // Guardar en Local Storage los datos de contacto enviados de cada usuario
    // Mostrar los datos de los contactos guardados en el DOM
    // Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
const name = document.querySelector('#nombre')
const email = document.querySelector('#correo')
const msj = document.querySelector('#mensaje')
const form = document.getElementById("formulario")
const personas = document.getElementById("perfiles")
let usuarios = []

form.addEventListener("submit", function(e){
    e.preventDefault()
    let usuario = {
        nombre: name.value,
        correo: email.value,
        mensaje: msj.value,
    }
    usuarios.push(usuario)
    
    personas.innerHTML =""
    for (const item of usuarios) {
        personas.innerHTML += `
        <div class="perfil">
            <h2 class="perfil__nombre">${item.nombre}</h2>
            <h3 class="perfil__correo">${item.correo}</h3>
            <p class="perfil__mensaje">${item.mensaje}</p>
        </div>     
        `
    }

    localStorage.setItem('key', JSON.stringify(usuarios))
})

const arrayUsuarios = JSON.parse(localStorage.getItem('key'))
console.log(arrayUsuarios)

// 2. Avanzado - Local Storage
    // Crea un botón para borrar todos los contactos guardados en Local Storage
const borraTodo = document.querySelector('#boton1')
borraTodo.addEventListener("click", function(e){
    localStorage.clear()
})

    // Crea un botón para borrar un contacto en concreto de Local Storage
// Este no he sabido hacerlo
// const borraPrimero = document.querySelector('#boton2')
// borraPrimero.addEventListener("click", function(e){
//     localStorage.removeItem('usuarios[0]')
// })
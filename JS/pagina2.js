//Función: Lee el nombre y lo muestra
function mostrarNombre() {
    const nombre = sessionStorage.getItem('nombre');  //Lee de la bodega

    if (nombre == null) {
        document.getElementById('saludo').textContent = "No hay ningún nombre guardado";
    } else {
        document.getElementById('saludo').textContent = "Hola, " + nombre; 
    }
}

//Función: Borra el nombre y vuelve a mostrar el resultado
function borrar() {
    sessionStorage.removeItem('nombre'); //Borra de la bodega
    mostrarNombre(); //Actualiza el mensaje
}

//Eventos
document.addEventListener('DOMContentLoaded', mostrarNombre); //Al cargar la pagina, se ejecuta mostrarNombre() 
document.getElementById('btn-borrar').addEventListener('click', borrar); //Al hacer click borra el nombre

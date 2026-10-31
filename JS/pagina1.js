//Funcion: guardar el nombre y cambia de pagina
function guardar() {
    const nombre = document.getElementById('nombre').value;
    const ciudad = document.getElementById('ciudad').value; //Lee la ciudad del input
    // Verificamos si alguno de los dos campos está vacío
    if (nombre === "" || ciudad === "") {
        alert("Por favor, completa todos los campos antes de enviar."); // O puedes mostrarlo en un elemento HTML <p>
    } else {
        // Si todo está lleno, se guarda en la bodega
        sessionStorage.setItem('nombre', nombre);
        sessionStorage.setItem('ciudad', ciudad);
    window.location.href = 'pagina2.html'; //Cambia de pagina
    }
}   
//Evento: Al hacer click en el botón, se ejecuta guardar()
document.getElementById('btn-guardar').addEventListener('click', guardar);  

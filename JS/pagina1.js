//Funcion: guardar el nombre y cambia de pagina
function guardar() {
    const nombre = document.getElementById('nombre').value;
    sessionStorage.setItem('nombre', nombre); //Guarda en la bodega sessionStorage
    window.location.href = 'pagina2.html'; //Cambia de pagina
}   

//Evento: Al hacer click en el botón, se ejecuta guardar()
document.getElementById('btn-guardar').addEventListener('click', guardar);  

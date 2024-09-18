const queryString = window.location.search;
const urlParams = new URLSearchParams(window.location.search);
const getNombre = urlParams.get('nombre');
const setNombre = document.getElementById('nombre-invitados');

setNombre.textContent = getNombre;
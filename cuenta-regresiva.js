const fechaObjetivo = new Date('2024-11-01T00:00:00').getTime();
const daysNumber = document.getElementById('days-number');
const hoursNumber = document.getElementById('hours-number');
const minutesNumber = document.getElementById('minutes-number');
const secondsNumber = document.getElementById('seconds-number');

// Función para actualizar la cuenta regresiva
function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    // Calcula días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Muestra la cuenta regresiva
    daysNumber.textContent = dias;
    hoursNumber.textContent = horas;
    minutesNumber.textContent = minutos;
    secondsNumber.textContent = segundos;

    // Si la cuenta regresiva ha terminado
    if (diferencia < 0) {
        clearInterval(intervalo);
        console.log('¡La cuenta regresiva ha terminado!');
    }
}

// Actualiza la cuenta regresiva cada segundo
const intervalo = setInterval(actualizarCuentaRegresiva, 1000);

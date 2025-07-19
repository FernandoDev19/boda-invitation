
AOS.init();

function abrirModal() {
    let icon = document.getElementById('regalo-icon');
    icon.setAttribute('src', 'assets/icons/regalo-abierto.png');
    
    // Cambia la imagen a "regalo-abierto.png" y añade una transición
    icon.style.transition = "transform 0.5s";
    icon.style.transform = "scale(1.2)";  // Efecto de agrandamiento o apertura
    
    setTimeout(function () {
      var modal = new bootstrap.Modal(document.getElementById('regalosModal'), {
        backdrop: false,
        keyboard: true
      });
      modal.show();
      
      // Después de mostrar el modal, restaurar el ícono a su tamaño original
      icon.style.transform = "scale(1)";
    }, 300);  // Retraso de 1 segundo antes de mostrar el modal
  }
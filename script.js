// Animar logo al cargar la página
window.addEventListener("load", () => {
  const logo = document.querySelector('.logo-animado');
  logo.classList.add('logo-visible');

  // Animar imágenes y formulario después del logo
  setTimeout(() => {
    const elementosAnimados = document.querySelectorAll('.imagen-animada, form');
    elementosAnimados.forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
});

// Mostrar el reloj dinámico
function mostrarHora() {
  const ahora = new Date();
  document.getElementById('reloj').innerText = ahora.toLocaleTimeString();
  setTimeout(mostrarHora, 1000);
}

// Contador de visitas
function actualizarContador() {
  let visitas = localStorage.getItem('contadorVisitas') || 0;
  visitas++;
  localStorage.setItem('contadorVisitas', visitas);
  document.getElementById('visitas').innerText = visitas;
}

// Iniciar funciones
window.addEventListener('load', () => {
  mostrarHora();
  actualizarContador();
});

// Validar formulario antes de enviarlo
document.getElementById("formulario-contacto").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const mensajeError = document.getElementById("mensaje-error");

  // Validaciones
  if (nombre === "" || email === "" || mensaje === "") {
    mensajeError.textContent = "Todos los campos son obligatorios.";
    mensajeError.style.display = "block";
    return;
  }

  // Validación de email usando expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mensajeError.textContent = "Por favor, ingresa un email válido.";
    mensajeError.style.display = "block";
    return;
  }

  // Si todo está correcto, enviar el formulario
  mensajeError.style.display = "none";
  alert("Formulario enviado correctamente.");
  this.submit();
});
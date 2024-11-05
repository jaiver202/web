document.addEventListener("DOMContentLoaded", () => {
  const abrirMenuBtn = document.getElementById("abrir");
  const cerrarMenuBtn = document.getElementById("cerrar");
  const nav = document.getElementById("nav");
  const verMasBtn = document.getElementById("ver-mas-btn");

 
  abrirMenuBtn.addEventListener("click", () => {
      nav.classList.add("visible");
  });

  // Ocultar el menú
  cerrarMenuBtn.addEventListener("click", () => {
      nav.classList.remove("visible");
  });

  // Desplazarse hacia la sección de información al hacer clic en "Ver más"
  verMasBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Evita el comportamiento por defecto del enlace
      
      // Desplazarse hacia la sección de información
      const targetID = verMasBtn.getAttribute("href");
      const targetElement = document.querySelector(targetID);
      
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
      }
  });
});

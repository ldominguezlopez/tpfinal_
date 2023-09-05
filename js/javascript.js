
/*Edad*/
document.addEventListener("DOMContentLoaded", function () {
    const agePopup = document.getElementById("agePopup");
    const confirmButton = document.getElementById("confirmButton");
  
    confirmButton.addEventListener("click", function () {
      agePopup.style.display = "none";
    });
  
    // Mostrar el pop-up al cargar la página
    agePopup.style.display = "flex";
  });


  
// Define una lista de tarifas de envío por código postal
const tarifasEnvio = {
  "2900": 0,

};

function calcularEnvio() {
  const codigoPostalInput = document.getElementById("codigoPostal").value;
  const resultadoElemento = document.getElementById("resultado");

  if (tarifasEnvio.hasOwnProperty(codigoPostalInput)) {
      const costoEnvio = tarifasEnvio[codigoPostalInput];
      resultadoElemento.textContent = "El envío es sin cargo";
  } else {
      resultadoElemento.textContent = "El envío tiene un costo de $1500";
  }
}








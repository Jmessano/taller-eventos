document.addEventListener("DOMContentLoaded", function () {
    const divBoton = document.getElementById("divContenedor");
    const boton = document.getElementById("saludar");

    divBoton.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });

    boton.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita la propagación del evento al div
        saludar(); // Llama a la función saludar
    });

    function saludar() {
        alert("Hola");
    }
});

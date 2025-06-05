// Alternar tamaño de texto
document.getElementById("toggle-text-size").addEventListener("click", function() {
    document.body.classList.toggle("large-text");
});

// Validación del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let email = document.getElementById("email");
    if (!email.value.includes("@")) {
        email.setAttribute("aria-invalid", "true");
        alert("Por favor, introduce un email válido.");
        event.preventDefault();
    } else {
        email.setAttribute("aria-invalid", "false");
    }
});

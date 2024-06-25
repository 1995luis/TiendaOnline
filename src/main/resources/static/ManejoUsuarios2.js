function openModal(modalId, id, nombre, apellido, telefono) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    if (id && nombre && apellido && telefono) {
        document.getElementById("idEditar").value = id;
        document.getElementById("nombreEditar").value = nombre;
        document.getElementById("apellidoEditar").value = apellido;
        document.getElementById("telefonoEditar").value = telefono;

        document.getElementById("idEliminar").value = id;
        document.getElementById("nombreEliminar").value = nombre;
        document.getElementById("apellidoEliminar").value = apellido;
        document.getElementById("telefonoEliminar").value = telefono;
    }
}

// Cerrar modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del modal
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
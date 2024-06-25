function mostrarFormularioPedido() {
    document.getElementById('formularioPedidoModal').style.display = "block";
}

function cerrarFormularioPedido() {
    document.getElementById('formularioPedidoModal').style.display = "none";
}

document.getElementById('metodo_pago').addEventListener('change', function() {
    var tarjetaInfo = document.getElementById('tarjeta_info');
    if (this.value === 'tarjeta') {
        tarjetaInfo.style.display = 'block';
    } else {
        tarjetaInfo.style.display = 'none';
    }
});

// Cerrar el modal si se hace clic fuera de la ventana del formulario
window.onclick = function(event) {
    var modal = document.getElementById('formularioPedidoModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
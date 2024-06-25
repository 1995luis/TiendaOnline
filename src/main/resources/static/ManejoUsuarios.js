function seleccionarModificar(){
    var table = document.getElementById("mitabla");
    for (var i=1; i< table.rows.length; i++)
    {
        table.rows[i].onclick = function ()
        {
            document.getElementById("idActualizar").value = this.cells[0].innerHTML;
            document.getElementById("NombresAct").value = this.cells[1].innerHTML;
            document.getElementById("ApellidosAct").value = this.cells[2].innerHTML;
            document.getElementById("TelefonoAct").value = this.cells[3].innerHTML;
        };

    }
}
function seleccionarEliminar(){
    var table = document.getElementById("mitabla");
    for (var i=1; i< table.rows.length; i++)
    {
        table.rows[i].onclick = function ()
        {
            document.getElementById("idEliminar").value = this.cells[0].innerHTML;
            document.getElementById("NombresEliminar").value = this.cells[1].innerHTML;
            document.getElementById("ApellidosEliminar").value = this.cells[2].innerHTML;
            document.getElementById("TelefonoEliminar").value = this.cells[3].innerHTML;
        };

    }
}
/* global ram */

const ram = {
    ram1: {

        name: "Memoria RAM Gamer Crucial",
        image: "imagenes/ram1.png" ,
        features: "CARACTERISTICAS. Memoria con formato SODIMM" +
            "Alcanza una velocidad de 3200 MHz\n" + "Optimiza el rendimiento de tu máquina con la tecnología DDR4" +":\n" + "Apta para notebooks\n" +
            "Cuenta con una tasa de transferencia de 25600 MB/s." +
            "Compatible con Intel Core" +
            "Velocidad de transferencia de datos de memoria RAM 25600 TB/s\n" +
            "Capacidad total 8 GB"
    },
    ram2: {
        name: "Memoria Ram Ddr4 Crucial",
        image: "imagenes/ram2.png",
        features: "CARACTERISTICAS. Modelo CT16G4SFRA32A\n" +
            "Memoria con formato SODIMM\n" + "Alcanza una velocidad de 3200 MHz" +":\n" + "Cuenta con una tasa de transferencia de 25600 MB/s\n" +
            "Capacidad total: 16 GB" +
            "Tecnología: DDR4" +
            "Es gamer: Sí" +
            "Voltaje de alimentación 1.2V"
    },
    
    ram3: {

        name: "Memoria RAM ValueRAM gamer Kingston",
        image: "imagenes/ram3.jpg" ,
        features: "CARACTERISTICAS. Optimiza el rendimiento de tu máquina con la tecnología DDR4 SDRAM." +
            "Alcanza una velocidad de 2400 MHz.\n" + "Línea ValueRAM" +":\n" + "Velocidad de la memoria RAM 2400 MHz \n" +
            "Capacidad total 8 GB" +
            "1Es gamer si" +
            "Modelo KVR24S17S8/8\n" +
            "Tasa de transferencia 19200 MB/s"
    },
    
     ram4: {

        name: "Memoria RAM Fury gamer color negro",
        image: "imagenes/ram4.jpg" ,
        features: "CARACTERISTICAS. Modelo HX434C16FB3/16 " +
            "Memoria con formato UDIMM" + "Alcanza una velocidad de 3466 MHz" +"Cuenta con una tasa de transferencia de 27700 MB/s:\n" + "Optimiza el rendimiento de tu máquina con la tecnología DDR4 SDRAM \n" +
            "Capacidad total: 16 GB" +
            "Aplicación: Computadoras de escritorio\n" +
            "Compatibilidades de la memoria\n" +
            "Voltaje de alimentación 1.35V"
    },
    
     ram5: {

        name: "Memoria RAM gamer color verde Samsung",
        image: "imagenes/ram5.jpg" ,
        features: "CARACTERISTICAS. Modelo M471A1K43DB1-CTD" +
            "Velocidad de la memoria RAM 2666 MHz\n" + "Tecnología: DDR4 SDRAM" +":\n" + "Cuenta con una tasa de transferencia de 21300 MB/s" +
            "Capacidad total: 8 GB" +
            "Es gamer: Sí" +
            "Formato: SODIMM\n" +
            "Voltaje de alimentación 1.2V"
    }
    // Agregar más laptops según sea necesario
};

function showDetails(ramId) {
    const modal = document.getElementById("modal");
    const details = ram[ramId];
    document.getElementById("modal-details").innerHTML = `
        <div class="details-text"><h2>${details.name}</h2>
            <p>${details.features}</p>
        </div>
        <img src="${details.image}" alt="${details.name}" style="width: 50%; height: auto;">
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function addToCart(ramId, event) {
    event.stopPropagation();
    alert(`${ram[ramId].name} ha sido agregado al carrito.`);
}


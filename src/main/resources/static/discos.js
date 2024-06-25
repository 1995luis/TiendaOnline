/* global discos */

const discos = {
    discos1: {

        name: "Disco Solido 500 Gb Crucial Bx500",
        image: "imagenes/disc1.png" ,
        features: "CARACTERISTICAS. Modelo CT500BX500SSD1" +
            "Con tecnología 3D NAND\n" + "Interfaz de conexión: SATA III" +":\n" + "Tecnología de almacenamiento: SSD\n" +
            "Temperatura de funcionamiento 0 °C - 70 °C" +
            "Transferencia de datos 550 MB/s lectura, 500 MB/s escritura" +
            "Es resistente a golpes Si\n" +
            "Factor de forma del disco rígido y SSD 2.5"
    },
    discos2: {
        name: "Unidad Solida Kingston 2.5 A400",
        image: "imagenes/disc2.png",
        features: "CARACTERISTICAS. Modelo SA400S37/960G\n" +
            "Con tecnología 3D NAND\n" + "Interfaz de conexión: SATA III" +":\n" + "Capacidad: 960 GB\n" +
            "Tecnología de almacenamiento: SSD" +
            "Factor de forma: 2.5" +
            "Con sistema de seguridad de datos Sí" +
            "Transferencia de datos 500MB lectura, 320MB escritura"
    },
    
    discos3: {

        name: "Disco duro externo Adata HD710 Pro",
        image: "imagenes/disc3.jpeg" ,
        features: "CARACTERISTICAS. Modelo AHD710P-2TU31" +
            "Tecnología de almacenamiento: HDD" + "Resistente al agua, polvo y golpes" +":\n" + "Interfaz de conexión: USB 3.1 \n" +
            "Accesorios incluidos: cable usb 3.2 gen 1" +
            "Capacidad: 2 TB" +
            "Factor de forma del disco rígido y SSD 2.5\n" +
            "Es resistente al agua Si"
    },
    
     discos4: {

        name: "Disco duro interno Western Digital WD10SPZX",
        image: "imagenes/disc4.jpg" ,
        features: "CARACTERISTICAS. Modelo WD10SPZX " +
            "Interfaz de conexión: SATA III" + "Capacidad: 1 TB" +"Tecnología de almacenamiento: HDD\n" + "Velocidad de rotación: 5400 rpm \n" +
            "Factor de forma: 2.5" +
            "Temperatura de almacenamiento -45°C - 65°C\n" +
            "Sistemas operativos soportados Windows 10, Windows 8.1, Windows 7\n" +
            "Consumo energético del disco rígido y SSD 1.5W lectura y escritura, 0.5W inactivo, 0.1W espera y suspensión"
    },
    
     discos5: {

        name: "Disco Duro Solido Interno Ssd Nvme M2",
        image: "imagenes/disc5.jpg" ,
        features: "CARACTERISTICAS. NVMe M.2 2280" +
            "Más espacio en tu PC con su factor de forma M.2 2280\n" + "Interfaz de conexión: Nvme" +":\n" + "Capacidad: 512 GB" +
            "Interfaces: Nvme, NVMe 1.1, NVMe 1.2, Nvme 1.3, Pcie 3.0" +
            "Factor de forma: M.2 2280" +
            "Tecnología de almacenamiento: SSD\n" +
            "Tipo de disco rígido y SSD externo Portátil"
    }
    // Agregar más laptops según sea necesario
};

function showDetails(discosId) {
    const modal = document.getElementById("modal");
    const details = discos[discosId];
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

function addToCart(discosId, event) {
    event.stopPropagation();
    alert(`${discos[discosId].name} ha sido agregado al carrito.`);
}


const laptops = {
    laptop1: {

        name: "LAPTOP MARCA ASUS",
        image: "imagenes/asus.png" ,
        features: "CARACTERISTICAS. PROCESADOR: Modelo Intel Core i7-1165G7\n" +
            "Frecuencia: Hasta 4.7 GHz\n" + "SISTEMA OPERATIVO" +":\n" + "Windows 10 Home PUERTOS: 2 x USB 3.2 Gen 2 Type-C (uno con DisplayPort 1.4 y Power Delivery)\n" +
            "2 x USB 3.2 Gen 1 Type-A\n" +
            "1 x HDMI 2.0b\n" +
            "1 x conector de audio combinado\n" +
            "1 x puerto de carga"
    },
    laptop2: {
        name: "ASUS ZenBook 14 (UX425)",
        image: "imagenes/asus2.png",
        features: "CARACTERISTICAS. PROCESADOR: Modelo Intel Core i7-1265G7\n" +
            "Frecuencia: Hasta 4.7 GHz\n" + "SISTEMA OPERATIVO" +":\n" + "Windows 11 Home PUERTOS: 2 x USB 3.2 Gen 2 Type-C (uno con DisplayPort 1.4 y Power Delivery)\n" +
            "2 x USB 3.2 Gen 1 Type-A\n" +
            "1 x HDMI 2.0b\n" +
            "1 x conector de audio combinado\n" +
            "1 x puerto de carga"
    },
    
    laptop3: {

        name: "ASUS Vivobook S 15 (S5507)",
        image: "imagenes/asus.png" ,
        features: "CARACTERISTICAS. PROCESADOR: Modelo Snapdragon® X Elite" +
            "Frecuencia: Hasta 3.4GHz\n" + "SISTEMA OPERATIVO" +":\n" + "Windows 11 Home ASUS recomienda PUERTOS: 2 x USB 3.2 Gen 1 Type-A \n" +
            "2x USB 4.0 Gen 3 Type-C" (uno con DisplayPort 1.4 y Power Delivery) +
            "1x HDMI 2.1 TMDS\n" +
            "1 x conector de audio combinado\n" +
            "1 x puerto de carga"
    },
    
     laptop4: {

        name: "ASUS X515",
        image: "imagenes/asus.png" ,
        features: "CARACTERISTICAS. PROCESADOR: Modelo Intel® Core™ i5-1035G1" +
            "Frecuencia: Hasta 3,6 GHz\n" + "SISTEMA OPERATIVO" +":\n" + "Windows 11 Home PUERTOS: 1 x USB 3.2 Gen 1 Type-A \n" +
            "1x USB 3.2 Gen 1 Tipo C" +
            "1x HDMI 2.1 TMDS\n" +
            "1 x conector de audio combinado\n" +
            "1 x puerto de carga"
    },
    
     laptop5: {

        name: "ASUS Zenbook S 16 (UM5606)",
        image: "imagenes/asus.png" ,
        features: "CARACTERISTICAS. PROCESADOR: Modelo AMD Ryzen™ AI 9 HX 370" +
            "Frecuencia: Hasta 5,1 GHz\n" + "SISTEMA OPERATIVO" +":\n" + "Windows 11 Home PUERTOS: 1 x USB 3.2 Gen 2 Type-A \n" +
            "2x USB 4.0 Gen 3 Type-C support display / power delivery" +
            "1x HDMI 2.1 TMDS\n" +
            "1 x conector de audio combinado\n" +
            "1 x puerto de carga"
    }
    // Agregar más laptops según sea necesario
};

function showDetails(laptopId) {
    const modal = document.getElementById("modal");
    const details = laptops[laptopId];
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

function addToCart(laptopId, event) {
    event.stopPropagation();
    alert(`${laptops[laptopId].name} ha sido agregado al carrito.`);
}
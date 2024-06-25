/* global accesories, accesoriespId */

const accesories = {
    accesories1: {

        name: "Xtech - Notebook stand - XTA-160",
        image: "imagenes/ventilador.png" ,
        features: "CARACTERISTICAS. Tipo de producto: Base con ventilador para laptops\n" +
            "Tamaños compatibles de laptops: Hasta 17 pulgadas\n" + "Número de ventiladores: 6" +":\n" + "Velocidad de cada ventilador: 1800-2000RPM\n" +
            "Entrada de CC: USB de 5V" +
            "Tamaño de cada ventilador: 80x80x10mm" +
            "Efectos de iluminación: Sí, LED azul\n\n" +
            "Voltaje de funcionamiento de cada ventilador: 5 VCC"
    },
    accesories2: {
        name: "Control Inalámbrico Dualsense Galactic Purple G0006617",
        image: "imagenes/asus2.png",
        features: "CARACTERISTICAS. Model DualSense\n" +
            "Color Galactic purple\n" + "Es inalámbrico" +":\n" + "Con Bluetooth Largo x Ancho x Altura 19 cm x 16 cm x 6.6 cm\n" +
            "Conectores de salida Jack 3.5 mm" +
            "Conectores de entrada USB-C" +
            "Dispositivos compatibles Computadoras, PlayStation 5, Tablets, Televisores, TV box\n" +
            "Sistemas operativos compatibles Android 12, iOS 14.5, MacOS Big Sur 11.3"
    },
    
    accesories3: {

        name: "Logitech G G Series G435 G435",
        image: "imagenes/diademas.png" ,
        features: "CARACTERISTICAS. Alcance inalámbrico de 10 m" +
            "Modo manos libres incluido" + "Con micrófono incorporado" +":\n" + "El largo del cable es de 3.2m Uso apto para juegos \n" +
            "Posee 2 micrófonos para llamadas de voz más nítidas." +
            "Tamaño del altavoz: 40mm\n" +
            "Resistentes al polvo\n" +
            "Duración de la batería: 18 h"
    },
    
     accesories4: {

        name: "Wireless USB Gaming Mouse",
        image: "imagenes/raton.png" ,
        features: "CARACTERISTICAS. Botones programables " +
            "Controla tu propia velocidad a tu voluntad: 5 niveles de DPI pulsando el botón debajo\n" + "Retroiluminación cambiable de 7 colores" +":\n" + "7 colores de luz LED \n" +
            "6 botones programables:" +
            "Tecnología de conectividad USB\n" +
            "Tecnología de detección de movimiento Óptica\n"
            
    },
    
     accesories5: {

        name: "Monitor 49 Odyssey G9 OLED",
        image: "imagenesEquipos/pantalla.png" ,
        features: "CARACTERISTICAS. Una pantalla curva de 49 pulgadas y una relación de pantalla 32:9" +
            "frecuencia de refresco 240Hz\n" + "0.03ms(GtG) de tiempo de respuesta" +":\n" + "Pantalla 49 in QD-OLED 5120 X 1440 pixeles\n" +
            "Angulo de vision (H/V) 178/178" +
            "Frecuencia de actualizacion 48Hz - 240Hz\n" +
            "Brillo y luminosidad: 250 cd/m2\n" +
            "Peso: 9,2kg"
    }
    // Agregar más laptops según sea necesario
};

function showDetails(accesoriesId) {
    const modal = document.getElementById("modal");
    const details = accesories[accesoriesId];
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

function addToCart(acceseoriesId, event) {
    event.stopPropagation();
    alert(`${accesories[accesoriespId].name} ha sido agregado al carrito.`);
}


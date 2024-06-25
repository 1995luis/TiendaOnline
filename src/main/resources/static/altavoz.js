/* global altavoz */

const altavoz = {
    altavoz1: {

        name: "Logitech Z407 - Sistema de Parlantes 2.1 Subwoofe",
        image: "imagenes/alt1.png" ,
        features: "CARACTERISTICAS. Tipo de parlante: subwoofer." +
            "Con conectividad bluetooth\n" + "Potencia de 40W" + "Viene con un micrófono de accesorio\n" +
            "Conector de entrada: USB-A" +
            "Cantidad de parlantes: 3" +
            "Dimensiones: 234mm de ancho, 240mm de alto y 180mm de profundidad\n" +
            "Peso: 389.6 g"
    },
    altavoz2: {
        name: "Logitech Z323, Altavoces 2.1 Con Sonido Pleno De 360",
        image: "imagenes/alt2.jpg",
        features: "CARACTERISTICAS. Modelo Z323\n" +
            "Tipo de parlante: mesa\n" + "Potencia de 30W" + "Cantidad de parlantes: 3.n" +
            "Dimensiones: 8.7cm de ancho, 20.3cm de alto y 13.5cm de profundidad." +
            "Configuración de canales 2.1" +
            "Distorsión 10%" +
            "Ancho x Profundidad x Altura 8.7 cm x 13.5 cm x 20.3 cm"
    },
    
    altavoz3: {

        name: "Logitech Z906, Altavoces 5.1",
        image: "imagenes/alt3.jpg" ,
        features: "CARACTERISTICAS. Modelo 980-000467" +
            "Potencia de 500W" + "Conector de entrada: 3.5 mm" +"Incluye control remoto\n" + "Cantidad de parlantes: 6\n" +
            "Configuración de canales 5.1" +
            "Voltaje 110V/240V" +
            "Formato del parlante Caja\n" +
            "Lugares de colocación Mueble, Repisa, Escritorio"
    },
    
     altavoz4: {

        name: "Logitech Combo: Altavoces Z906 ",
        image: "imagenes/alt4.jpg" ,
        features: "CARACTERISTICAS. SUBWOOFER Altura x Anchura x Profundidad: 293 mm x 281 mm x 319 mm Peso: 9 kg " +
            "ALTAVOCES SATÉLITE" + "CONSOLA DE CONTROL Altura x Anchura x Profundidad: 293 mm x 281 mm" +"Total de vatios reales (RMS): 500 W\n" + "Subwoofer: 165 W\n" +
            "Altavoces satélite: 4 x 67 W, montaje en pared" +
            "Dos cables de 7,6 metros para los altavoces satélite posteriores\n" +
            "Entrada RCA: 1 Entrada de 3,5 mm: 1\n" +
            "Cable de entrada directa para seis canales Documentación del usuario"
    },
    
     altavoz5: {

        name: "Genius Mini Barra Sonido Soundbar 100 Usb",
        image: "imagenes/alt5.jpg" ,
        features: "CARACTERISTICAS. Modelo USB Soundbar 100" +
            "Tipos de parlante: Medio\n" + "Potencia de salida (RMS) 6 W" +"Tipos de filtros del parlante Profesional\n" + "Cantidad de parlantes 1" +
            "Formato del parlante Barra Sonido" +
            "Es portátil Si" +
            "Peso 0.476 kg\n"
    }
    // Agregar más laptops según sea necesario
};

function showDetails(altavozId) {
    const modal = document.getElementById("modal");
    const details = altavoz[altavozId];
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

function addToCart(altavozId, event) {
    event.stopPropagation();
    alert(`${altavoz[altavozId].name} ha sido agregado al carrito.`);
}





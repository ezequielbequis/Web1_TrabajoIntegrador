const juegosDestacados = [];

const tlou2 = {
    nombre: "The Last of Us: Parte 2",
    categorias: ["Acción", "Disparos", "Zombies"],
    precio: "$59.99 USD",

    src: "resources/img/TLOU2-Destacados.jpg",
    alt: "Imagen del juego The Last of Us: Parte 2",
    link: "sites/the_last_of_us_parte_2.html"
};

juegosDestacados.push(tlou2);

const spiderman_mm = {
    nombre: "Spider-Man: Miles Morales",
    categorias: ["Acción", "Aventura", "Superhéroes"],
    precio: "$49.99 USD",

    src: "resources/img/SpidermanMM-Destacados.jpg",
    alt: "Imagen del juego Marvel's Spider-Man: Miles Morales",
    link: "sites/spiderman_miles_morales.html"
}

juegosDestacados.push(spiderman_mm);

const bm_wukong = {
    nombre: "Black Myth: Wukong",
    categorias: ["Acción", "Aventura", "Mitología"],
    precio: "$39.99 USD",

    src: "resources/img/BM-Wukong-Destacados.jpg",
    alt: "Imagen del juego Black Myth: Wukong",
    link: "sites/black_myth_wukong.html"
}

juegosDestacados.push(bm_wukong);

const forza_horizon5 = {
    nombre: "Forza Horizon 5",
    categorias: ["Carreras", "Deportes", "Mundo Abierto"],
    precio: "$32.78 USD",

    src: "resources/img/ForzaHorizon5-Destacados.jpg",
    alt: "Imagen del juego Forza Horizon 5",
    link: "sites/forza_horizon_5.html"
}

juegosDestacados.push(forza_horizon5);

const resident_evil_4 = {
    nombre: "Resident Evil 4 Remake",
    categorias: ["Terror", "Supervivencia", "Acción"],
    precio: "$29.00 USD",

    src: "resources/img/ResidentEvil4-Destacados.jpg",
    alt: "Imagen del juego Resident Evil 4 Remake",
    link: "sites/resident_evil_4_remake.html"
}

juegosDestacados.push(resident_evil_4);

const death_stranding_2 = {
    nombre: "Death Stranding 2",
    categorias: ["Acción", "Aventura", "Ciencia Ficción"],
    precio: "$69.99 USD",

    src: "resources/img/DeathStranding2-Destacados.jpg",
    alt: "Imagen del juego Death Stranding 2",
    link: "sites/death_stranding_2.html"
}

juegosDestacados.push(death_stranding_2);

const god_of_war_ragnarok = {
    nombre: "God of War: Ragnarok",
    categorias: ["Acción", "Aventura", "Mitología Nórdica"],
    precio: "$59.99 USD",

    src: "resources/img/GodOfWarRagnarok-Destacados.jpg",
    alt: "Imagen del juego God of War: Ragnarok",
    link: "sites/god_of_war_ragnarok.html"
}

juegosDestacados.push(god_of_war_ragnarok);

const sons_of_the_forest = {
    nombre: "Sons of the Forest",
    categorias: ["Terror", "Supervivencia", "Aventura"],
    precio: "$14.99 USD",

    src: "resources/img/SonsOfTheForest-Destacados.jpg",
    alt: "Imagen del juego Sons of the Forest",
    link: "sites/sons_of_the_forest.html"
}

juegosDestacados.push(sons_of_the_forest);





// Contador
var i = 0;

function cargarJuegoDestacado() {
    // Imagenes
    console.log("Empezo en: " + i);
    let imagenesDestacados = document.getElementById("img-JuegosDestacados");

    // Titulo
    let tituloDestacados = document.getElementById("titulo-JuegosDestacados");

    // Carga de imagen y alt
    imagenesDestacados.src = juegosDestacados[i].src;
    imagenesDestacados.alt = juegosDestacados[i].alt;

    // Carga de titulo
    tituloDestacados.textContent = juegosDestacados[i].nombre;

    // Carga de categorias
    let categorias = [];

    for (let j = 0; j < 3; j++) {
        categorias[j] = document.getElementById("categoria-" + (j + 1));
        categorias[j].textContent = juegosDestacados[i].categorias[j];
    }

    // Carga de precio
    let precioDestacados = document.getElementById("precio-JuegosDestacados");
    precioDestacados.textContent = juegosDestacados[i].precio;

    // Carga de link en titulo e imagen
    tituloDestacados.href = juegosDestacados[i].link;
    let linkImgDestacados = document.getElementById("link-img-destacados");
    linkImgDestacados.href = juegosDestacados[i].link;

    // Cuando llegue al maximo vuelve a 0
    if (i >= juegosDestacados.length) {
        i = 0;
    }
    console.log("Termino en: " + i + "\n");
}

cargarJuegoDestacado();

function retrocederJuegoDestacado() {
    // Decrementa el contador
    i--;
    // Cuando llegue a menos de 0 vuelve al maximo
    if (i < 0) {
        i = juegosDestacados.length - 1;
    }
    cargarJuegoDestacado();
} 

function avanzarJuegoDestacado() {
    // Incrementa el contador
    i++;
    // Cuando llegue al maximo vuelve a 0
    if (i >= juegosDestacados.length) {
        i = 0;
    }
    cargarJuegoDestacado();
}




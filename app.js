let salud;
let tratamiento = 0;
let cantidad;
let i;

alert("Bienvenido al centro Pokemon, nos encargamos del cuidado de sus pokemons.")
ingresoSalud(salud, tratamiento, cantidad, i);

function ingresoSalud(salud) {
    salud = prompt("Ingrese los puntos de salud (PS) de su pokemon (valor entre 0 y 100):");

    while (salud < 0 || salud > 100 || salud == " ") {
        salud = prompt("Ingrese un valor valido, entre 0 y 100, para los PS:");
    }
    if (salud == 100) {
        console.log("Su pokemon esta en perfecto estado, no requiere de nuestros servicios.");
        pokemonSano();
    } else {
        ingresoTratamiento(tratamiento);
    }
}

function pokemonSano() {
    console.log("Los puntos de salud actuales de su pokemon son: 100");
}

function ingresoTratamiento(tratamiento) {
    tratamiento = prompt("Seleccione que tratamiento darle a su pokemon:\n 1- Pocion (restaura 20 PS);\n 2- Superpocion (restaura 60 PS);\n 3- Sanacion completa;");
    while (tratamiento != 1 && tratamiento != 2 && tratamiento != 3) {
        tratamiento = prompt("Seleccione una opcion valida:\n 1- Pocion (restaura 20 PS);\n 2- Superpocion (restaura 60 PS);\n 3- Sanacion completa;\n");
    }
    sanacion(salud, tratamiento, cantidad, i);
}

function sanacion(salud, tratamiento, cantidad, i) {
    if (tratamiento == 1) {
        cantidad = prompt("¿Cuantas pociones desea aplicarle a su pokemon?");
        for (i = 1; i <= cantidad; i = i + 1) {
            salud = salud + 20;
        }
        resultado(salud, cantidad, tratamiento);
    }

    if (tratamiento == 2) {
        cantidad = prompt("¿Cuantas superpociones desea aplicarle a su pokemon?");
        for (i = 1; i <= cantidad; i = i + 1) {
        salud = salud + 60;
        }
        resultado(salud,cantidad, tratamiento);
    } 

    if (tratamiento == 3) {
        salud = 100;
        resultado(salud, cantidad, tratamiento);
    }
}

function resultado(salud, cantidad, tratamiento) {
    if ((tratamiento == 1) && (salud >= 100)) {
        console.log(`Felicitaciones, el tratamiento ha finalizado. Se aplicaron: ${cantidad} pocion/es a su pokemon`);
        console.log(`Los puntos de salud actuales de su pokemon son: 100`);
        }   else if ((tratamiento == 1) && (salud < 100)) {
            console.log(`Felicitaciones, el tratamiento ha finalizado. Se aplicaron: ${cantidad} pocion/es a su pokemon.`)
            console.log(`Los puntos de salud actuales de su pokemon son: ${salud}`);
    }

/*     if (tratamiento == 2 && salud >= 100) {
        console.log(`Felicitaciones, el tratamiento ha finalizado. Se aplicaron: ${cantidad} superpocion/es a su pokemon.`)
        console.log("Los puntos de salud actuales de su pokemon son: 100");
        }  else if (tratamiento == 2 && salud < 100) {
            console.log(`Felicitaciones, el tratamiento ha finalizado. Se aplicaron: ${cantidad} superpocion/es a su pokemon.`)
            console.log(`Los puntos de salud actuales de su pokemon son: ${salud}`);
    } */

    if (tratamiento == 3) {
        console.log("Felicitaciones, el tratamiento ha finalizado.")
        console.log(`Los puntos de salud actuales de su pokemon son: ${salud}`);
    }
}
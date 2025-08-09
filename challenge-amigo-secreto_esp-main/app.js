// Lista global de nombres
let listaAmigos = [];

// Agregar un amigo
function agregarAmigo() {
    const inputNombre = document.querySelector("#amigo");
    const nombre = inputNombre.value.trim();

    // Validar que no esté vacío
    if (!nombre) {
        alert("Por favor escribe un nombre válido.");
        limpiarCampo(inputNombre);
        return;
    }

    // Validar que no sea solo números
    if (!isNaN(nombre)) {
        alert("No se permiten solo números. Escribe un nombre.");
        limpiarCampo(inputNombre);
        return;
    }

    // Validar que solo contenga letras y espacios
    const soloLetrasYespacios = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloLetrasYespacios.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        limpiarCampo(inputNombre);
        return;
    }

    // Validar que no esté repetido (ignorando mayúsculas)
    if (listaAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Ese nombre ya está en la lista.");
        limpiarCampo(inputNombre);
        return;
    }

    // Agregar a la lista
    listaAmigos.push(nombre);
    console.log("Lista actualizada:", listaAmigos);

    // Mostrar lista actualizada
    mostrarLista();

    // Limpiar campo
    limpiarCampo(inputNombre);
}

// Mostrar la lista en pantalla
function mostrarLista() {
    const ul = document.querySelector("#listaAmigos");
    ul.innerHTML = ""; // Limpiar lista

    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });

    if (listaAmigos.length > 0) {
        console.log("Ya hay nombres en la lista.");
    } else {
        console.log("La lista está vacía.");
    }
}

// Sortear un amigo
function sortearAmigo() {
    if (!puedeSortear()) return;

    // Elegir un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    console.log("Amigo sorteado:", amigoSorteado);

    // Mostrar resultado en pantalla
    const ulResultados = document.querySelector("#resultado");
    ulResultados.innerHTML = ""; // Limpiar resultados anteriores

    const li = document.createElement("li");
    li.textContent = `🎉 Tu amigo secreto es: ${amigoSorteado} `;
    ulResultados.appendChild(li);
}

// Validar si se puede sortear
function puedeSortear() {
    if (listaAmigos.length === 0) {
        alert("Primero agrega al menos un nombre para poder sortear.");
        return false;
    }
    return true;
}

// Función para limpiar un campo de texto
function limpiarCampo(input) {
    input.value = "";
    input.focus();
}

// Mostrar resultados en pantalla usando <ul id="resultado">
function mostrarResultados(sorteos) {
    const ulResultados = document.querySelector("#resultado");
    ulResultados.innerHTML = ""; // Limpiar resultados anteriores

    for (const [amigo, asignado] of Object.entries(sorteos)) {
        const li = document.createElement("li");
    }
}


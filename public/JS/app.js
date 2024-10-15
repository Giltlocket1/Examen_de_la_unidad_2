const diccionario = {
    "algoritmo": ["procedimiento", "código"],
    "base de datos": ["almacenamiento", "repositorio"],
    "servidor": ["host", "nodo"],
    "desarrollo": ["creación", "programación"],
    "interfaz": ["pantalla", "UI"],
    "usuario": ["cliente", "consumidor"],
    "seguridad": ["protección", "defensa"],
    "hardware": ["equipo", "dispositivo"],
    "software": ["aplicación", "programa"],
    "internet": ["red", "conexión"],
    "programación": ["codificación", "desarrollo"],
    "inteligencia artificial": ["IA", "aprendizaje automático"],
    "tecnología": ["ciencia", "innovación"],
    "redes": ["conectividad", "sistemas"],
    "criptografía": ["cifrado", "seguridad de datos"]
};

$(document).ready(() => {
    const mostrarDiccionario = () => {
        const listaDiccionario = $("#diccionarioPalabras");
        listaDiccionario.empty();
        for (let palabra in diccionario) {
            listaDiccionario.append(`<li class="list-group-item">${palabra} - Sinónimos: ${diccionario[palabra].join(", ")}</li>`);
        }
    };

    const buscarYMostrarSinonimos = () => {
        const palabraBuscada = $("#inputPalabra").val().toLowerCase();
        const selectSinonimos = $("#selectSinonimos");

        selectSinonimos.empty();
        selectSinonimos.append('<option value="">Selecciona un sinónimo</option>');

        if (diccionario[palabraBuscada]) {
            const sinonimos = diccionario[palabraBuscada];
            sinonimos.forEach(sinonimo => {
                selectSinonimos.append(`<option value="${sinonimo}">${sinonimo}</option>`);
            });

            $("#alertaError").hide();
        } else {
            $("#alertaError").show();
        }
    };

   
    const reemplazarConSinonimo = () => {
        const textoOriginal = $("#inputTexto").val().toLowerCase();
        const palabraBuscada = $("#inputPalabra").val().toLowerCase();
        const sinonimoSeleccionado = $("#selectSinonimos").val();

        if (sinonimoSeleccionado) {
            const textoModificado = textoOriginal.replace(new RegExp(palabraBuscada, 'g'), sinonimoSeleccionado);
            $("#inputTexto").val(textoModificado);
        } else {
            alert("Por favor selecciona un sinónimo para reemplazar.");
        }
    };

    const limpiarCampos = () => {
        $("#inputTexto").val("");
        $("#inputPalabra").val("");
        $("#selectSinonimos").empty();
        $("#alertaError").hide();
    };
    $("#btnBuscar").on("click", buscarYMostrarSinonimos);
    $("#btnReemplazar").on("click", reemplazarConSinonimo);
    $("#btnLimpiar").on("click", limpiarCampos);

    mostrarDiccionario();
});

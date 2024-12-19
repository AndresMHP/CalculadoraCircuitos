function CalcularCorrienteYPotencia() {
    // Obtener valores de los inputs
    var voltaje = document.getElementById('voltaje').value;
    var resistencia1 = document.getElementById('resistencia1').value;
    var resistencia2 = document.getElementById('resistencia2').value;
    var tipoConexion = document.getElementById('conexion').value;  

    // Verificar que los valores sean válidos
    if (voltaje === "" || resistencia1 === "" || resistencia2 === "") {
        alert("Por favor ingresa el voltaje y ambas resistencias.");
        return;
    }

    voltaje = parseFloat(voltaje);
    resistencia1 = parseFloat(resistencia1);
    resistencia2 = parseFloat(resistencia2);

    // Verificar que las resistencias sean mayores a 0 ohmnios
    if (resistencia1 <= 0 || resistencia2 <= 0) {
        alert("Ingresa resistencias positivas.");
        return;
    }

    var resistenciaTotal;

    if (tipoConexion === "serie") {
        // Conexión en serie: Rt = R1 + R2
        resistenciaTotal = resistencia1 + resistencia2;
    } else {tipoConexion  === "paralelo"
        //Conexion en paralelo Rt= (R1 + R2) / (R1 * R2)
        alert("Solo estamos calculando para conexiones en serie en este momento.");
        return;
    }

    // Calcular la corriente (I = V / Rt)
    var corriente = voltaje / resistenciaTotal;

    // Calcular la potencia (P = I^2 * Rt)
    var potencia = Math.pow(corriente, 2) * resistenciaTotal;

    // Mostrar los resultados
    document.getElementById('corriente').innerText = "Corriente: " + corriente.toFixed(2) + " A";
    document.getElementById('potencia').innerText = "Potencia: " + potencia.toFixed(2) + " W";
}

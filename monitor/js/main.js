//alert("Hola Mundo");

let mensaje = document.getElementById("respuesta");

function callApiRequest() {

    // Hacer una petición para un usuario con ID especifico
    axios.get("http://18.223.135.139/iot-car-control/back-end/apis/getRegistro.php")
        .then(function (response) {
            // manejar respuesta exitosa
            console.log(response);
            let respuestaServidor = 
            response.data =="F"
            ? "ADELANTE"
            : response.data == "B"
            ? "ATRAS"
            : response.data == "L"
            ? "IZQUIERDA"
            : response.data == "R"
            ? "DERECHA"
            : "DETENER";
            
            respuesta.innerHTML = "Ultima respuesta: <strong> " + respuestaServidor;
        })
        .catch(function (error) {
            // manejar error
            console.log(error);
        })
        .finally(function () {
            // siempre sera executado
        });

}

setInterval(callApiRequest, 2000);



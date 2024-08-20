function calcularDescuento() {
    const cocheSeleccionado = document.getElementById("coche").value;
    let descuento;

    switch (cocheSeleccionado) {
        case "FORD FIESTA":
            descuento = 5;
            break;
        case "FORD FOCUS":
            descuento = 10;
            break;
        case "FORD ESCAPE":
            descuento = 20;
            break;
        default:
            descuento = 0;
            break;
    }

    const mensaje = `
        <strong>Coche seleccionado:</strong> ${cocheSeleccionado}<br>
        <strong>Descuento aplicado:</strong> ${descuento}%`;

    document.getElementById("resultado").innerHTML = mensaje;
}

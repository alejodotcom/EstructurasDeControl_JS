function calcularAumento(categoria) {
    const aumentos = {
        'A': 0.15,
        'B': 0.30,
        'C': 0.10,
        'D': 0.20
    };
    return aumentos[categoria.toUpperCase()] || 0;
}

// Datos del empleado
const nombreEmpleado = "Ana García";
const salario = 1200;
const categoria = 'B';

const aumento = calcularAumento(categoria);
const nuevoSalario = salario + (salario * aumento);

// Mostrar los datos del empleado y el aumento salarial
console.log("Nombre del empleado:", nombreEmpleado);
console.log("Salario base:", salario.toFixed(2));
console.log("Categoría:", categoria);
console.log("Porcentaje de aumento:", (aumento * 100) + "%");
console.log("Nuevo salario con aumento:", nuevoSalario.toFixed(2));

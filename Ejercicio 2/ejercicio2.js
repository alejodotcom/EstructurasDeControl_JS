function calcularNotaFinal(examen, tareas, asistencia, investigacion) {
    return (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
}

// Datos del alumno
const nombre = "Juan Pérez";
const carnet = "A12345";
const examen = 80;
const tareas = 90;
const asistencia = 100;
const investigacion = 85;

const notaFinal = calcularNotaFinal(examen, tareas, asistencia, investigacion).toFixed(2);

// Mostrar los datos del alumno
console.log("Nombre del alumno:", nombre);
console.log("Carnet del alumno:", carnet);
console.log("Nota Final:", notaFinal);

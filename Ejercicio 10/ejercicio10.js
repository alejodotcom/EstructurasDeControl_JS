function calculateAverage(ages) {
    let sum = ages.reduce((a, b) => a + b, 0);
    return sum / ages.length;
}

function compareTurnos(morning, afternoon, night) {
    let avgMorning = calculateAverage(morning);
    let avgAfternoon = calculateAverage(afternoon);
    let avgNight = calculateAverage(night);
    
    console.log(`Promedio de edades - Mañana: ${avgMorning}`);
    console.log(`Promedio de edades - Tarde: ${avgAfternoon}`);
    console.log(`Promedio de edades - Noche: ${avgNight}`);
    
    if (avgMorning > avgAfternoon && avgMorning > avgNight) {
        console.log("El turno de mañana tiene el promedio de edades mayor.");
    } else if (avgAfternoon > avgMorning && avgAfternoon > avgNight) {
        console.log("El turno de tarde tiene el promedio de edades mayor.");
    } else if (avgNight > avgMorning && avgNight > avgAfternoon) {
        console.log("El turno de noche tiene el promedio de edades mayor.");
    } else {
        console.log("Hay empates en los promedios de edades.");
    }
}

// Ejemplo
compareTurnos([20, 22, 21, 23, 24], [30, 31, 29, 32, 33, 34], [40, 42, 41, 43, 44, 45, 46, 47, 48, 49, 50]);
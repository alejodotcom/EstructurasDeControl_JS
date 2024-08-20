function processIntegers(values) {
    let negativeCount = 0;
    let positiveCount = 0;
    let multiplesOf15 = 0;
    let evenSum = 0;

    values.forEach(value => {
        if (value < 0) negativeCount++;
        else if (value > 0) positiveCount++;
        
        if (value % 15 === 0) multiplesOf15++;
        if (value % 2 === 0) evenSum += value;
    });

    console.log(`Cantidad de valores negativos: ${negativeCount}`);
    console.log(`Cantidad de valores positivos: ${positiveCount}`);
    console.log(`Cantidad de múltiplos de 15: ${multiplesOf15}`);
    console.log(`Suma de números pares: ${evenSum}`);
}

// Ejemplo
processIntegers([1, -2, 15, 30, -45, 60, -7, 8, 10, 12]);

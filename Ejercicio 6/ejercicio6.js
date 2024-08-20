function calculateTravelDiscount(origin, destination) {
    let discount;
    
    if (origin === 'Palma') {
        switch (destination) {
            case 'La costa del Sol':
                discount = 5;
                break;
            case 'Panchimalco':
                discount = 10;
                break;
            case 'Puerto el Triunfo':
                discount = 15;
                break;
            default:
                discount = 0;
                break;
        }
    } else {
        discount = 0;
    }
    
    console.log(`Descuento: ${discount}%`);
}

// Ejemplo
calculateTravelDiscount('Palma', 'Puerto el Triunfo');

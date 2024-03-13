interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let extra of extras) {
        car[extra[0]] = extra[1];
    }

    return car;
}let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2024]);

console.log(myCar);


carApp.factory("cars", function(Car) {
    var cars = [];

    function getAll() {
        return cars;
    }

    function getCarById(index) {
        return cars[index];
    }

    function addCar(car) {
        cars.push(car);
    }

    function setCars(carsPlain) {
        cars = [];
        for (var i = 0; i < carsPlain.length; i++) {
            cars.push(new Car(carsPlain[i].brand, carsPlain[i].model, 
                carsPlain[i].year, carsPlain[i].km))
        }
    }

    return {
        getAll: getAll,
        getCarById: getCarById,
        addCar: addCar,
        setCars: setCars
    }
})

carApp.factory("cars", function (Car, $http, $q) {
    var cars = [];
    var wasLoaded = false;

    function getAll() {
        // Creating a promise object
        var deferred = $q.defer();

        if (wasLoaded) {
            deferred.resolve(cars);
        } else {
            wasLoaded = true;
            // http call to get data from json
            $http.get("app/model/data/cars.json").then(function mySuccess(response) {
                // Updating the service with the data
                setCars(response.data);

                // Returning a successful async response with the cars
                deferred.resolve(cars);
            }, function myError(response) {
                // Retrurning an error async response
                deferred.reject(response);
            });
        }

        // Returning a promise to get an async response later
        return deferred.promise;
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
var carApp = angular.module("carApp", ["ngRoute", "googlechart"]);

carApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/cars", {
        templateUrl: "app/gallery/carGallery.html",
        controller: "carGalleryCtrl"
    })
    .when("/cars/:index", {
        templateUrl: "app/details/carDetails.html",
        controller: "carDetailsCtrl"        
    })
    .when("/charts", {
        templateUrl: "app/charts/charts.html",
        controller: "chartsCtrl"
    })    
})


carApp.controller("TestCtrl", function(Car, cars) {
    var car = new Car("ddd", "ddaa", 2022, 232323);
    console.log(car);

    var carsPlain = [{
        "brand": "Toyota",
        "model": "Yaris",
        "year": 2002,
        "km": 500000
      },
      {
        "brand": "Honda",
        "model": "Civic",
        "year": 2012,
        "km": 50000
      },
      {
        "brand": "Mercedes",
        "model": "S500",
        "year": 2017,
        "km": 50000
      },
      {
        "brand": "Subaru",
        "model": "B4",
        "year": 2007,
        "km": 250000
      }
    ];

    cars.setCars(carsPlain);
    cars.addCar(car);
    console.log(cars.getAll());
    console.log(cars.getCarById(0));

});
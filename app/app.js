var carApp = angular.module("carApp", ["ngRoute"]);

carApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
})


carApp.controller("TestCtrl", function(Car) {
    var car = new Car("ddd", "ddaa", 2022, 232323);
    console.log(car);
});
var carApp = angular.module("carApp", ["ngRoute"]);

carApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
})
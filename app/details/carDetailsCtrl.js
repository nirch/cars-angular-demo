
carApp.controller("carDetailsCtrl", function($scope, cars, $log, $routeParams){
    //$scope.test = $routeParams.index;

    $scope.car = cars.getCarById($routeParams.index);
})
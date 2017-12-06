
carApp.controller("carGalleryCtrl", function ($scope, cars, $log, $http, $location) {
  //$scope.test = "ewewew";

  cars.getAll().then(function mySuccess(data) {
    $scope.cars = data;
  }, function myError(responseError) {
    alert(JSON.stringify(responseError));
  });

  $scope.addCar = function () {
    cars.addCar(new Car("Susita", "Carmel", "1972", 12022939));
    $scope.cars = cars.getAll();
  }

  $scope.sortBy = function (prop) {
    $scope.orderProp = prop;
  }


  // Custom filter function
  $scope.filterBrandAndModel = function (car) {
    if ($scope.query == undefined || $scope.query === "") {
      return true;
    }

    var queryLowerCase = $scope.query.toLowerCase();
    var brand = car.brand.toLowerCase();
    var model = car.model.toLowerCase();

    if (brand.includes(queryLowerCase) ||
      model.includes(queryLowerCase)) {
      return true;
    } else {
      return false;
    }
  }

  $scope.openCar = function (car) {
    // Getting the index of the car in the array
    var carIndex = $scope.cars.indexOf(car);

    // Updating the URL
    $location.path("/cars/" + carIndex)
  }





})
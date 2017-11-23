
carApp.controller("carGalleryCtrl", function($scope, cars, $log, $http) {
    //$scope.test = "ewewew";

    // http call to get data from json
    $http.get("app/model/data/cars.json").then(function mySuccess(response) {
        // Updating the service with the data
        cars.setCars(response.data);

        // Getting the data from the service
        $scope.cars = cars.getAll();
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      });

    
    
})
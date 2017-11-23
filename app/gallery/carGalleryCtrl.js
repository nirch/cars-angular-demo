
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

    $scope.addCar = function() {
        cars.addCar(new Car("Susita", "Carmel", "1972", 12022939));
        $scope.cars = cars.getAll();
    }
      
      $scope.sortBy = function(prop) {
        $scope.orderProp = prop;
      }
      
      
      // Custom filter function
      $scope.filterBrandAndModel = function(car) {
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
      
      $scope.selectCar = function (car) {
        car.selected = !car.selected;
      }
        

    
    
    
})
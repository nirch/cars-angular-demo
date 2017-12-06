carApp.controller("chartsCtrl", function ($scope, cars, $log) {
    $scope.myChartObject = {};

    $scope.myChartObject.type = "PieChart";

    cars.getAll().then(function mySuccess(data) {
        var newCars = 0;
        var oldCars = 0;
        for (var i = 0; i < data.length; i++) {
            var currentCar = cars.getCarById(i);
            if (currentCar.year >= 2010) {
                newCars++;
            } else {
                oldCars++;
            }
        }

        $scope.myChartObject.data = {
            "cols": [
                { id: "t", label: "New or Old", type: "string" },
                { id: "s", label: "Number of Cars", type: "number" }
            ], "rows": [
                {
                    c: [
                        { v: "New Cars (>2010)" },
                        { v: newCars },
                    ]
                },
                {
                    c: [
                        { v: "Old Cars" },
                        { v: oldCars },
                    ]
                }
            ]
        };        
    }, function myError(responseError) {
        alert(JSON.stringify(responseError));
    });





    $scope.myChartObject.options = {
        'title': 'New vs. Old Cars'
    };
});
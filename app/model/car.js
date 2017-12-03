
carApp.factory("Car", function() {
    
    // Car Constructor
    function Car(brand, model, year, km, purchaseDate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.km = km;
        this.purchaseDate = purchaseDate;
        //this.mile = convert.distance(this.km, "KM", "MILE");
        this.selected = false;
        this.kmPerYear = function() {
            var currentYear = new Date().getFullYear();
            return Math.round(this.km / (currentYear - this.year + 1));
        };
    }
    
    return Car;
  })
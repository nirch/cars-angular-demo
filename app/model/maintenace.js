// Maintenance Service
app.factory("Maintenance", function(convert) {
    
    // Maintenance Constructor
    function Maintenance(date, km, desc) {
        this.date = date;
        this.km = km;
        this.desc = desc;
    }
    
    return Maintenance;
  })
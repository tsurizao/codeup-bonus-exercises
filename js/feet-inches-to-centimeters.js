(function () {
    "use strict";

    // Given numbers of feet and inches, this function will convert feet and
    // inches to metric measurements.  Formatting cm to two decimal places.
    function feetAndInchesToMetric(numberOfFeet, numberOfInches) {
        if (!isNaN(parseFloat(numberOfFeet)) && !isNaN(parseFloat(numberOfInches))) {
            let totalCentimeters = ((Math.floor(parseFloat(numberOfFeet) * 12)) + parseFloat(numberOfInches)) * 2.54;
            let meters = Math.floor(totalCentimeters / 100);
            return meters + "m " + (totalCentimeters %= 100).toFixed(2) + "cm";
        } else {
            return "Please use valid numbers"
        }
    }


    // Given only one number for inches, this function will use the previous function
    // to convert inches to the metric system.
    function inchesToMetric(numberOfInches) {
        return feetAndInchesToMetric((Math.floor(numberOfInches / 12)), numberOfInches % 12);
    }
}());
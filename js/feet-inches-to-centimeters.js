(function () {
    "use strict";

    // Given integers of feet and inches, this function will convert feet and
    // inches to metric measurements.
    function calcFeetAndInchesToMetric(numberOfFeet, numberOfInches) {
        let totalInches = (Math.floor(parseFloat(numberOfFeet) * 12)) + parseFloat(numberOfInches);
        let totalCentimeters = totalInches * 2.54;
        let meters = Math.floor(totalCentimeters / 100);
        return meters + "m " + (totalCentimeters %= 100) + "cm";
    }


    // Given only one integer of inches, this function will use the previous function
    // to convert inches to the metric system.
    function inchesToMetric(numberOfInches) {
        return (numberOfInches >= 0 && !isNaN(parseFloat(numberOfInches)))
            ? calcFeetAndInchesToMetric((Math.floor(parseFloat(numberOfInches) / 12)), parseFloat(numberOfInches) % 12) : "Please use a valid number"
    }
}());
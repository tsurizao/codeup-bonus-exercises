(function () {

// this function will calculate the AREA of a circle given a RADIUS
    function circleAreaRadius(radius) {
        return radius <= 0 ? "Please provide positive radius." : radius * radius * Math.PI;
    }

// this function will calculate the AREA of a circle given a DIAMETER
    function circleAreaDiameter(diameter) {
        return diameter <= 0 ? "Please provide a positive diameter." : (diameter / 2) * (diameter / 2) * Math.PI;
    }

// this function will calculate the CIRCUMFERENCE of a circle given a RADIUS
    function circleCircumferenceRadius(radius) {
        return radius <= 0 ? "Please provide a positive radius." : radius * 2 * Math.PI;
    }

// this function will calculate the CIRCUMFERENCE of a circle given a DIAMETER
    function circleCircumferenceDiameter(diameter) {
        return diameter <= 0 ? "Please provide a positive diameter." : diameter * Math.PI;
    }
})();
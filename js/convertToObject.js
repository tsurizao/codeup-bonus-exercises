(function () {

    // Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with properties 'class' and 'students' convertToObjects("Intro to Programming, 20) returns {class: "Intro to Programming", students: 20}

    function convertToObjects(string, number) {
        return {string, number};
    }

    convertToObjects("Intro to Programming", 20);

    // =============================================================
    var neighborhood1 = {
        neighborhood: "Lovely Estates",
        medianHomePrice: 280000,
        pool: true,
        tennis: false,
        crimeRate: "low",
        schools: [
            {name: "ES1", rating: 8},
            {name: "MS2", rating: 6},
            {name: "HS3", rating: 8}
        ]
    }

    var neighborhood2 = {
        neighborhood: "Luminous Estates",
        medianHomePrice: 270000,
        pool: true,
        tennis: false,
        crimeRate: "low",
        schools: [
            {name: "ES1", rating: 8},
            {name: "MS2", rating: 8},
            {name: "HS3", rating: 8}
        ]
    }

    var neighborhood3 = {
        neighborhood: "Ginormous Ego Estates",
        medianHomePrice: 350000,
        pool: true,
        tennis: true,
        crimeRate: "low",
        schools: [
            {name: "ES1", rating: 9},
            {name: "MS2", rating: 9},
            {name: "HS3", rating: 9}
        ]
    }

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
    function isDesireable(neighborhood) {
        let schoolTotalRating = 0;
        for (let i = 0; i < neighborhood.schools.length; i++) {
            schoolTotalRating += neighborhood.schools[i].rating;
        }
        return neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate === "low" && schoolTotalRating >= 24
    }


    isDesireable(neighborhood1);
    isDesireable(neighborhood2);
    isDesireable(neighborhood3);

}());
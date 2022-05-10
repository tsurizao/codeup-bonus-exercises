(function () {

    let classes = [
        {
            class: "6th grade history",
            students: 18
        },
        {
            class: "7th grade history",
            students: 20
        },
        {
            class: "8th grade history",
            students: 22
        },
    ];

    function studentPerClassCalculator(arr) {
        let totalStudents = 0;
        let mostStudents = 0;
        let largestClass = "";
        for (let i = 0; i < classes.length; i++) {
            totalStudents += classes[i].students;
            if (classes[i].students > mostStudents) {
                mostStudents = classes[i].students;
                largestClass = classes[i].class;
            }
        }
        console.log(`Total students: ${totalStudents}.  Class with most students is: ${largestClass}`);
        return `Total students: ${totalStudents}.  Class with most students is: ${largestClass}`;
    }
    studentPerClassCalculator(classes);
}());
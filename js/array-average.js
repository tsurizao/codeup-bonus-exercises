(function () {
    let arr1 = [3, 5, 7, 10, 0];
    let arr2 = [0, 3, 5, 6, 21];

    // Return the average value of an array of numbers
    function arrayAverageCalculator(array){
        let total = 0;
        let count = 0;
        for(let i = 0; i < array.length;i++){
            total += array[i];
            count++;
        }
        return total / count;
    }
}());
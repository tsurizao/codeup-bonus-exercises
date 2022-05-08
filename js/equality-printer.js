(function () {
    // Determines whether all, some or none of the numbers are the equal.
    alert("I will check for equal numbers, please enter numeric digits.");
    let x = parseFloat(prompt("Enter the first numeric digit here."));
    let y = parseFloat(prompt("Enter the second numeric digit here."));
    let z = parseFloat(prompt("Enter the third numeric digit here."));
    function alertEquals(num1, num2, num3) {
        if (num1 === num2 && num2 === num3) {
            alert("All numbers are equal.");
        } else if (num1 !== num2 && num2 !== num3 && num3 !== num1) {
            alert("All numbers are different.");
        } else if (num1 === num2) {
            alert(`${num1} is equal to ${num2} but not ${num3}.`);
        } else if (num2 === num3) {
            alert(`${num2} is equal to ${num3} but not ${num1}.`);
        } else if (num1 === num3) {
            alert(`${num1} is equal to ${num3} but not ${num2}.`);
        } else {
            alert("Neither all are equal or different.");
        }
    }
    alertEquals(x, y, z);
}());
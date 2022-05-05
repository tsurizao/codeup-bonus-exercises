// ================================= WARM UP
//
// Consider an array of product objects:

const products = [
    {
        name: 'Hammer',
        priceInCents: 4500,
        isInStock: true
    },
    {
        name: 'Computer',
        priceInCents: 45000,
        isInStock: true
    },
    {
        name: 'Water Bottle',
        priceInCents: 3300,
        isInStock: true
    },
    {
        name: 'Car',
        priceInCents: 990000,
        isInStock: true
    },
    {
        name: 'Cup',
        priceInCents: 230,
        isInStock: false
    },
    {
        name: 'Book',
        priceInCents: 540,
        isInStock: false
    },
];
// Create the following functions that take in an array of product objects and return various values:
//
// returnMostExpensiveProductObjectInStock(products)
// returnLeastExpensiveProductObjectInStock(products)
// returnAveragePriceOfAllProductsInStock(products)
// returnProductObjectsNotInStock(products)

function returnMostExpensiveProductObjectInStock(products) {
    var mostExpensiveItem ="";
    var mostExpensive = 0;
    for (var i = 0; i < products.length; i++) {
        if (products[i].priceInCents > mostExpensive && products[i].isInStock === true) {
            mostExpensive = products[i].priceInCents;
            mostExpensiveItem = products[i].name;
        }
    }
    return mostExpensiveItem;
}

function returnLeastExpensiveProductObjectInStock(products) {
    var leastExpensiveItem = "";
    var leastExpensive = Number.MAX_VALUE;
    for (var i = 0; i < products.length; i++) {
        if (products[i].priceInCents < leastExpensive && products[i].isInStock === true) {
            leastExpensive = products[i].priceInCents;
            leastExpensiveItem = products[i].name;
        }
    }
    return leastExpensiveItem;
}

function returnAveragePriceOfAllProductsInStock(products) {
    var averagePrice = 0;
    var counter = 0;
    for (var i = 0; i < products.length; i++) {
        if (products[i].isInStock === true) {
            averagePrice += products[i].priceInCents;
            counter++;
        }
    }
    return averagePrice / counter;
}

function returnProductObjectsNotInStock(products) {
    var notInStock = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].isInStock === false) {
            notInStock.push(products[i].name)
        }
    }
    return notInStock;
}
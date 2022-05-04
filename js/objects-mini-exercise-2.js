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

function returnMostExpensiveProductObjectInStock(products){
    var mostExpensive = 0;
    for(var i = 0;i < products.length;i++){
        if(products[i].priceInCents > mostExpensive){
            mostExpensive = products[i].priceInCents;
        }
    }
    return mostExpensive;
}
function returnLeastExpensiveProductObjectInStock(products) {
    var leastExpensive = Number.MAX_VALUE;
    for(var i = 0;i < products.length;i++){
        if(products[i].priceInCents < leastExpensive){
            leastExpensive = products[i].priceInCents;
        }
    }
    return leastExpensive;
}
function returnAveragePriceOfAllProductsInStock(products){
    var averagePrice = 0;
    var counter = 0;
    for(var i = 0;i < products.length;i++){
        averagePrice += products[i].priceInCents;
        counter++;
    }
    return averagePrice/counter;
}
function returnProductObjectsNotInStock(products){
    var notInStock =[];
    for(var i = 0;i < products.length;i++){
        if(products[i].isInStock === false){
            notInStock.push(products[i].name)
        }
    }
    return notInStock;
}
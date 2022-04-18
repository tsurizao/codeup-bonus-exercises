//Mini Exercise #1

var beverages = [
    {
        brandName: 'Dr. Pepper',
        type: 'Soft Drink',
        volumeInLiters: 0.354882,
        priceInCents: .99,
        expirationDate: 2024,
        datesOfPreviousSips: ['1/17', '2/6'],
        isOpen: false,
    },
    {
        brandName: 'Sprite',
        type: 'Soft Drink',
        volumeInLiters: 0.354882,
        priceInCents: .99,
        expirationDate: 2024,
        datesOfPreviousSips: ['12/25', '4/9'],
        isOpen: false,
    },
    {
        brandName: 'Coca Cola',
        type: 'Soft Drink',
        volumeInLiters: 0.354882,
        priceInCents: .99,
        expirationDate: 2024,
        datesOfPreviousSips: ['1/13', '2/2'],
        isOpen: false,
    },
    {
        brandName: 'Gatorade',
        type: 'Sports Drink',
        volumeInLiters: 0.591471,
        priceInCents: 1.79,
        expirationDate: 2023,
        datesOfPreviousSips: ['4/17', '4/18'],
        isOpen: true,
    },
    {
        brandName: 'Root Beer',
        type: 'Soft Drink',
        volumeInLiters: 0.354882,
        priceInCents: .99,
        expirationDate: 2024,
        datesOfPreviousSips: ['11/20', '2/28'],
        isOpen: false,
    },
    {
        brandName: 'Big Red',
    }
];

beverages[5].type = 'Soft Drink';
beverages[5].volumeInLiters = 0.354882;
beverages[5].priceInCents = .99;
beverages[5].expirationDate = 2024;
beverages[5].datesOfPreviousSips = ['12/25', '3/6'];
beverages[5].isOpen = false;

//Mini Exercise #2
var users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age:34
    },
    {
        givenName: 'Karen',
        age: 43,
    }
];
/**
     1. Log the names of all users in a single console log separated by spaces.
    output = "Sam Cathy Karen"
*/

// console.log(users[0].givenName + " " + users[1].givenName + " " + users[2].givenName);

/**  2. Change the names of all users to "John Doe"*/

// users[0].givenName = "John Doe";
// users[1].givenName = "John Doe";
// users[2].givenName = "John Doe";
// console.log(users);

//  3. Increase the current age of all users by 1

// users[0].age++;
// users[1].age++;
// users[2].age++;

//  Can you accomplish each step using iteration

// #1
var usersNames = '';
users.forEach(function(user){
    usersNames += user.givenName + " ";
});
console.log(usersNames.trim());

// #2
users.forEach(function(user) {
    user.givenName = "John Doe";
});

// #3
users.forEach(function(user){
    user.age++;
});
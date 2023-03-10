'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'], 
    starterMenu: ['Focaccia','Bruschetta','Garlic','Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({
        starterIndex = 1,
        mainIndex = 0, 
        time = '20:00', 
        address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1,ing2,ing3){
        console.log(`Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};
////////////////////////////109

//////ontap

//////////////////////////////108
// restaurant. numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant. numGuests : 10;
// console.log(guests1);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


/////////////////////////////////107
// // use any data type, return any data type, short-circuiting
// console.log("---OR---");
// console.log(3||'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant. numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant. numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---AND---");
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// if(restaurant.orderPizza){
//     restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach');


////////////////////////////////106
// //chia ra
// const arr = [1,2, ...[3,4]];
// //
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a,b,others);
// //
// const [pizza, , risotto,...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);
// //object
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
// //functions
// const add = function(...numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length;i++){
//         sum+=numbers[i];
//     }
//     console.log(sum);
// }
// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);

// const x = [23,5,7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushroom');

///////////////////////////////////////////105
// const arr = [7,8,9];
// const badNewArr = [1,2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //const newArr = [1,2, arr];
// const newArr = [1,2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// console.log(1,2,7,8,9);

// //const newMenu = [restaurant.mainMenu, 'Gnocci'];
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy arr 
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join arr challenge
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(menu);

// // Iterables???: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ','S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} meeasedasd`); not work

// // const ingredients =[prompt('Let\'s make pasta! Ingredient 1?'),prompt('Ingredient 2?'),prompt('Ingredient 3?')];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //Object
// const newRestaurant = { foundedIn: 2023,...restaurant, founder:'viet'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Roma';
// console.log(restaurantCopy);
// console.log(restaurant);


///////////////////////////// 104
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1,
// });
 
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours,categories: tags,} = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu:starters = []} = restaurant;
// console.log(menu,starters);

// // mutaing variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({a,b} = obj);
// console.log(a, b);

// //nested object
// const {fri: {open: o, close: c}} = openingHours
// console.log(o, c);

/////////////////////////////////////////////// 103
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main] ;
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2,4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8,9];
// console.log(p, q, r );


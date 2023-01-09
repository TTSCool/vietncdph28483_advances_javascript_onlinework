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
            clsoe: 22,
        },
        fri: {
            open: 11,
            clsoe: 23,
        },
        sat: {
            open: 0,
            clsoe: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
 
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours,categories: tags,} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu:starters = []} = restaurant;
console.log(menu,starters);

// mutaing variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({a,b} = obj);
console.log(a, b);



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


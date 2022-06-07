//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

class Person {
    constructor(name, age){
        this.age = age;
        this.name = name;
    }
    printInfo = () => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    addAge = () => {
        return this.age += 1
    }
};

let fred = new Person('Fred', 16);
console.log(fred.printInfo())
console.log(fred.addAge())

let jerry = new Person('Jerry', 55);
console.log(jerry.printInfo())
console.log(jerry.addAge())

// =============Exercise #3 ============//
/*
Create a Promised based function that will check a string to determine if it's length is greater than 10.
If the length is greater than ten console log "Big word". 
If the length of the string is less than 10 console log "Small Number"
*/


let p = new Promise((resolve, reject) => {
    let myString = 0 + 15 
    if (myString > 10) {
        resolve('Big Word')
    } else {
        reject('Small Number')
    }
})

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})

// CODEWARS
// Your order, please (1)
/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
*/

function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
}  
console.log(order(' 1jio321jeio 3j32kp 2jiasjda'))

// Number of People in the Bus (2)
/* There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop. 
*/

var number = function(busStops){
    let pplIn = 0;
   let pplOut = 0;
     for (let i=0; i<busStops.length; i++) {
       pplIn += busStops[i][0];
       pplOut += busStops[i][1];
   }
   return pplIn - pplOut;
 }
 console.log(number(4))
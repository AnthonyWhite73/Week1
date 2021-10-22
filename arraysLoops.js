//let coffeeOrder = ['Alex - Cortado', 'Ben - Cortado', 'Charlie - Whatever'];

//console.log(coffeeOrder);
//console.log(coffeeOrder[2]);

//coffeeOrder[1] = "Ann - Vanilla Latte";
//console.log(coffeeOrder);
//console.log(coffeeOrder.length);
//coffeeOrder.push("Donna - Espresso");
//console.log(coffeeOrder);
//coffeeOrder.pop();
//console.log(coffeeOrder);

// Activity 1
let favoriteSongs = [
    "Supersonic - Oasis",
    "Waterslide - The Bone Daddies",
    "Time - Chase & Status",
    "Juicy - Notorious BIG"
];
console.log(favoriteSongs);
favoriteSongs.push("Status Quo - Rockin all over the world");
favoriteSongs.push("Donna Summer  - Espresso");
console.log(favoriteSongs);

favoriteSongs.pop();
console.log(favoriteSongs);

//Activity 2
//favoriteSongs.map();
//console.log(favoriteSongs);

// The shift() method removes the first element from an array and returns that removed element.
let firstElement = favoriteSongs.shift();
console.log(firstElement);
console.log(favoriteSongs);

// Loops
let favDrinks = [
    "Coffee", 
    "Tea", 
    "Beer", 
    "Coke"
];

for(let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);
}

let multiplesTwo = [];
for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }    
}
console.log(`Numbers divisible by 2 between 0 and 20 are:${multiplesTwo}`);

let age = 15;
while(age < 18){
    console.log("you are a child");
    age ++;
}
console.log("you are an adult");

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard!="Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
 }
 console.log(currentCard);

 
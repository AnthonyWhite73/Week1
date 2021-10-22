// Activity 1
let item = "name";

const person = {
    name: "Anthony",
    age: 47,
    songs: [
        "supersonic",
        "take on me"
    ],
    myName (){
        return this.name;
    },
    sayHi(){
        return `Hello my name is ${this.name}`;
    }
};
console.log(person.myName());
console.log(person.sayHi());

//console.log(person.songs[1]);
// dot notation
//console.log(person.name);
// bracket notation
//console.log(person["name"]);
//console.log(person[item]);

//Activity 2
const pet = {
    name: "Chester",
    typeOfPet: "Dog",
    age: 4,
    color: "White",    
    eat (){
        return `${this.name} the ${this.typeOfPet}, who is ${this.age} years old and is ${this.color} is eating`;
    },
    drink(){
        return `${this.name} the ${this.typeOfPet}, who is ${this.age} years old and is ${this.color} is drinking`;
    }
};
console.log(pet.eat());
console.log(pet.drink());

// Activity 3
let drinksAmount = 0;
let foodAmount = 0;

const coffeeShop = {
    branch: "Manchester",
    drinks: [
        ["Latte", 2],
        ["Tea", 2],
        ["Coffee", 2]        
    ],
    
    food: [
        ["chips", 1],
        ["sandwich", 2]
    ],
    
    drinksOrdered (){
        drinksAmount ++;
        return `Your order is ${this.branch} is drinks`;
    },
    foodOrdered (){
        foodAmount ++;
        return `Your order is ${this.branch} is food`;
    }
}

console.log(coffeeShop.foodOrdered(coffeeShop.food[1]));
console.log(coffeeShop.drinksOrdered(coffeeShop.tea));
//console.log(${this.drinks[i][0]} and drink price with ${this.drinks[i][1]});

// its a bit of a tough one, 
// the drinks ordered methods might have to have a loop that loops through an array of food on offer, 
// the method will also need a parameter passed through it which will be the ordered drink. 
// That is my initial idea, then the same for food

/* let day = "Saturday";
let alarm = "";

let alarmMessages = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7pm"
};

alarmMessages.weekendAlarm = "have a lie in";

if (day == "Saturday" || day == "Sunday"){
    alarm = alarmMessages.weekendAlarm
} else{
    alarm = alarmMessages.weekdayAlarm
}

console.log(alarm); */

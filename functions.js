// cinema ticket machine
// const child = "Ticket price: £8";
// const adult = "Ticket price: £10.95";
// const senior = "Ticket price: £7.50";

// let age = 17
// if (age <18){
//     console.log(child);
// }else if (age >= 60){
//     console.log(senior);
// } else {
//     console.log(adult);
// }

// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }    

// pressGrindBeans();

// const favColor = (color) => {
//     console.log(`"My favorite color is ${color}"`);
// }

// favColor("Black");

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding){
//         console.log("Stopping");
//         coffeeIsGrinding = false
//     }else {
//         console.log("Starting");
//         coffeeIsGrinding = true
//     }    
// }

// pressGrindBeans();

// Activity 1

const factorial = (n) => {
    if ((n ===0) || (n === 1)){
        return 1;
    } else{
        return (n * factorial(n-1));
    }
    
}
console.log (factorial(33));

// Activity 2
let orderCount = 0;

const takeOrder = (topping, topping2) => {
    console.log(`Pizza with ${topping} and ${topping2}`)
    orderCount ++;
}

takeOrder("pineapple", "pepperoni");
takeOrder("ham", "extra cheese");
console.log(orderCount);

// Activity 3
const correctPIN = 1212;
const customerBalance = 100;

const validPIN = (pin) => {
    if (pin != correctPIN){
        return false
    } else{
        return true
    }
}

const cashMachine = (pin, amount) => {
    if (validPIN(pin) === false){
        return "Wrong PIN dummy";
    } else {
        console.log("Correct PIN");
        let newBalance = customerBalance - amount;
        if (newBalance >= 0){            
            return`Dispensing cash, Your new balance is ${newBalance}`;            
        } else{
            return "You don't enough cash in the bank, cheap skate!";            
        }
    }
}

//console.log(validPIN(1212));
//console.log(cashMachine1(1212, 50));
console.log(cashMachine(1212, 50));

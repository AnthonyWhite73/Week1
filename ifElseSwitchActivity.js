// Activity 1
let age = 21;
let country = "UK";

if (age > 17 && country == "UK"){
    console.log("Yes I can serve you");
}else{
    console.log("You aren't old enough");
}

// Activity 2
let topping = "Pepperoni";

switch(topping){
    case "Cheese":
    case "Tomato":
        console.log(`These are important ingredients for my pizza`);
        break;
    case "Pepperoni":
        console.log(`I don't mind having ${topping} on my pizza`)
        break;
    default:
        console.log(`${topping} should not be on a pizza`);
}

// Activity 3
let password = "dogdogdog";

if (password.length < 8){
    console.log("This password is too short!")
}else {
    console.log(`Your password is ${password}`)
}

let num = 3;
if (num % 3 == 0 || num % 5 == 0){
    console.log("This number is divisible by 3 or 5");
}else {
    console.log("This number is not divisible by 3 or 5");
}
    
// Activity 4
num = 21;
if (num % 3 == 0 && num % 7 == 0){
    console.log("fizzbuzz");
}else if(num % 3 == 0){
    console.log("fizz");
}else if (num % 7 == 0){
    console.log("buzz");
}

// Activity 5
num = 1001;

let reverseNum = num.toString().split("").reverse().join("");
if (num == reverseNum){
    console.log("It is a Palindrome");
}else{
    console.log("It is NOT a Palindrome");
}

// Activity 6
let time = 18;
let placeOfWork = "Manchester";
let townOfHome = "Stockport";
if (time < 8 || time > 18){
    console.log(`I am home in ${townOfHome}`);
}else if (time == 8 || time == 18){
    console.log("I am commuting");
}else{
    console.log(`I am working in ${placeOfWork}`);
}

// Activity 7
const string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
const vowels = ['a', 'e', 'i', 'o', 'u'];

let highestIndex = 0;
let arrayLength = vowels.length;
//console.log(arrayLength.toString());

for (var i = 0; i < arrayLength; i++) {
    console.log(`${vowels[i]} ${string.lastIndexOf(vowels[i])}`);
    let lastVowelIndex = string.lastIndexOf(vowels[i]);
    if (lastVowelIndex > highestIndex){
        highestIndex = lastVowelIndex;
    }
    //console.log(vowels[i]);    
}
console.log(`highest index is ${highestIndex}`);

// Activity 8
let word = "racecar";

let firstLetter = word[0];

const stringLength = word.length;
let lastLetter = word.charAt(stringLength - 1);

if (firstLetter == lastLetter){
    console.log("True");
}else{
    console.log("False");
}

// Activity 9
let num1 = 1;
let num2 = 2;
let num3 = num1 + num2;
if (num3 % 2 == 0){
    console.log(`${num3} is even`);
}else{
    console.log(`${num1} multiplied by ${num2} is ${num1 * num2}`);
}

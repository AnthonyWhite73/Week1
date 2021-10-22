//let i = 10;
//console.log(i)
//i = i +2;
//console.log(i)
// more efficient
//i += 2
//console.log(i)

//const name = "Ant";
//console.log(name)

//let favoriteDrink = "beer";
//console.log(favoriteDrink);
//console.log("My fav drink is " + favoriteDrink + ".");

// Activity 1
let name = "Ant";
let age = 21;
let favoriteColor = "Red";
console.log(`My name is ${name}, I am ${age} and my fave color is ${favoriteColor}`);

name = "Rik";
age = 31;
favoriteColor = "Blue";
console.log(`My name is ${name}, I am ${age} and my fave color is ${favoriteColor}`);

// Activity 2
let breakfast = "toast";
let lunch = "beans on toast";
let dinner = "cheese on toast";
console.log(`Today I had ${breakfast} for breakfast, then I will have ${lunch} for lunch and ${dinner} for Dinner!`);

breakfast = "cereal";
lunch = "boiled eggs";
dinner = "curry";
console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for dinner and yummy ${dinner} for Tea!`);

// Activity 3
let today = new Date();
console.log(today);
let myBirthDay = new Date(2021, 11, 13);
console.log(myBirthDay);
// To calculate the time difference of two dates
let differenceInTime = myBirthDay.getTime() - today.getTime();
console.log(differenceInTime);
// To calculate the no. of days between two dates
let differenceInDays = differenceInTime / (1000 * 3600 * 24);
console.log(differenceInDays);
//end.diff(start, "days");

let date1 = new Date('12/13/2021');
let date2 = new Date();
console.log(date1);
let difference = date1.getTime() - date2.getTime();
console.log(difference);
let days = Math. ceil(difference / (1000 * 3600 * 24)); 
console. log(`${days} days to your birthday`);
console.log(days);


let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log("     |     |");
console.log(`  ${space1}  |  ${space2}  | ${space3}`);
console.log("     |     |");
console.log("----------------");
console.log("     |     |");
console.log(`  ${space4}  |  ${space5}  | ${space6}`);
console.log("     |     |");
console.log("----------------");
console.log("     |     |");
console.log(`  ${space7}  |  ${space8}  | ${space9}`);
console.log("     |     |");


let weather = "sunny";

if (weather == "sunny"){
    console.log("Better grab a hat");
} else if (weather == "rainy"){
    console.log("Better take an umbrella");
} else{
    console.log("Hmm, it could go either way!");
}

let i = 10;
let j = "10";
// Strict Equal
if (i === j){
    console.log("True")
}else{
    console.log("False")
}

let place = "Manc";
let weather = "Cloudy";

if (place == "" && weather == ""){
    console.log("");
}else if (place == "" && weather == ""){
    console.log("");
}else{
    console.log("");
}

let car = "Mazda";

switch(car){
    case "Ford":
    case "GM":
        console.log("American");
        break;
    default:
        console.log("Japanese");
}

// Activity 1
let age = 21;
if (age > 17){
    console.log("Yes I can serve you");
}else{
    console.log("You aren't old enough");
}

// Activity 2
let topping = "Cheese";

switch(topping){
    case "Cheese":
    case "Tomato":
        console.log(`These are important ingredients for my pizza`);
        break;
    case "":
        console.log(`I don't mind having ${topping} on my pizza`)
        break;
    default:
        console.log(`${topping} should not be on a pizza`);
}

// Activity 3
let password = "dogdogdog";
if len(password) < 8:
    print("This password is too short!")
else:
    print(password)
    print(f"Your password is {password}")
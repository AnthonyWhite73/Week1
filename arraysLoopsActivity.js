// Activity 1

let favFilms = [
    "Carlito's Way",
    "Starwars",
    "Ghostbusters",
    "TopGun",
    "James Bond"
];

// Stretch



// add 2 elements
favFilms.push('Superman', 'Hulk');
//favFilms.push("Superman");
//favFilms.push("Hulk");
// loop through array
for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i]);
}

// Activity 2
let i = 0;
for(let i = 0 ; i < 6; i++){
    console.log(Math.ceil(Math.random() * 50));
}
//while(i <= 5){    
//    console.log(Math.floor(Math.random() * 50));    
//   i ++;
//}

// Activity 3
// loop from 0 - 9
//for(let i = 0; i <= 9; i++){
//    console.log(i);
//}

// loop backwards from 9 - 0
for(let i = 9; i >= 0; i--){
    console.log(i);
}

// Activity 4
let films = [
    "Carlito's Way",
    "Starwars",
    "Ghostbusters",
    "TopGun",
    "James Bond"
];

for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i]);
    if (i ==2 && favFilms[i] == "Ghostbusters"){
        console.log("Yay is Ghostbusters!");
    } else{
        console.log("Boo we want Ghostbusters!");
    }  
}
// if(films[2] == "Ghostbusters"){
//     console.log("Yay its Ghostbusters")
// } else {
//     console.log("Boo! we want Ghostbusters")
// }

// Activity 5
let num;

for (let i = 0; i <= 6; i++) {
    num = Math.floor(Math.random() * 30);    
    if (num % 7 == 0){
        console.log(` ${num} is divisible by 7`);
    }else {
        console.log(` ${num} is NOT divisible by 7`);
    }
}

// Activity 6
let bobsFollowers = [
    "Bob",
    "Anthony",
    "Daniel",
    "Pip"    
];

let hanahsFollowers = [
    "Hanah",
    "Richard",
    "Pip",
    "Naghmeh"
];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hanahsFollowers.length; j++) {
        if (bobsFollowers[i] == hanahsFollowers[j]) {
            console.log(bobsFollowers[i]);
            break;
        }
    }
  }

  // Activity 7

// do while loop - does first then checks
let text = "";
let i = 0;
do {
    text = "The number is " + i;
    console.log(text)
    i++;
}
while (i < 5);

i = 0;
// for loop
for (i = 0; i < 5; i++) {
    text = "The number is " + i ;
    console.log(text)
}

i = 0;
// while - checks first then runs
while (i < 5) {
    text = "The number is " + i;
    console.log(text)
    i++;
}
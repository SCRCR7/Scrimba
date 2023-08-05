 // string + number = addition 
// number + string =concatination
// concatiatnation is used for String 
// Operators is use for numbers = 2+2 
let greeting="hi , my name i sohaib "
let age=19
console.log(greeting + " " + age)

let points=10
let bonuspoints="5"

console.log(points+bonuspoints)
// now that is wierd 
//4 +"10" =410 which is not true 


// challange string vs numbers 

console.log(4 + 5) 
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")

// what is the output of these 
//1) 9
//2) 24
//3) 51
//4)100100
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
let welcomeEl =document.getElementById("welcome-el")
console.log(welcomeEl)
// 1 completed 
let name = "Sohaib"
let Greeting = "Hi, Welcome Back "
let message=name+ " "+ Greeting
welcomeEl.innerText=message 

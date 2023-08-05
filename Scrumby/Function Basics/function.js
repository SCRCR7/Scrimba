// what is fucntion 
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
// 
// for easiness we create a function here
function countDown(number){
    // what is fucntion 
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    // cannot return anything because we cannot invoke it
    return number


}
let num=countDown(2)
console.log(num)
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function Increment(){
    console.log(42)
    
}
// here we call a function
Increment()


let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function Sum(){
    return lap1+lap2+lap3;
}
let total=Sum()
console.log(total)
// or 
function LangTotal(){
    let total=lap1+lap2+lap3  //total time is only accesible only in function
    console.log(total)
}
LangTotal
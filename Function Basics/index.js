// document.getElementById("counter-el").innerText=9;
// human dog ratio 
// 1 year =7 year 2*7 =14 dog 
let myAge=19;
let humanDogRatio=7
let myDog=myAge * humanDogRatio;
console.log(myDog)
document.getElementById("counter-el").innerText=myDog

// function increment(){
//     alert("button is clicked")
// }



// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count


let count=0
function increment(){
    count=count+1
    alert(count)
}
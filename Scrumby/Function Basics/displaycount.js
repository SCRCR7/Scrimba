// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count
// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
// let countEl = document.getElementById("count-el")
// console.log(countEl)
// let increment=document.getElementById("counter")
// console.log(increment)
// grab the count-el element, store it in a countEl variable
let count = 0
let countEL=document.getElementById("count-el") // model 

function increment() {
    count = count + 1
    console.log(count)
    // set countEl's innerText to the count
    document.getElementById("count-el").innerHTML=countEL
    console.log(countEL)
}
increment()
console.log(count )



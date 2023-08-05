let welcomeEl = document.getElementById("welcome-el")

let name = "Sohaib hassan"
let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
let emoji=" Emoji"
message=greeting + name + emoji


function myGreeing(){
    console.log(message)
    welcomeEl.innerText=message
    
    
}
myGreeing()
myGreeing()
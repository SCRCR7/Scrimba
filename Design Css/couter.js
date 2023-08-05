let count=0
// store a value in count 
// let number=5

// function counter(){
//     document.getElementById("counter-el").innerText=number
//     number=number+1
// }

// variable store the documentget elemnt
let counterEl=document.getElementById("counter-el")
// her ewe get the h2element and store it in avarianle conterEL 
// then make afuction whic is invoke when click by onclick funtion
function increment(){
    count=count+1
   counterEl.textContent=count
}
let saveEl=document.getElementById("save-el")
function save(){
    let countStr=count + "-"
   saveEl.textContent+=countStr
   

}
// the mistake is we need to increment save el 
let resetEl=document.getElementById("counter-el")
let Remove=""
function reset(){
    count=0
    // count to zero 
resetEl.textContent=count
saveEl.textContent=Remove

}
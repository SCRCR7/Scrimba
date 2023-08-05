
let counter=0

function increment(){
    counter=counter+1
    console.log(counter)
    document.getElementById("count-el").innerText=counter
}
increment()
function decrement(){
    counter=counter-1;
    console.log(counter)
    document.getElementById("count-el").innerText=counter
}
function save(){
    console.log(counter)
    document.getElementById("demo").innerText=counter
    
}

// make a three buttons 
// and connect it with ionnerhtml 
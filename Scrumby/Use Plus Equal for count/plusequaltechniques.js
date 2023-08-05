let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    // here count+1 change += same meaning
    countEl.innerText = count
}

function save() {
    console.log(count)
}



let counter = document.getElementById('counter');
let count = 0;

function decrement() {
    if (count > 0) {
        count--;
        counter.innerText = count;
    }
}

function increment() {
    count++;
    counter.innerText = count;
}
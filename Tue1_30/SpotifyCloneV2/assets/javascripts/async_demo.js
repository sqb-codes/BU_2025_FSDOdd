// AJAX - Asynchronous Javascript and XML
// JS is single threaded programming
// Event Loop

function one() {
    console.log("One called...");
}

function two() {
    setTimeout(() => {
        console.log("Two called...");
    }, 1000);
}

function three() {
    console.log("Three called...");
}

function four() {
    console.log("Four called...");
}

function caller() {
    one();
    two();
    three();
    four();
}
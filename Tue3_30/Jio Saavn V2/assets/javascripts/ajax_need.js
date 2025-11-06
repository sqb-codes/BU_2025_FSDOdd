// Event loop

function one() {
    console.log("One called...");
    two();
}
function two() {
    setTimeout(() => {
        console.log("Two called...");
        // const x = 12;
        // x = 100;
    }, 500);
    three();
}
function three() {
    console.log("Three called...");
    four();
}
function four() {
    console.log("Four called...");
}

function caller() {
    one();
}
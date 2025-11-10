function one() {
    console.log("This is function one");
}
function two() {
    setTimeout(() => {
        console.log("This is function two after 2 seconds");
    }, 2000);
}
function three() {
    console.log("This is function three");
}
function four() {
    console.log("This is function four");
}

function caller() {
    one();
    two();
    three();
    four();
}
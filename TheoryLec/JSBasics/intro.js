// console.log("Welcome to JavaScript Basics!");

window.addEventListener("load", initEvent);

// This function will be called when the window is fully loaded
function initEvent() {
    // Event binding
    // attach an event listener to the button
    // when event occurs, call the function
    document.querySelector("#btn-1").addEventListener("click", greet);
}

function greet() {
    // alert("Clicked on a button...");
    console.log("Clicked on a button...");
    // document.getElementById("box-1");
    var username = document.querySelector("#box-1").value;
    console.log("Welcome :",username);
    document.querySelector("#output").innerText = username;
}
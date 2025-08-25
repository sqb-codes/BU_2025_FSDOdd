// console.log("Welcome to JavaScript Basics!");

// Anonymous function to handle the load event
// window.addEventListener("load", function() {
//     document.querySelector("#btn-1").addEventListener("click", greet);
// });

// Arrow function to handle the load event
window.addEventListener("load", () => {
    document.querySelector("#btn-1").addEventListener("click", greet);
});

function greet() {
    // alert("Clicked on a button...");
    console.log("Clicked on a button...");
    // document.getElementById("box-1");
    var username = document.querySelector("#box-1").value;
    console.log("Welcome :",username);
    document.querySelector("#output").innerText = username;
}
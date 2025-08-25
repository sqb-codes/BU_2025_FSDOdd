let num_1, num_2;

window.addEventListener("load", () => {
    num_1 = document.querySelector("#box-1");
    num_2 = document.querySelector("#box-2");

    let buttons = document.querySelectorAll("button");    
    // for(let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener("click", calc);
    // }

    for(let btn of buttons) {
        btn.addEventListener("click", calc);
    }

});

function calc() {
    const operation = this.value;
    let expression = num_1.value + operation + num_2.value;
    let result = eval(expression);
    document.querySelector("#box-3").value = result;
}
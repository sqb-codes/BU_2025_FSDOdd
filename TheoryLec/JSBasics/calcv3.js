let num_1, num_2;

window.addEventListener("load", () => {
    num_1 = document.querySelector("#box-1");
    num_2 = document.querySelector("#box-2");

    const add_btn = document.querySelector("#add");
    add_btn.addEventListener("click", calc);
    
    const sub_btn = document.querySelector("#sub");
    sub_btn.addEventListener("click", calc);
    
    const div_btn = document.querySelector("#div");
    div_btn.addEventListener("click", calc);
    
    const mul_btn = document.querySelector("#mul");
    mul_btn.addEventListener("click", calc);
});

function calc() {
    // console.log(this.value);
    // if(this.value == "+") {
    //     var result = parseInt(num_1.value) + parseInt(num_2.value);
    // } else if(this.value == "-") {
    //     var result = parseInt(num_1.value) - parseInt(num_2.value);
    // } else if(this.value == "/") {
    //     var result = parseInt(num_1.value) / parseInt(num_2.value);
    // } else if(this.value == "*") {
    //     var result = parseInt(num_1.value) * parseInt(num_2.value);
    // }

    const operation = this.value;
    let expression = num_1.value + operation + num_2.value;
    // console.log(expression);
    let result = eval(expression);
    document.querySelector("#box-3").value = result;
}
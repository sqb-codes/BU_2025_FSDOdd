let num_1, num_2;

window.addEventListener("load", () => {
    num_1 = document.querySelector("#box-1");
    num_2 = document.querySelector("#box-2");

    const add_btn = document.querySelector("#add");
    add_btn.addEventListener("click", add);
    
    const sub_btn = document.querySelector("#sub");
    sub_btn.addEventListener("click", sub);
    
    const div_btn = document.querySelector("#div");
    div_btn.addEventListener("click", div);
    
    const mul_btn = document.querySelector("#mul");
    mul_btn.addEventListener("click", mul);
});

function add() {
    let result = parseInt(num_1.value) + parseInt(num_2.value);
    display(result);
}

function sub() {
    let result = parseInt(num_1.value) - parseInt(num_2.value);
    display(result);
}

function div() {
    let result = parseInt(num_1.value) / parseInt(num_2.value);
    display(result);
}

function mul() {
    let result = parseInt(num_1.value) * parseInt(num_2.value);
    display(result);
}

function display(result) {
    document.querySelector("#box-3").value = result;
}
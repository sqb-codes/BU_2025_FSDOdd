window.addEventListener("load", () => {
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
    let num_1 = document.querySelector("#box-1");
    let num_2 = document.querySelector("#box-2");
    let result = parseInt(num_1.value) + parseInt(num_2.value);
    document.querySelector("#box-3").value = result;
}

function sub() {
    let num_1 = document.querySelector("#box-1");
    let num_2 = document.querySelector("#box-2");
    let result = parseInt(num_1.value) - parseInt(num_2.value);
    document.querySelector("#box-3").value = result;
}

function div() {
    let num_1 = document.querySelector("#box-1");
    let num_2 = document.querySelector("#box-2");
    let result = parseInt(num_1.value) / parseInt(num_2.value);
    document.querySelector("#box-3").value = result;
}

function mul() {
    let num_1 = document.querySelector("#box-1");
    let num_2 = document.querySelector("#box-2");
    let result = parseInt(num_1.value) * parseInt(num_2.value);
    document.querySelector("#box-3").value = result;
}
window.addEventListener("load", initEvents)
let btns;
let counter = 0;

let winning_combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initEvents() {
    btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
        btn.addEventListener("click", handleClick);
    }
}

function handleClick() {
    this.innerText = "X";
    let btnIndex = this.title;
    this.disabled = true;
    checkWin("X", parseInt(btnIndex));
    counter++;
    cpuTurn();
}

function cpuTurn() {
    let btnIndex = parseInt(Math.random() * 9);
    let btnText = btns[btnIndex].innerText;
    if(counter < 9) {
        if(!btnText) {
            btns[btnIndex].innerText = "O";
            btns[btnIndex].disabled = true;
            checkWin("O", btnIndex);
            counter++;
        } else {
            cpuTurn();
        }
    }
}

function checkWin(choice, position) {
    for(let i = 0; i < winning_combos.length; i++) {
        for(let j = 0; j < winning_combos[i].length; j++) {
            if(position === winning_combos[i][j]) {
                winning_combos[i][j] = choice;
            }
        }
    }
    // console.log(winning_combos);
    for(let i = 0; i < winning_combos.length; i++) {
        if(winning_combos[i][0] === choice && winning_combos[i][1] === choice && winning_combos[i][2] === choice) {
            console.log(choice + " wins");
        }
    }
}
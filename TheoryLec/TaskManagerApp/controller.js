// IIFE
(function() {
    document.querySelector("#add").addEventListener("click", addTaskController);
})();

function addTaskController() {
    let taskTitle = document.querySelector("#taskTitle").value;
    let taskDesc = document.querySelector("#taskDesc").value;
    let startDate = document.querySelector("#startDate").value;
    let endDate = document.querySelector("#endDate").value;

    let ul = document.querySelector("#taskList");

    let li = document.createElement("li");
    
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let spanStartDate = document.createElement("span");
    let spanEndDate = document.createElement("span");

    h3.innerText = taskTitle;
    p.innerText = taskDesc;
    spanStartDate.innerText = startDate;
    spanEndDate.innerText = endDate;

    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(spanStartDate);
    li.appendChild(spanEndDate);

    ul.appendChild(li);

}

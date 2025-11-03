// Function as a constructor
// function Task(title, description, startDate, dueDate) {
//     this.title = title;
//     this.description = description;
//     this.startDate = startDate;
//     this.dueDate = dueDate;
// }

class Task {
    constructor(title, description, startDate, dueDate) {
        // this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.dueDate = dueDate;
    }
}

let taskObj = {
    taskList: [],
    taskId: 0,
    addTask: function(title, description, startDate, dueDate) {
        this.taskId++;
        // let newTask = new Task(this.id, title, description, startDate, dueDate);
        let newTask = new Task(title, description, startDate, dueDate);
        newTask.taskId = this.taskId;
        this.taskList.push(newTask);

        // let newTask = new Task(title, description, startDate, dueDate);
        // this.taskList.push({id: this.taskId, ...newTask});
    },

    deleteTask: function(taskId) {

    },

    updateTask: function(taskId, updatedDetails) {

    }
}
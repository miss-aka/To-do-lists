const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let taskcount = 0;

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task first.");
        return;
    }
        taskcount++;
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    }
);

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = createTaskItem(taskText);
        taskList.appendChild(listItem);
        taskInput.value = ''; 
    }
});


    function createTaskItem(taskText) {
    const listItem = document.createElement('li');



    
    
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskTextSpan.className = 'task-text';
    listItem.appendChild(taskTextSpan);

    
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    listItem.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    listItem.appendChild(deleteBtn);

    // Edit button functionality
    editBtn.addEventListener('click', function () {
        if (editBtn.textContent === 'Edit') {
            const newText = prompt('Edit your task:', taskTextSpan.textContent);
            if (newText !== null) {
                taskTextSpan.textContent = newText.trim();
            }
        }
    });

    // Delete button functionality
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    return listItem;
}

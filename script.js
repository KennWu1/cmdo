document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input').value.trim();
    if (taskInput.startsWith('new') && taskInput.endsWith('end')) {
        const taskDescription = taskInput.slice(4, -3).trim();
        let priority = 0;

        if (taskDescription.includes('one') || taskDescription.includes('1')) {
            priority = 1;
        } else if (taskDescription.includes('zero') || taskDescription.includes('0')) {
            priority = 0;
        }

        addTaskToList(taskDescription, priority);
    }
    document.getElementById('task-input').value = ''; // Clear input after adding task
});

function addTaskToList(description, priority) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    
    taskItem.textContent = description;
    if (priority === 1) {
        taskItem.classList.add('high-priority');
    } else {
        taskItem.classList.add('low-priority');
    }

    // Insert the task based on priority
    if (priority === 1) {
        taskList.prepend(taskItem);
    } else {
        taskList.append(taskItem);
    }
}

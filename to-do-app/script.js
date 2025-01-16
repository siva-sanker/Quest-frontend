document.getElementById('mode-toggle').addEventListener('click', function() {
    var body = document.body;
    var button = document.getElementById('mode-toggle');
    var icon = button.querySelector('i');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

document.getElementById('add-btn').addEventListener('click', function() {
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');
    todoList.style.fontFamily = "Nothing You Could Do";

    if (todoInput.value.trim() !== "") {
        var li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        var task = document.createElement('span');
        task.className = 'task';
        task.textContent = todoInput.value;

        li.appendChild(checkbox);
        li.appendChild(task);
        todoList.appendChild(li);
        todoInput.value = "";
    }
});

document.getElementById('delete-btn').addEventListener('click', function() {
    var todoList = document.getElementById('todo-list');
    var completedTasks = todoList.getElementsByClassName('completed');

    while (completedTasks.length > 0) {
        todoList.removeChild(completedTasks[0]);
    }
});



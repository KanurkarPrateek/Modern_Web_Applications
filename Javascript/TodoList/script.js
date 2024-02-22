document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  addTaskBtn.addEventListener('click', addTask);

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      tasks.push({ text: taskText, completed: false });
      saveAndRenderTasks();
      taskInput.value = '';
    }
  }

  function saveAndRenderTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }

  function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(function(task, index) {
      const li = document.createElement('li');
      li.textContent = task.text;

      const deleteBtn = createButton('Delete', 'delete-btn', function() {
        deleteTask(index);
      });

      const completeBtn = createButton(task.completed ? 'Undo' : 'Complete', 'complete-btn', function() {
        toggleCompleteTask(index);
      });

      li.appendChild(deleteBtn);
      li.appendChild(completeBtn);

      if (task.completed) {
        li.classList.add('completed');
      }

      taskList.appendChild(li);
    });
  }

  function createButton(text, className, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(className);
    button.addEventListener('click', clickHandler);
    return button;
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    saveAndRenderTasks();
  }

  function toggleCompleteTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveAndRenderTasks();
  }

  renderTasks();
});

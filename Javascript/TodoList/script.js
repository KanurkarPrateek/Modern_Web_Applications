document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Retrieve tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Render tasks from local storage
    renderTasks();
  
    // Event listener for adding tasks
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
      }
    });
  
    // Render tasks function
    function renderTasks() {
      taskList.innerHTML = '';
  
      tasks.forEach(function(task, index) {
        const li = document.createElement('li');
        li.textContent = task.text;
        
        if (task.completed) {
          li.classList.add('completed');
        }
  
        li.addEventListener('click', function() {
          task.completed = !task.completed;
          localStorage.setItem('tasks', JSON.stringify(tasks));
          renderTasks();
        });
  
        taskList.appendChild(li);
      });
    }
  });
  
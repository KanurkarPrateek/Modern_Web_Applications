$(document).ready(function() {
    // Function to add a new task
    function addTask() {
      var taskText = $('#taskInput').val().trim();
      if (taskText !== '') {
        var taskItem = $('<li class="taskItem" ></li>').text(taskText);
        var deleteButton = $('<button style="background-color: rgba(248, 19, 19, 0.26);">Delete</button>').click(function() {
          $(this).parent().remove();
        });
        var completeButton = $('<button style="background-color: rgba(22, 243, 51, 0.26);">Complete</button>').click(function() {
          $(this).parent().toggleClass('completed');
        });
        taskItem.append(deleteButton, completeButton);
        $('#taskList').append(taskItem);
        $('#taskInput').val('');
      } else {
        alert('Please enter a task!');
      }
    }
  
    // Add task button click event
    $('#addTask').click(function() {
      addTask();
    });
  
    // Enter key press event for adding a task
    $('#taskInput').keypress(function(event) {
      if (event.which === 13) {
        addTask();
      }
    });
  });
  
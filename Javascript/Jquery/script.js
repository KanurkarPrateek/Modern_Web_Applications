$(document).ready(function() {
    // Function to add a new task
    function addTask() {
      var taskText = $('#taskInput').val().trim();
      if (taskText !== '') {
        var taskItem = $('<li class="taskItem"></li>').text(taskText);
        var deleteButton = $('<button>Delete</button>').click(function() {
          $(this).parent().remove();
        });
        var completeButton = $('<button>Complete</button>').click(function() {
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
  
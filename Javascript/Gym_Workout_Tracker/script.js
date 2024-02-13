function addExercise() {
    var exerciseInput = document.getElementById("exerciseInput");
    var exerciseName = exerciseInput.value.trim();
    
    if (exerciseName !== "") {
        var exerciseList = document.getElementById("exerciseList");
        var li = document.createElement("li");
        li.textContent = exerciseName;
        exerciseList.appendChild(li);
        exerciseInput.value = "";
    } else {
        alert("Please enter a valid exercise.");
    }
}

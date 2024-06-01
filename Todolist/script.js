function enableEnterToNextInput() {
    const inputs = document.querySelectorAll('.popup input, .popup textarea');
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                if(index == 2){
                    addOnScreen();
                    return
                }
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus(); 
                }
            }
        });
    });
}

function addOnScreen() {
    let taskName = document.getElementById("taskName").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("deadline").value;

    if (!taskName) {
        alert("Task name should be filled!");
        return;
    }

    let taskDiv = document.createElement("div");
    let task = document.createElement("h1");
    task.innerText += taskName;
    taskDiv.appendChild(task);
    document.body.appendChild(taskDiv);
    closePopup();
}

function createPopup() {
    let popup = document.createElement("div");
    popup.classList.add("popup", "fade-in");

    let heading = document.createElement("div");
    heading.classList.add("heading");
    heading.textContent = "New Task!";

    let taskLabel = document.createElement("label");
    taskLabel.textContent = "Task:";
    taskLabel.setAttribute("for", "taskName");
    taskLabel.classList.add("label");

    let task = document.createElement("input");
    task.setAttribute("id", "taskName");
    task.setAttribute("required", "true");
    task.setAttribute("type", "text");
    task.setAttribute("placeholder", "Name of the task");
    task.classList.add("input");

    let dateLabel = document.createElement("label");
    dateLabel.textContent = "Deadline:";
    dateLabel.setAttribute("for", "deadline");
    dateLabel.classList.add("label");

    let date = document.createElement("input");
    date.setAttribute("id", "deadline");
    date.setAttribute("type", "date");
    date.classList.add("input");

    let descLabel = document.createElement("label");
    descLabel.textContent = "Description:";
    descLabel.setAttribute("for", "description");
    descLabel.classList.add("label");

    let desc = document.createElement("textarea");
    desc.setAttribute("id", "description");
    desc.classList.add("descInput");

    let submit = document.createElement("button");
    submit.innerText = "Submit";
    submit.setAttribute("onclick", "addOnScreen()");
    submit.classList.add("buttons");

    let emptyDiv = document.createElement("div");
    emptyDiv.classList.add("emptyDiv");

    popup.appendChild(heading);
    popup.appendChild(taskLabel);
    popup.appendChild(task);
    popup.appendChild(dateLabel);
    popup.appendChild(date);
    popup.appendChild(emptyDiv);
    popup.appendChild(descLabel);
    popup.appendChild(desc);
    popup.appendChild(submit);

    document.body.appendChild(popup);

    enableEnterToNextInput();
}

function closePopup() {
    let popup = document.querySelector(".popup");
    if (popup) {
        popup.classList.remove("fade-in");
        popup.classList.add("fade-out");

        popup.addEventListener('animationend', function() {
            popup.remove();
            
            let addTaskButton = document.createElement("button");
            addTaskButton.innerText = "Add a new task"; 
            addTaskButton.setAttribute("onclick", "addTask(this)");
            addTaskButton.classList.add("fade-in");
            document.body.appendChild(addTaskButton);
        }, { once: true });
    }
}

function addTask(button) {
    button.classList.add("fade-out");

    button.addEventListener('animationend', function() {
        button.remove();
        createPopup();
    }, { once: true });
}

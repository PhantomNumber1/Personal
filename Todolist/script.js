function details(){
    var div = document.createElement("division");
    div.classList.add("popup");
    var heading = document.createElement("heading");
    heading.classList.add("heading");
    heading.textContent = "New Task!"
    var task = document.createElement("input");
    var desc = document.createElement("input");
    task.setAttribute("type", "text");
    task.setAttribute("placeholder", "Task");
    task.classList.add("taskInput");
    desc.setAttribute("type", "text");
    desc.setAttribute("name", "desc");
    desc.setAttribute("placeholder", "Description");
    desc.classList.add("descInput");
    div.appendChild(heading);
    div.appendChild(task);
    div.appendChild(desc);
    document.body.appendChild(div);
}
function addTask(){
    document.getElementById("addTask").disable = true;
    var container = document.getElementById("container");
    details();
}
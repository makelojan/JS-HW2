const UL = document.querySelector("ul");
const INPUT = document.querySelector("input");
const ADD_BUTTON = document.querySelector("button.add");

function Check_Remove(e) {
    const LI = e.path[1];
    if (e.target.tagName == "BUTTON") {
        tasks.splice(tasks.findIndex(task=>task.text==LI.children[1].innerHTML), 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        LI.remove();
        $(".bg-danger").toast("show");
    } else {
        if (LI.classList.contains("task")) {
            LI.classList.remove("task");
            LI.classList.add("checked");
            tasks.find(task=>task.text == LI.children[1].innerHTML).checked = true;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else if (LI.classList.contains("checked")){
            LI.classList.remove("checked");
            LI.classList.add("task");
            tasks.find(task=>task.text == LI.children[1].innerHTML).checked = false;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
}
function Add(text, checked) {
    const LI = document.createElement("li");
    LI.className = checked ? "checked" : "task";
    const CHECK = document.createElement("span");
    CHECK.innerHTML = "&#10003";
    CHECK.className = "check";
    LI.appendChild(CHECK);
    const TEXT = document.createElement("span");
    TEXT.innerHTML = text;
    TEXT.className = "text";
    LI.appendChild(TEXT);
    const BUTTON = document.createElement("button");
    BUTTON.innerHTML = "x";
    BUTTON.className = "remove";
    LI.appendChild(BUTTON);
    UL.appendChild(LI);
}

let tasks = [];
if (localStorage.hasOwnProperty("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
} else {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
tasks.map(task=>Add(task.text, task.checked));

UL.addEventListener("click", Check_Remove);
ADD_BUTTON.addEventListener("click", ()=>{
    if (INPUT.value) {
        Add(INPUT.value, false);
        tasks.push({"text": INPUT.value, "checked": false});
        localStorage.setItem("tasks", JSON.stringify(tasks));
        INPUT.value = "";
        $(".bg-success").toast("show");
    } else {
        $(".bg-warning").toast("show");
    }
});

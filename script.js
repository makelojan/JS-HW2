const UL = document.querySelector("ul");
const INPUT = document.querySelector("input");
const ADD_BUTTON = document.querySelector("button.add");

if (localStorage.hasOwnProperty("tasks")) {

} else {
    localStorage.setItem("tasks", "");
}

function Check_Remove(e) {
    const LI = e.path[1];
    if (e.target.tagName == "BUTTON") {
        LI.remove();
    } else {
        if (LI.classList.contains("task")) {
            LI.classList.remove("task");
            LI.classList.add("checked");
        } else {
            LI.classList.remove("checked");
            LI.classList.add("task");
        }
    }
}
function Add() {
    const LI = document.createElement("li");
    LI.className = "task";
    const CHECK = document.createElement("span");
    CHECK.innerHTML = "&#10003";
    CHECK.className = "check";
    LI.appendChild(CHECK);
    const TEXT = document.createElement("span");
    TEXT.innerHTML = INPUT.value;
    TEXT.className = "text";
    LI.appendChild(TEXT);
    const BUTTON = document.createElement("button");
    BUTTON.innerHTML = "x";
    BUTTON.className = "remove";
    LI.appendChild(BUTTON);
    UL.appendChild(LI);
}

UL.addEventListener("click", Check_Remove);
ADD_BUTTON.addEventListener("click", Add);

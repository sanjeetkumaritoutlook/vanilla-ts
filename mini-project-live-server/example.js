var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(greet("World"));
document.body.innerHTML = greet("World");
//Interactive To-do -list
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function () {
    var task = taskInput.value.trim();
    if (!task)
        return;
    var li = document.createElement("li");
    li.textContent = task;
    var del = document.createElement("button");
    del.textContent = "❌";
    del.onclick = function () { return li.remove(); };
    li.appendChild(del);
    taskList.appendChild(li);
    taskInput.value = "";
});
//Mini Counter with Keyboard Support
//Use TypeScript’s type safety for event handling.
var count = 0;
var counter = document.createElement("h1");
var incBtn = document.createElement("button");
var decBtn = document.createElement("button");
counter.textContent = "Count: ".concat(count);
incBtn.textContent = "➕ Increase";
decBtn.textContent = "➖ Decrease";
document.body.append(counter, incBtn, decBtn);
function updateCount(delta) {
    count += delta;
    counter.textContent = "Count: ".concat(count);
}
incBtn.onclick = function () { return updateCount(1); };
decBtn.onclick = function () { return updateCount(-1); };
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp")
        updateCount(1);
    if (e.key === "ArrowDown")
        updateCount(-1);
});

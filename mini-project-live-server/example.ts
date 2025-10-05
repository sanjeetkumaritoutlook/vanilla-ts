const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("World"));
document.body.innerHTML = greet("World");

//Interactive To-do -list
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  const del = document.createElement("button");
  del.textContent = "❌";
  del.onclick = () => li.remove();

  li.appendChild(del);
  taskList.appendChild(li);
  taskInput.value = "";
});

//Mini Counter with Keyboard Support
//Use TypeScript’s type safety for event handling.

let count = 0;
const counter = document.createElement("h1");
const incBtn = document.createElement("button");
const decBtn = document.createElement("button");

counter.textContent = `Count: ${count}`;
incBtn.textContent = "➕ Increase";
decBtn.textContent = "➖ Decrease";

document.body.append(counter, incBtn, decBtn);

function updateCount(delta: number) {
  count += delta;
  counter.textContent = `Count: ${count}`;
}

incBtn.onclick = () => updateCount(1);
decBtn.onclick = () => updateCount(-1);

document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "ArrowUp") updateCount(1);
  if (e.key === "ArrowDown") updateCount(-1);
});

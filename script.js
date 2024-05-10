const input = document.querySelector(".input-task");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector(".list-tasks");

let listTask = [];

function addTask() {
  listTask.push({
    tarefa: input.value,
    checked: false,
  });
  mostrarTask();
  input.value = "";
}

function mostrarTask() {
  let novaLi = "";

  listTask.forEach((item, position) => {
    novaLi += `
      <li class="task ${item.checked && 'done'}">
        <img src="./imgs/checked.png" onclick="check(${position})"/>
        <p>${item.tarefa}</p>
        <img src="./imgs/trash.png" onclick="removeTask(${position})"/>
      </li>`;
  });

  list.innerHTML = novaLi;

  localStorage.setItem("listTask", JSON.stringify(listTask));
}

function check(position) {
  listTask[position].checked = !listTask[position].checked;
  mostrarTask();
}

function removeTask(position) {
  listTask.splice(position, 1);
  mostrarTask();
}

function loadTask() {
  const taskLocalStorage = localStorage.getItem("listTask");
  if (taskLocalStorage) {
    listTask = JSON.parse(taskLocalStorage);
  }
  mostrarTask();
}

loadTask();
addBtn.addEventListener("click", addTask);

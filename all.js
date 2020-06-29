let lastTaskCount = 0;
const tasks = [];
const task = document.querySelector('#task');
const submit = document.querySelector('.submit');
const todoList = document.querySelector('#todoList');
const taskCount = document.querySelector('#taskCount');
const clearAllTask = document.querySelector('#clearAllTask');

submit.addEventListener('click', addTask, false);
clearAllTask.addEventListener('click', removeAll, false);
todoList.addEventListener('click', deleteTask, false);
todoList.addEventListener('click', completed, false);

function addTask() {
  if (task.value.trim() !== '') {
    const todo = {};
    todo.id = Math.floor(Date.now());
    todo.title = task.value;
    todo.completed = false;
    tasks.push(todo);
    showTasks();
    showTaskCount();
  }
}

function showTasks() {
  let lists = '';
  tasks.forEach((todo) => {
    lists += `<li>
    <label class="checkbox-inline ${ todo.completed ? 'completed' : ''}" data-action="completed" data-id="${ todo.id }">
    <input type="checkbox" ${ todo.completed ? 'checked' : ''} data-action="completed" data-id="${ todo.id }">${ todo.title }</label>
    <button type="button" class="close ml-auto">
    <span class="remove" data-action="remove" data-id="${ todo.id }">&times;</span>
    </button>
    </li>`;
  });
  todoList.innerHTML = lists;
  task.value = '';
  lastTaskCount = tasks.length;
}

function showTaskCount() {
  taskCount.innerHTML = lastTaskCount;
}

function removeAll() {
  tasks.length = 0;
  lastTaskCount = 0;
  showTasks();
  showTaskCount();
}

function deleteTask(e) {
  let target = e.target.dataset.id;
  let action = e.target.dataset.action;
  if (action == 'remove') {
    tasks.forEach((item, index) => {
      if (item.id == target) {
        tasks.splice(index, 1);
      }
    });

    lastTaskCount = tasks.length;
    showTasks();
    showTaskCount();
  }
}

function completed(e) {
  let target = e.target.dataset.id;
  let action = e.target.dataset.action;
  if (action == 'completed') {
    tasks.forEach((item) => {
      if (item.id == target) {
        item.completed = item.completed ? false : true;
      }
    });

    showTasks();
  }
}
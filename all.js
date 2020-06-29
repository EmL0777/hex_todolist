let lastTaskCount = 0;
const tasks = [];
const task = document.querySelector('#task');
const submit = document.querySelector('.submit');
const todoList = document.querySelector('#todoList');
const taskCount = document.querySelector('#taskCount');
const clearAllTask = document.querySelector('#clearAllTask');

submit.addEventListener('click', addTask, false);
clearAllTask.addEventListener('click', removeAll, false);

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
  let count = 0;
  tasks.forEach( (todo) => {
    lists += `<li>
    <label class="checkbox-inline"><input type="checkbox" >${ todo.title }</label>
    </li>`;
    count += 1;
  });
  todoList.innerHTML = lists;
  task.value = '';
  lastTaskCount = count;
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
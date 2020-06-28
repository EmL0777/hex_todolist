const tasks = [];
const task = document.querySelector('#task');
const submit = document.querySelector('.submit');
const todoList = document.querySelector('#todoList');

submit.addEventListener('click', addTask, false);

function addTask() {
  if (task.value.trim() !== '') {
    const todo = {};
    todo.id = Math.floor(Date.now());
    todo.title = task.value;
    todo.completed = false;
    tasks.push(todo);
    showTasks();
  }
}

function showTasks() {
  let lists = '';
  tasks.forEach( (todo, index) => {
    lists += `<li>
    <label class="checkbox-inline"><input type="checkbox" >${ todo.title }</label>
    </li>`;
  });
  todoList.innerHTML = lists;
  task.value = '';
}
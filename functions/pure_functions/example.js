const tasks = Object.freeze([
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Clean the house', completed: true },
]);

function addTask(tasks, task) {
  return [...tasks, task];
}

function completeTask(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task
  );
}

const newTask = { id: 3, title: 'Do laundry', completed: false };
const updatedTasks = addTask(tasks, newTask);
console.log(updatedTasks);

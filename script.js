class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  createList() {
    const firstLvl = document.querySelector('.firstlvl');
    const secondLvl = document.querySelector('.secondlvl');
    const listItem = document.createElement('li');
    listItem.textContent = this.description;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Выполнено';
    completeButton.addEventListener('click', () => {
      this.completed = true;
      listItem.classList.add('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', () => {
      firstLvl.removeChild(listItem);
      secondLvl.removeChild(completeButton);
      secondLvl.removeChild(deleteButton);

    });

    firstLvl.appendChild(listItem);
    secondLvl.appendChild(completeButton);
    secondLvl.appendChild(deleteButton);
    firstLvl.appendChild(listItem);
  }
}

function addTaskFunction() {
  const newTask = document.getElementById('newTask').value;
  if (newTask !== '') {
    const task = new Task(newTask);
    task.createList();
    document.getElementById('newTask').value = '';
  }
}


document.getElementById('addTask').addEventListener('click', addTaskFunction);

document.getElementById('newTask').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTaskFunction();
  }
});
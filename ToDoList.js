
    let todoList = JSON.parse(localStorage.getItem('todoList')) || [
      { name: 'make dinner', dueDate: '2022-12-22' },
      { name: 'wash dishes', dueDate: '2022-12-22' }
    ];

    function renderTodoList() {

      let todoListHTML = '';

      todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button onclick="deleteTodoItem(${index})" class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
      }) 
      
      const todoListContainer = document.querySelector('.js-todo-list');
      todoListContainer.innerHTML = todoListHTML;
  
    }

    function addTodo() {
      const inputElement = document.querySelector('.js-name-input');
      const name = inputElement.value.trim();

      const dateInputElement = document.querySelector('.js-due-date-input');
      const dueDate = dateInputElement.value;

      if (name === '' || dueDate === '') {
        alert('Both fields are required.');
        return;
      }

      todoList.push({ name, dueDate });

      inputElement.value = '';
      dateInputElement.value = '';

      saveToStorage();
      renderTodoList();
    }

    function deleteTodoItem(index) {
      todoList.splice(index, 1);
      saveToStorage();
      renderTodoList();
    }

    function saveToStorage() {
      localStorage.setItem('todoList', JSON.stringify(todoList));
      console.log('LocalStorage updated:', localStorage.getItem('todoList'));
    }
    renderTodoList();
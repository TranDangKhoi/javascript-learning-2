// MVC

class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todoList")) || [];
  }

  handleChangeToDo(handler) {
    this.todoListChange = handler;
  }

  _reload(todos) {
    this.todoListChange(todos);
    localStorage.setItem("todoList", JSON.stringify(todos));
  }

  addTodo(todoText) {
    if (todoText.length > 0) {
      this.todos.push(todoText);
    }
    this._reload(this.todos);
  }

  removeTodo(todoText) {
    const index = this.todos.findIndex((item) => item === todoText);
    this.todos.splice(index, 1);
    this._reload(this.todos);
  }
}

class View {
  constructor() {
    this.app = this.getElement("body");

    this.todoWrapper = this.createElement("div", "todo");
    this.todoForm = this.createElement("form", "todo-form");
    this.todoForm.autoComplete = "off";

    this.todoInput = this.createElement("input", "todo-input");
    this.todoInput.type = "text";
    this.todoInput.placeholder = "Enter your tasks...";
    this.todoInput.name = "todo";

    this.submitBtn = this.createElement("button", "todo-submit");
    this.submitBtn.type = "submit";
    this.submitBtn.textContent = "Add";

    this.todoForm.append(this.todoInput, this.submitBtn);

    this.todoList = this.createElement("div", "todo-list");
    this.todoWrapper.append(this.todoForm, this.todoList);
    this.app.append(this.todoWrapper);
  }
  // createElement: Tạo ra element mong muốn
  createElement(tag, className) {
    const elm = document.createElement(tag);
    if (className) elm.classList.add(className);
    return elm;
  }
  // getElement: Truy vấn element
  getElement(selector) {
    const elm = document.querySelector(selector);
    return elm;
  }

  get _todoValue() {
    return this.todoInput.value;
  }

  _resetValue() {
    this.todoInput.value = "";
  }

  displayTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }
    if (todos.length > 0) {
      todos.forEach((todoText) => {
        const todoItem = this.createElement("div", "todo-item");
        const span = this.createElement("span", "todo-text");
        span.textContent = todoText;
        const icon = this.createElement("i");
        icon.className = "fa-solid fa-trash todo-remove";
        icon.setAttribute("data-value", todoText);
        todoItem.append(span, icon);
        this.todoList.append(todoItem);
      });
    }
  }

  viewAddTodos(handler) {
    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this._todoValue) {
        handler(this._todoValue);
        this._resetValue();
      }
    });
  }

  viewRemoveTodo(handler) {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.matches(".todo-remove")) {
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);
        const value = e.target.dataset.value;
        handler(value);
      }
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.handleChangeToDo(this.handleChangeToDo);
    this.view.viewAddTodos(this.handleAddTodo);
    this.view.viewRemoveTodo(this.handleRemoveTodo);
    this.handleChangeToDo(this.model.todos);
  }

  handleChangeToDo = (todos) => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText);
  };

  handleRemoveTodo = (todoText) => {
    this.model.removeTodo(todoText);
  };
}

const app = new Controller(new Model(), new View());

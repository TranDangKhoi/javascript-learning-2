// MVC

class Model {
  constructor() {}
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
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());

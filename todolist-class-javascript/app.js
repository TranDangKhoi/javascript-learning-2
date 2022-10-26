// MVC

class Model {
  constructor() {}
}

class View {
  constructor() {}
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

import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoItem extends Component {
  constructor(todo) {
    super();
    this.todo = todo;
  }
  render() {
    const { id, description, completed } = this.todo;

    const todoElement = document.createElement("li");
    todoElement.className = `todo-item ${completed ? "completed" : ""}`;
    todoElement.innerHTML = `
      <span>${description}</span>
      <button class="complete-btn">${
        completed ? "Undo" : "Mark complete"
      }</button>
      <button class="delete-btn">Delete</button>
    `;

    todoElement.querySelector(".complete-btn").addEventListener("click", () => {
      todoContext.toggleTodoCompletion(id);
    });

    todoElement.querySelector(".delete-btn").addEventListener("click", () => {
      todoContext.deleteTodo(id);
    });

    return todoElement;
  }
}

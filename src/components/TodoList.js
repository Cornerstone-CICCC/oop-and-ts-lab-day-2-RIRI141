import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoList extends Component {
  render() {
    const todoListElement = document.createElement("div");
    todoListElement.className = "todo-list";

    const listElement = document.createElement("ul");
    listElement.id = "todo-list-ul";

    todoListElement.appendChild(listElement);

    const renderTodos = (todos) => {
      listElement.innerHTML = "";
      todos.forEach((todo) => {
        const todoItem = new TodoItem(todo);
        listElement.appendChild(todoItem.render());
      });
    };

    renderTodos(todoContext.getTodos());

    todoContext.addListener(renderTodos);

    return todoListElement;
  }
}

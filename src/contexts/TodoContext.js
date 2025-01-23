export class TodoContext {
  constructor() {
    this.todos = [];
    this.listeners = [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(description) {
    const newTodo = {
      id: Math.floor(Math.random() * (5000 - 1) + 1),
      description,
      completed: false,
    };
    this.todos.push(newTodo);
    console.log(this.todos);
    this.notifyListeners();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.notifyListeners();
  }

  toggleTodoCompletion(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.notifyListeners();
  }

  // リスナーを登録する
  addListener(listener) {
    this.listeners.push(listener);
  }

  // 登録されたリスナーに変更を通知する
  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.todos));
  }
}

export const todoContext = new TodoContext();

import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./Context";
import AddTodo from "./Todo/AddTodo";

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" },
  ]);
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          completed: false,
          title,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Задачи</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <h1>Задач нет</h1>
        )}
      </div>
    </Context.Provider>
  );
}

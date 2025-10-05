import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

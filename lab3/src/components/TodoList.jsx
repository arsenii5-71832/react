import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

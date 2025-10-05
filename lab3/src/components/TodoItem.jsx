import { useState } from "react";

export default function TodoItem({ id, text, removeTodo }) {
  const [completed, setCompleted] = useState(false);

  return (
    <li
      className={`flex justify-between items-center p-3 border rounded ${
        completed ? "bg-gray-100 line-through text-gray-500" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        <span>{text}</span>
      </div>
      <button
        onClick={() => removeTodo(id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}

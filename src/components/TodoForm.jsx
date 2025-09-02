import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoButtonCreate from "./TodoButtonCreate";

export default function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2 flex-col sm:flex-row">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nueva tarea..."
        className="w-full border px-3 h-10 sm:basis-3/4"
      />
      <TodoButtonCreate />
    </form>
  );
}

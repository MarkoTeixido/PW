import { Trash2 } from "lucide-react";

export default function TodoItem({ todo, onComplete, onDelete }) {
  return (
    <li className="flex items-center gap-2 border px-1.5 min-h-10">
      <input
        type="checkbox"
        className="w-5 h-5 accent-black"
        checked={todo.completed}
        onChange={onComplete}
      />
      <p className={`capitalize flex-1 text-left line-clamp-2 ${todo.completed ? "line-through text-black" : ""}`}>
        {todo.text}
      </p>
      <button className="hover:text-neutral-700" onClick={onDelete}>
        <Trash2 size={20} />
      </button>
    </li>
  );
}

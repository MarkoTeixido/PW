import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoEmpty from "./components/TodoEmpty";
import TodoLoading from "./components/TodoLoading";
import TodoError from "./components/TodoError";

export default function App() {
  const { 
    todos, 
    completeTodo, 
    deleteTodo, 
    loading, 
    error 
  } = useContext(TodoContext);
  

  return (
    <main className="max-w-md min-w-[300px] max-sm:mx-4 min-[480px]:mx-auto mt-40 bg-white">
      
      <TodoHeader />

      <section className="flex flex-col gap-4">
        <TodoForm />

        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && todos.length === 0 && <TodoEmpty />}

        <TodoList>
          {todos.slice().reverse().map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

      </section>
    </main>
  );
}

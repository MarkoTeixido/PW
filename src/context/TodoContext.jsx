import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveitem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  // Crear tarea
  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodos = [...todos, { text, completed: false }];
    saveTodos(newTodos);
  };

  // Completar / desmarcar tarea
  const completeTodo = (text) => {
    const newTodos = todos.map((todo) =>
      todo.text === text ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(newTodos);
  };

  // Eliminar tarea
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todos,
        addTodo,
        completeTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

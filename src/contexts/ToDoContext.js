import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [{ id: 1, todo: "to do msg", completed: false }],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  //theme: "dark"
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const TodoProvider = ToDoContext.Provider;

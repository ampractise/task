import React, { useState } from "react";
import { useToDo } from "../contexts/index";

function TodoItem({ todo }) {
  const { updateToDo, deleteTodo, toggleComplete } = useToDo();
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const editTodo = () => {
    updateToDo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer size-7 my-auto"
        checked={todo.completed}
        onChange={toggleCompleted}
        disabled={isTodoEditable}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg 
        ${
          isTodoEditable
            ? "border-black/10 px-2 bg-slate-100"
            : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 
        ${isTodoEditable ? "opacity-40 cursor-not-allowed" : ""}`}
        disabled={isTodoEditable}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

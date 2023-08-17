import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export default function Todolist({ filter }) {
  const [todos, setTodos] = useState([
    { id: 12, text: "밥먹기", status: "active" },
    { id: 123, text: "밥먹", status: "active" },
  ]);

  const handleAdd = (text) => {
    setTodos([...todos, text]);
  };

  const handleUpdate = (update) => {
    setTodos(todos.map((todo) => (todo.id === update.id ? update : todo)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id === deleted.id));
  };

  const filtered = getFilter(todos, filter);

  return (
    <div>
      {filtered.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function getFilter(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

import React, { useContext, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styled from "styled-components";
import { DarkModeContext } from "../context/DarkModeContext";

const TodoContent = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
`;

export default function Todolist({ filter }) {
  const { theme, dark } = useContext(DarkModeContext);

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
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const filtered = getFilter(todos, filter);

  return (
    <TodoContent theme={theme} dark={dark}>
      {filtered.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          dark={dark}
        />
      ))}
      <AddTodo onAdd={handleAdd} dark={dark} />
    </TodoContent>
  );
}

function getFilter(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

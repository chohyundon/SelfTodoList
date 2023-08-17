import React from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { status, text } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <span>{text}</span>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
}

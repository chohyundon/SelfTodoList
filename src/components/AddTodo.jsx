import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuid(), text, status: "active" });
    setText("");
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <button>Add</button>
      </form>
    </div>
  );
}

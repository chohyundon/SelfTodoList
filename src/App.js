import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Header from "./Header/Header";

const filters = ["all", "active", "completed"];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <Header
        filters={filters}
        filter={filter}
        onChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </div>
  );
}

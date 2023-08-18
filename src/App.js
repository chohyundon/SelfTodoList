import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Header from "./Header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <DarkModeProvider>
        <Header
          filters={filters}
          filter={filter}
          onChange={(filter) => setFilter(filter)}
        />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </div>
  );
}

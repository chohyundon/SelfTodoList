import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Header({ filters, onChange }) {
  const { toggleDarkMode, dark } = useContext(DarkModeContext);

  return (
    <>
      <button onClick={toggleDarkMode}>{dark === false ? "🌞" : "🌕"}</button>
      {filters.map((filter, index) => (
        <div key={index}>
          <button onClick={() => onChange(filter)}>{filter}</button>
        </div>
      ))}
    </>
  );
}

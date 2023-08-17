import React from "react";

export default function Header({ filters, onChange }) {
  return (
    <div>
      {filters.map((filter) => (
        <button onClick={() => onChange(filter)}>{filter}</button>
      ))}
    </div>
  );
}

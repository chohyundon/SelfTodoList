import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function Theme({ children }) {
  const [dark, setDark] = useState(false);
  const toggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

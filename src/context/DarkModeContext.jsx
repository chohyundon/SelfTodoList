import { createContext, useState } from "react";

export const DarkModeContext = createContext();

const theme = {
  light: {
    background: "#eeeeee",
    foreground: "#000000",
  },
  dark: {
    background: "#222222",
    foreground: "#ffffff",
  },
};

export function DarkModeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider
      value={{ theme: dark ? theme.dark : theme.light, dark, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

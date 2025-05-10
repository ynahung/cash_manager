import React, { useState, useEffect } from "react";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { lightTheme, darkTheme } from "./theme";

export function ThemeToggle({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div>
        <IconButton
          onClick={toggleTheme}
          color="inherit"
          sx={{
            position: "fixed",
            right: 20,
            top: 20,
            zIndex: 1000,
          }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {children}
      </div>
    </ThemeProvider>
  );
}

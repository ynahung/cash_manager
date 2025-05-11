import React, { useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../components/theme/ThemeContext";
import { lightTheme, darkTheme } from "../theme/theme";

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

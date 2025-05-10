import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

// Import pages
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import AddTransaction from "./pages/AddTransaction";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/add" element={<AddTransaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

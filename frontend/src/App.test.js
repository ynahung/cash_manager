import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";
import { lightTheme } from "./theme/theme";
import Home from "./pages/Home";

test("renders welcome message", () => {
  render(
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Home />
      </Router>
    </ThemeProvider>,
  );
  const welcomeElement = screen.getByText(/Welcome to Cash Manager/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("renders navigation links", () => {
  render(
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Home />
      </Router>
    </ThemeProvider>,
  );
  const dashboardLink = screen.getByText(/Dashboard/i, { selector: "span" });
  const transactionsLink = screen.getByText(/Transactions/i, {
    selector: "span",
  });
  expect(dashboardLink).toBeInTheDocument();
  expect(transactionsLink).toBeInTheDocument();
});

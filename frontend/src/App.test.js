import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

test("renders welcome message", () => {
  render(
    <Router>
      <Home />
    </Router>,
  );
  const welcomeElement = screen.getByText(/Welcome to Cash Manager/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("renders navigation links", () => {
  render(
    <Router>
      <Home />
    </Router>,
  );
  const dashboardLink = screen.getByText(/Dashboard/i, { selector: "span" });
  const transactionsLink = screen.getByText(/Transactions/i, {
    selector: "span",
  });
  expect(dashboardLink).toBeInTheDocument();
  expect(transactionsLink).toBeInTheDocument();
});

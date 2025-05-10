import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Cash Manager/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("renders transactions links", () => {
  render(<App />);
  const viewTransactionsButton = screen.getByText(/View Transactions/i);
  const addTransactionButton = screen.getByText(/Add New Transaction/i);
  expect(viewTransactionsButton).toBeInTheDocument();
  expect(addTransactionButton).toBeInTheDocument();
});

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";

function AddTransaction() {
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState("income");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/transactions/', {
        transaction_type: transactionType,
        amount: parseFloat(amount),
        description,
        category,
        date,
      });
      navigate("/transactions");
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Transaction
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Transaction Type</InputLabel>
            <Select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              label="Transaction Type"
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <TextField
            fullWidth
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <TextField
            fullWidth
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
          />

          <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
            Add Transaction
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddTransaction;

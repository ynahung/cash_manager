import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Cash Manager
      </Typography>
      <Typography variant="body1" paragraph>
        Manage your cash flow and expenses easily with our intuitive interface.
      </Typography>

      <Box sx={{ my: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/transactions")}
        >
          View Transactions
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ ml: 2 }}
          onClick={() => navigate("/transactions/add")}
        >
          Add New Transaction
        </Button>
      </Box>

      <Typography variant="body1" paragraph>
        This application helps you track your income and expenses, categorize
        transactions, and get insights into your financial habits.
      </Typography>
    </Box>
  );
}

export default Home;

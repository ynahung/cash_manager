import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINTS } from "../config/api";

function Home() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Test API connection
    setLoading(true);
    setError(null);

    try {
      // Log the API endpoints for debugging
      console.log("API Endpoints:", API_ENDPOINTS);

      axios
        .get(API_ENDPOINTS.transactions)
        .then((response) => {
          console.log("API Connection Success:", response.data);
        })
        .catch((error) => {
          console.error("API Connection Error:", error);
          setError("Failed to connect to backend server");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Configuration Error:", error);
      setError("Failed to initialize application configuration");
      setLoading(false);
    }
  }, []);

  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {loading && (
        <Box sx={{ mb: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography color="error" sx={{ mb: 4 }}>
          {error}
        </Typography>
      )}
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

import React from "react";
import {
  Typography,
  Box,
  Paper,
  Button,
  Grid,
  Avatar,
  useTheme,
} from "@mui/material";
import BaseLayout from "../components/layout/BaseLayout";
import { Payments, Money, Equalizer, ArrowRightAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import api from "../config/axios";
import { API_ENDPOINTS } from "../config/api";
import {
  PageLayout,
  CardLayout,
  TransactionCard,
  PrimaryButton,
  SecondaryButton,
  Title,
  Subtitle,
  ErrorContainer,
} from "../components/theme";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <BaseLayout>
      <Box
        sx={{
          p: 3,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            color:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(0, 0, 0, 0.9)",
          }}
        >
          Welcome to Cash Manager
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {/* Quick Actions */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Money />}
                    onClick={() => navigate("/transactions")}
                    fullWidth
                  >
                    View Transactions
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Payments />}
                    onClick={() => navigate("/transactions/add")}
                    fullWidth
                  >
                    Add Transaction
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Statistics */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Your Financial Overview
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar sx={{ bgcolor: theme.palette.success.main, mr: 2 }}>
                      <Money />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Total Income
                      </Typography>
                      <Typography variant="h5">$12,500.00</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar sx={{ bgcolor: theme.palette.error.main, mr: 2 }}>
                      <Payments />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Total Expenses
                      </Typography>
                      <Typography variant="h5">$8,200.00</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                      <Equalizer />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Balance
                      </Typography>
                      <Typography variant="h5" color="success.main">
                        $4,300.00
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Recent Activity */}
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Recent Activity</Typography>
                  <Button
                    variant="text"
                    size="small"
                    endIcon={<ArrowRightAlt />}
                    onClick={() => navigate("/transactions")}
                  >
                    View All
                  </Button>
                </Box>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Paper sx={{ p: 2, flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      May 10, 2025
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Salary Payment
                    </Typography>
                    <Typography variant="body1" color="success.main">
                      +$5,000.00
                    </Typography>
                  </Paper>
                  <Paper sx={{ p: 2, flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      May 10, 2025
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Grocery Shopping
                    </Typography>
                    <Typography variant="body1" color="error.main">
                      -$250.00
                    </Typography>
                  </Paper>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </BaseLayout>
  );
};

export default Home;

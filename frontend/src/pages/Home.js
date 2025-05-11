import React from "react";
import {
  Typography,
  Box,
  Button,
  Paper,
  Avatar,
  useTheme,
} from "@mui/material";
import BaseLayout from "../components/layout/BaseLayout";
import { Payments, Money, Equalizer, ArrowRightAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import BoxCard from "../components/BoxCard";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <BaseLayout>
      <Box
        sx={{
          p: 3,
          width: "100%",
          mt: "64px", // 64px to match header height
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontSize: "2rem",
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          Welcome to Cash Manager
        </Typography>
        <Box sx={{ mt: 1, p: 2 }}>
          <Box sx={{ mt: 1, p: 2 }}>
            <Box
              sx={{
                width: "100%",
                "& > *": {
                  mb: 4,
                },
              }}
            >
              <BoxCard title="Quick Actions">
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
              </BoxCard>

              <BoxCard title="Your Financial Overview">
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
                        Net Balance
                      </Typography>
                      <Typography variant="h5">$4,300.00</Typography>
                    </Box>
                  </Box>
                </Box>
              </BoxCard>

              <BoxCard title="Recent Activity">
                <Box sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="subtitle1">
                      Recent Transactions
                    </Typography>
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
                        May 9, 2025
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        Grocery Shopping
                      </Typography>
                      <Typography variant="body1" color="error.main">
                        -$150.00
                      </Typography>
                    </Paper>
                    <Paper sx={{ p: 2, flex: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        May 8, 2025
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        Rent Payment
                      </Typography>
                      <Typography variant="body1" color="error.main">
                        -$250.00
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </BoxCard>
            </Box>
          </Box>
        </Box>
      </Box>
    </BaseLayout>
  );
};

export default Home;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Header from "../Header";
import { Money, Payments, Equalizer } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../../theme/theme";
import { useThemeContext } from "../theme/ThemeContext";
import { useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = "240px"; // px
const COLLAPSED_WIDTH = "60px"; // px
const SIDEBAR_PADDING = "24px"; // px

const BaseLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { darkMode } = useThemeContext();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH,
            bgcolor: "background.paper",
            transition: "width 0.3s ease-in-out",
            zIndex: 999, // Ensure sidebar appears below header
          }}
        >
          <Sidebar
            items={[
              {
                id: "dashboard",
                label: "Dashboard",
                icon: <Money />,
              },
              {
                id: "transactions",
                label: "Transactions",
                icon: <Payments />,
              },
              {
                id: "reports",
                label: "Reports",
                icon: <Equalizer />,
              },
            ]}
            header={
              <Typography variant="h6" sx={{ ml: 2 }}>
                Cash Manager
              </Typography>
            }
            collapsed={collapsed}
            onToggle={() => setCollapsed(!collapsed)}
            onItemClick={(item) => {
              if (item.id === "dashboard") {
                navigate("/");
              } else {
                handleNavigation(`/${item.id}`);
              }
            }}
          />
        </Box>
        {/* Header */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            left: collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH,
            height: "64px",
            bgcolor: "background.paper",
            boxShadow: "none",
            zIndex: 1001, // Below header but above content
            transition: "left 0.3s ease-in-out",
          }}
        >
          <Header />
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            minHeight: "100vh",
            p: 3,
            position: "relative",
            width: "100%",
            ml: collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH,
            pl: collapsed ? 0 : SIDEBAR_PADDING,
            transition: "margin-left 0.3s ease-in-out",
          }}
        >
          {/* Content */}
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BaseLayout;

import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Money from "@mui/icons-material/Money";
import Payments from "@mui/icons-material/Payments";
import Equalizer from "@mui/icons-material/Equalizer";
import Sidebar from "../sidebar/Sidebar";
import { lightTheme, darkTheme } from "../theme/theme";
import { useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = "240px"; // px
const COLLAPSED_WIDTH = "60px"; // px
const SIDEBAR_PADDING = "24px"; // px

const BaseLayout = ({ children }) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

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
        {/* Theme Toggle */}
        <Box
          sx={{
            position: "fixed",
            top: 10,
            right: 20,
            zIndex: 1000,
          }}
        >
          <IconButton size="small" onClick={handleThemeToggle} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        {/* Sidebar */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH,
            bgcolor: "background.sidebar",
            borderRight: 1,
            borderColor: "divider",
            transition: "width 0.3s ease-in-out",
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

import React from "react";
import { List, ListItem, IconButton, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContext";

const Header = () => {
  const theme = useTheme();
  const { toggleTheme } = useThemeContext();

  return (
    <Box
      sx={{
        width: "100%",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 24px",
        bgcolor:
          theme.palette.mode === "dark"
            ? theme.palette.header.dark
            : theme.palette.header.light,
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        zIndex: 1002, // Ensure it's above the sidebar
        border: "none",
        boxShadow: "none",
        transition: "left 0.3s ease-in-out",
      }}
    >
      <List sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <ListItem disablePadding>
          <IconButton
            size="large"
            onClick={toggleTheme}
            sx={{
              p: 1,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;

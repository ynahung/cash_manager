import { createTheme } from "@mui/material/styles";
import { getColors } from "../config/palette";

const createThemeConfig = (mode) => {
  const colors = getColors(mode);

  return {
    palette: {
      mode,
      ...colors,
    },
    typography: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      h1: {
        fontSize: "2.5rem",
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.87)",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.87)",
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.87)",
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.87)",
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.87)",
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
        color: "rgba(0, 0, 0, 0.87)",
      },
      body1: {
        fontSize: "1rem",
        color: "rgba(0, 0, 0, 0.87)",
      },
      body2: {
        fontSize: "0.875rem",
        color: "rgba(0, 0, 0, 0.6)",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
            fontWeight: 600,
            padding: "8px 24px",
            "&:hover": {
              boxShadow: "none",
            },
          },
          contained: {
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          },
          outlined: {
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          },
        },
      },
    },
  };
};

export const lightTheme = createTheme(createThemeConfig("light"));
export const darkTheme = createTheme(createThemeConfig("dark"));

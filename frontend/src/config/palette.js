export const palette = {
  primary: {
    main: "#0096c7",
    light: "#ade8f4",
    dark: "#023e8a",
  },
  secondary: {
    main: "#00b4d8",
    light: "#caf0f8",
    dark: "#03045e",
  },
  success: {
    main: "#90e0ef",
    light: "#caf0f8",
    dark: "#0077b6",
  },
  error: {
    main: "#f44336",
    light: "#ef5350",
    dark: "#d32f2f",
  },
  background: {
    light: {
      default: "#caf0f8",
      paper: "#ade8f4",
      sidebar: "#0077b6",
    },
    dark: {
      default: "#003e8a",
      paper: "#005b96",
      sidebar: "#00265f",
    },
  },
};

// Helper function to get colors based on mode
export const getColors = (mode = "light") => {
  const colors = {
    primary: palette.primary,
    secondary: palette.secondary,
    success: palette.success,
    error: palette.error,
    background:
      mode === "dark" ? palette.background.dark : palette.background.light,
  };

  // Add text colors based on background
  colors.text = {
    primary: mode === "dark" ? "#ffffff" : "#000000",
    secondary: mode === "dark" ? "#e0e0e0" : "#424242",
  };

  return colors;
};

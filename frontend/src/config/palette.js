// Centralized blue color theme
export const blueThemeColors = {
  blue1: "#012a4a",
  blue2: "#013a63",
  blue3: "#01497c",
  blue4: "#014f86",
  blue5: "#2a6f97",
  blue6: "#2c7da0",
  blue7: "#468faf",
  blue8: "#61a5c2",
  blue9: "#89c2d9",
  blue10: "#a9d6e5",
};

export const palette = {
  primary: {
    main: blueThemeColors.blue5,
    light: blueThemeColors.blue8,
    dark: blueThemeColors.blue2,
  },
  secondary: {
    main: blueThemeColors.blue6,
    light: blueThemeColors.blue9,
    dark: blueThemeColors.blue3,
  },
  success: {
    main: blueThemeColors.blue7,
    light: blueThemeColors.blue10,
    dark: blueThemeColors.blue4,
  },
  error: {
    main: "#f44336",
    light: "#ef5350",
    dark: "#d32f2f",
  },
  header: {
    main: blueThemeColors.blue3,
    light: blueThemeColors.blue6,
    dark: blueThemeColors.blue1,
  },
  background: {
    light: {
      default: blueThemeColors.blue10,
      paper: blueThemeColors.blue9,
      sidebar: blueThemeColors.blue5,
    },
    dark: {
      default: blueThemeColors.blue2,
      paper: blueThemeColors.blue3,
      sidebar: blueThemeColors.blue1,
    },
  },
};

// Helper function to get colors based on mode
export const getColors = (mode = "light") => {
  const headerColor =
    mode === "dark" ? palette.header.dark : palette.header.light;
  return {
    primary: {
      main: mode === "dark" ? palette.primary.dark : palette.primary.main,
      light: mode === "dark" ? palette.primary.main : palette.primary.light,
      dark: mode === "dark" ? palette.primary.main : palette.primary.dark,
    },
    secondary: {
      main: mode === "dark" ? palette.secondary.dark : palette.secondary.main,
      light: mode === "dark" ? palette.secondary.main : palette.secondary.light,
      dark: mode === "dark" ? palette.secondary.main : palette.secondary.dark,
    },
    success: {
      main: mode === "dark" ? palette.success.dark : palette.success.main,
      light: mode === "dark" ? palette.success.main : palette.success.light,
      dark: mode === "dark" ? palette.success.main : palette.success.dark,
    },
    error: {
      main: mode === "dark" ? palette.error.dark : palette.error.main,
      light: mode === "dark" ? palette.error.main : palette.error.light,
      dark: mode === "dark" ? palette.error.main : palette.error.dark,
    },
    text: {
      primary: mode === "dark" ? "#ffffff" : "rgba(0, 0, 0, 0.87)",
      secondary:
        mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)",
      disabled:
        mode === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)",
    },
    background: {
      default:
        mode === "dark"
          ? palette.background.dark.default
          : palette.background.light.default,
      paper:
        mode === "dark"
          ? palette.background.dark.paper
          : palette.background.light.paper,
    },
    divider:
      mode === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
    header: {
      dark: palette.header.dark,
      light: palette.header.light,
    },
    sidebar: {
      dark: palette.background.dark.sidebar,
      light: palette.background.light.sidebar,
    },
  };
};

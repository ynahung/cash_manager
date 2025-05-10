import { createTheme } from '@mui/material/styles';
import { getColors } from '../../config/palette';

const createThemeConfig = (mode) => {
  const colors = getColors(mode);
  
  return {
    palette: {
      mode,
      ...colors,
    },
    typography: {
      fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3rem',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.015em',
      },
      h2: {
        fontSize: '2.25rem',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.005em',
      },
      h3: {
        fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: '1.625rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h5: {
        fontSize: '1.375rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: 'inherit',
      },
      h6: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: 1.5,
        color: 'inherit',
      },
      body1: {
        fontSize: '1.125rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: 'inherit',
      },
      body2: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: 'inherit',
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
        lineHeight: 1.5,
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.6,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  };
};

export const lightTheme = createTheme(createThemeConfig('light'));
export const darkTheme = createTheme(createThemeConfig('dark'));

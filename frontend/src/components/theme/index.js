import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export const PageLayout = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "1200px",
  margin: "0 auto",
  bgcolor:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : "inherit",
  minHeight: "100vh",
  pt: 4, // Add some top padding
}));

export const CardLayout = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const TransactionCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
  maxWidth: 300,
  borderRadius: theme.spacing(1),
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.light
      : theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
  },
  "&:disabled": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.primary.light,
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.mode === "dark" ? "white" : "inherit",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
  "&:disabled": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
}));

export const ErrorContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.error.light,
  color: theme.palette.error.contrastText,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

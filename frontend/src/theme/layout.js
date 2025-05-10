import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "./theme";
import {
  PageContainer,
  SectionHeader,
  FormContainer,
  ErrorContainer,
  GridContainer,
  LoadingContainer,
} from "./styles";

const AppLayout = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export function AppThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>{children}</AppLayout>
    </ThemeProvider>
  );
}

export function PageLayout({ children, title }) {
  return (
    <PageContainer>
      {title && (
        <SectionHeader>
          <h2>{title}</h2>
        </SectionHeader>
      )}
      {children}
    </PageContainer>
  );
}

export function CardLayout({ children, title, action }) {
  return (
    <PageContainer>
      <SectionHeader>
        <h2>{title}</h2>
        {action && action}
      </SectionHeader>
      {children}
    </PageContainer>
  );
}

export function FormLayout({ children, title }) {
  return (
    <PageContainer>
      {title && <h2>{title}</h2>}
      <FormContainer>{children}</FormContainer>
    </PageContainer>
  );
}

export function DashboardLayout({ children }) {
  return (
    <PageContainer>
      <GridContainer>{children}</GridContainer>
    </PageContainer>
  );
}

export function LoadingLayout({ children }) {
  return (
    <PageContainer>
      <LoadingContainer>{children}</LoadingContainer>
    </PageContainer>
  );
}

export function ErrorLayout({ children }) {
  return (
    <PageContainer>
      <ErrorContainer>{children}</ErrorContainer>
    </PageContainer>
  );
}

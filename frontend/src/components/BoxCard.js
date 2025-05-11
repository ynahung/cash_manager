import React from "react";
import { Paper, Typography, Box, Avatar, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  transition: "box-shadow 0.2s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[4],
  },
  width: "100%",
  maxWidth: "100%",
  margin: "5",
  padding: theme.spacing(4),
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.background.default,
  border: "1px solid",
  borderColor: theme.palette.divider,
}));

const BoxCard = ({
  title,
  children,
  icon,
  iconColor = "primary",
  iconSize = "medium",
}) => {
  const theme = useTheme();

  return (
    <StyledPaper>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: theme.palette.text.primary,
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      {icon && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: theme.palette[iconColor].main,
              mr: 2,
              width: iconSize === "large" ? 48 : 32,
              height: iconSize === "large" ? 48 : 32,
            }}
          >
            {icon}
          </Avatar>
          {children}
        </Box>
      )}
      {!icon && children}
    </StyledPaper>
  );
};

export default BoxCard;

import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SidebarContainer = styled(Box)(({ theme, collapsed }) => ({
  width: collapsed ? 60 : 240,
  height: "100vh",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.sidebar.dark
      : theme.palette.sidebar.light,
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: 64, // Below header
  left: 0,
  zIndex: 1001, // Above content but below header
  transition: "width 0.3s ease-in-out",
  overflow: "hidden",
}));

const SidebarContent = styled(Box)(({ theme, collapsed }) => ({
  flex: 1,
  overflowY: "auto",
  color: theme.palette.text.primary,
  transition: "padding-left 0.3s ease-in-out",
}));

const SidebarFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid",
  borderColor: theme.palette.divider,
  transition: "padding 0.3s ease-in-out",
}));

const SidebarItem = styled(ListItem)({
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
  "&:first-child": {
    marginTop: "0px",
  },
  height: "48px",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
  transition:
    "padding 0.3s ease-in-out, height 0.3s ease-in-out, margin 0.3s ease-in-out",
});

function Sidebar({
  items = [],
  header = null,
  footer = null,
  selected = null,
  open = true,
  position = "left",
  onToggle = () => {},
  onItemClick = () => {},
  collapsed = false,
}) {
  return (
    <SidebarContainer collapsed={collapsed}>
      <SidebarContent collapsed={collapsed}>
        <List>
          <SidebarItem
            button
            onClick={onToggle}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: collapsed ? "center" : "flex-start",
              width: "100%",
              padding: collapsed ? "16px 8px" : "16px 16px",
              transition: "padding 0.3s ease-in-out",
              height: 60,
            }}
          >
            {collapsed ? (
              <ChevronRightIcon sx={{ fontSize: 20 }} />
            ) : (
              <ChevronLeftIcon sx={{ fontSize: 20 }} />
            )}
          </SidebarItem>
          {items.map((item, index) => (
            <SidebarItem
              key={item.id}
              button
              selected={item.id === selected}
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                } else if (onItemClick) {
                  onItemClick(item);
                }
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                width: "100%",
                padding: collapsed ? "16px 8px" : "16px 16px",
                transition: "padding 0.3s ease-in-out",
                height: 60,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>
              <ListItemText
                primary={item.label}
                sx={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  height: "100%",
                  padding: "0 0 0 40px",
                  margin: 0,
                  marginTop: "-13px", // Do no remove this
                  opacity: collapsed ? 0 : 1,
                  transition: "opacity 0.3s ease-in-out",
                  "& .MuiListItemText-primary": {
                    fontSize: "1rem",
                    lineHeight: "48px",
                    whiteSpace: "nowrap",
                  },
                }}
              />
            </SidebarItem>
          ))}
        </List>
        {footer && <SidebarFooter>{footer}</SidebarFooter>}
      </SidebarContent>
    </SidebarContainer>
  );
}

export default Sidebar;

import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer, IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SidebarContainer = styled(Box)(({ theme, collapsed }) => ({
  width: collapsed ? 60 : 240,
  height: '100vh',
  backgroundColor: theme.palette.background,
  borderRight: '1px solid',
  borderColor: theme.palette.divider,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}));

const SidebarHeader = styled(Box)(({ theme, collapsed }) => ({
  display: collapsed ? 'none' : 'flex',
  alignItems: 'center',
  padding: '16px',
  borderBottom: collapsed ? 'none' : '1px solid',
  borderColor: 'divider',
}));

const SidebarContent = styled(Box)(({ theme, collapsed }) => ({
  flex: 1,
  overflowY: 'auto',
  color: 'white'
}));

const SidebarFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid',
  borderColor: theme.palette.divider,
}));

const SidebarItem = styled(ListItem)({
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  '&.Mui-selected': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
});

const Sidebar = ({ 
  items = [], 
  header = null, 
  footer = null, 
  selected = null,
  open = true,
  position = 'left',
  collapsed = false,
  onToggle = () => {},
  onItemClick = () => {}
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: collapsed ? 60 : 240,
        border: 'none',
        transition: 'width 0.3s ease-in-out'
      }}
    >
      <SidebarContainer collapsed={collapsed}>
        <SidebarContent collapsed={collapsed}>
          <List>
            {!collapsed && (
              <SidebarItem
                button
                onClick={onToggle}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '100%',
                  padding: collapsed ? '16px 8px' : '16px 16px',
                  transition: 'padding 0.3s ease-in-out',
                  height: 60,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    width: collapsed ? 40 : 'auto',
                    height: 60,
                    minWidth: 40,
                    minHeight: 48,
                    '& svg': {
                      width: 24,
                      height: 24,
                    },
                  }}
                >
                  <ChevronLeftIcon />
                </Box>
              </SidebarItem>
            )}
            {collapsed && (
              <SidebarItem
                button
                onClick={onToggle}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: collapsed ? '16px 8px' : '16px 16px',
                  transition: 'padding 0.3s ease-in-out',
                  height: 60,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 24,
                    height: 24,
                  }}
                >
                  <ChevronRightIcon />
                </Box>
              </SidebarItem>
            )}
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  width: '100%',
                  padding: collapsed ? '16px 8px' : '16px 16px',
                  transition: 'padding 0.3s ease-in-out',
                  height: 60,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    width: collapsed ? 40 : 'auto',
                    height: 60,
                    minWidth: 40,
                    minHeight: 48,
                    '& svg': {
                      width: 24,
                      height: 24,
                    },
                  }}
                >
                  {item.icon}
                </Box>
                <ListItemText
                  primary={item.label}
                  sx={{
                    display: collapsed ? 'none' : 'block',
                  }}
                />
              </SidebarItem>
            ))}
          </List>
        </SidebarContent>
        {footer && <SidebarFooter>{footer}</SidebarFooter>}
      </SidebarContainer>
    </Box>
  );
};

export default Sidebar;

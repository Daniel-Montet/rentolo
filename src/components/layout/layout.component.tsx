import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PieChartIcon from "@mui/icons-material/PieChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { NavLink, Outlet, useMatch, useNavigate } from "react-router-dom";
import Header from "./header.component";
import { Colors } from "./auth.layout.component";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

export default function () {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: Colors.FadedBlue,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ background: Colors.DarkBlue }}>
          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{ fontSize: "18px", color: "white", fontWeight: "bold" }}
          >
            TOLO LESSEE
          </Typography>
        </Toolbar>
        <Divider />
        <List sx={{ marginTop: "5rem", color: "white" }}>
          <MenuItem
            text="Dashboard"
            Icon={(props: any) => (
              <PieChartIcon
                fontSize="small"
                sx={{ color: props.active ? Colors.BrightBlue : "white" }}
              />
            )}
            to="/dashboard"
          />
          <MenuItem
            text="Escrow"
            Icon={(props: any) => (
              <MailOutlineIcon
                fontSize="small"
                sx={{ color: props.active ? Colors.BrightBlue : "white" }}
              />
            )}
            to="/escrow"
          />
          <MenuItem
            text="Invoices"
            Icon={(props: any) => (
              <ReceiptIcon
                fontSize="small"
                sx={{ color: props.active ? Colors.BrightBlue : "white" }}
              />
            )}
            to="/invoices"
          />
          <MenuItem
            text="Login"
            Icon={(props: any) => (
              <LoginIcon
                fontSize="small"
                sx={{ color: props.active ? Colors.BrightBlue : "white" }}
              />
            )}
            to="/auth/login"
          />
          <MenuItem
            text="Sign Up"
            Icon={(props: any) => (
              <LockOpenIcon
                fontSize="small"
                sx={{ color: props.active ? Colors.BrightBlue : "white" }}
              />
            )}
            to="/auth/sign-up"
          />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "whitesmoke", p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

const MenuItem = ({ text, Icon, to }: any) => {
  const navigate = useNavigate();
  const match = useMatch(text);

  return (
    <ListItem
      disablePadding
      onClick={(e) => navigate(to)}
      sx={{ background: `${Boolean(match) ? Colors.DarkBlue : ""}`, my: 1 }}
    >
      <ListItemButton>
        <ListItemIcon>
          <Icon active={Boolean(match)} />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

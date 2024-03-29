import React from "react";
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";

import uheLogo from "../assets/images/uhe_logo.png";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [state, setState] = React.useState({
    top: false,
  });

  // TODO come back to simplify this
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              component={RouterLink}
              underline="none"
              variant="button"
              color="black"
              to="/"
              sx={{ my: 1, mx: 1.5, fontWeight: "bold", width: "100%" }}
            >
              Home
            </Link>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              component={RouterLink}
              underline="none"
              variant="button"
              color="black"
              to="/ilab"
              sx={{ my: 1, mx: 1.5, fontWeight: "bold", width: "100%" }}
            >
              Ilab
            </Link>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              component={RouterLink}
              underline="none"
              variant="button"
              color="black"
              to="/education"
              sx={{ my: 1, mx: 1.5, fontWeight: "bold", width: "100%" }}
            >
              Education
            </Link>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              component={RouterLink}
              underline="none"
              variant="button"
              color="black"
              to="contact-us"
              sx={{ my: 1, mx: 1.5, fontWeight: "bold", width: "100%" }}
            >
              Contact Us
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      sx={{
        width: "100%",
        p: 2,
        background: "linear-gradient(black 0%, rgba(0, 0, 0, 0) 100%)",
      }}
      color="transparent"
      position="absolute"
      elevation={0}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container alignItems="center">
            <Grid
              sx={{ display: { lg: "block", md: "block", xs: "none" } }}
              xs={12}
            >
              <img
                alt="UHE Logo"
                width="125"
                src={uheLogo}
                style={{ float: "left" }}
              />
              <Box sx={{ flexGrow: 1 }} />
              <nav style={{ float: "right", marginTop: "2rem" }}>
                <Link
                  component={RouterLink}
                  underline="none"
                  variant="button"
                  color="white"
                  to="/"
                  sx={{ my: 1, mx: 1.5, fontWeight: "bold" }}
                >
                  Home
                </Link>
                <Link
                  component={RouterLink}
                  underline="none"
                  variant="button"
                  color="white"
                  to="/ilab"
                  sx={{ my: 1, mx: 1.5, fontWeight: "bold" }}
                >
                  Ilab
                </Link>
                <Link
                  component={RouterLink}
                  underline="none"
                  variant="button"
                  color="white"
                  to="/education"
                  sx={{ my: 1, mx: 1.5, fontWeight: "bold" }}
                >
                  Education
                </Link>
                <Link
                  component={RouterLink}
                  underline="none"
                  variant="button"
                  color="white"
                  to="contact-us"
                  sx={{ my: 1, mx: 1.5, fontWeight: "bold" }}
                >
                  Contact Us
                </Link>
              </nav>
            </Grid>

            <Grid
              sx={{ display: { lg: "none", md: "none", xs: "block" } }}
              xs={12}
            >
              <IconButton
                size="large"
                aria-label="menu"
                sx={{ float: "right", color: "white" }}
                onClick={toggleDrawer("top", true)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
      <Outlet />
      <Drawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;

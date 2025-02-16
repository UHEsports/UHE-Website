import React, { useState } from "react";
import apcu_white_logo from '../assets/images/logos/APCU_vert_2016_white.png';
import css_logo from '../assets/images/education/css-logo-color-1.png';
import isp_logo from '../assets/images/education/isp-colored-1.png';
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

import {Outlet, Link as RouterLink, useLocation} from "react-router-dom";

import uheLogo from "../assets/images/logos/uhe_logo.png";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
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
              onClick={toggleDrawer(false)}
              sx={{ my: 1, mx: 1.5, fontWeight: "bold", width: "100%" }}
            >
              Home
            </Link>
          </ListItemButton>
        </ListItem>
        {/*TODO FUTURE UPDATE*/}
        {/*<Divider />*/}
        {/*<ListItem disablePadding>*/}
        {/*  <ListItemButton>*/}
        {/*    <Link*/}
        {/*      component={RouterLink}*/}
        {/*      underline="none"*/}
        {/*      variant="button"*/}
        {/*      color="black"*/}
        {/*      to="/ilab"*/}
        {/*      sx={{ my: 1, mx: 1.5, fontWeight: "bold", width: "100%" }}*/}
        {/*    >*/}
        {/*      Ilab*/}
        {/*    </Link>*/}
        {/*  </ListItemButton>*/}
        {/*</ListItem>*/}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              component={RouterLink}
              underline="none"
              variant="button"
              color="black"
              to="/education"
              onClick={toggleDrawer(false)}
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
              onClick={toggleDrawer(false)}
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
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid
                sx={{ display: { lg: "flex", md: "flex", xs: "none" } }}
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                    alt="UHE Logo"
                    width="125"
                    src={uheLogo}
                />
                {pathname==='/' && ( // Conditionally render the APCU logo
                    <img
                        alt="APCU Logo"
                        width="125"
                        src={apcu_white_logo}
                    />
                )}
                {pathname==='/education' && ( // Conditionally render the APCU logo
                    <img
                        alt="APCU Logo"
                        width="75"
                        src={css_logo}
                    />
                )}
                {pathname==='/education' && ( // Conditionally render the APCU logo
                    <img
                        style={{marginLeft:'30px'}}
                        alt="APCU Logo"
                        width="250"
                        src={isp_logo}
                    />
                )}
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <nav style={{ float: "right" }}>
                <Link
                  component={RouterLink}
                  underline="none"
                  variant="button"
                  color="white"
                  to="/"
                  sx={{ mx: 1.5, fontWeight: "bold" }}
                >
                  Home
                </Link>
                {/*TODO FUTURE UPDATE*/}
                {/*<Link*/}
                {/*  component={RouterLink}*/}
                {/*  underline="none"*/}
                {/*  variant="button"*/}
                {/*  color="white"*/}
                {/*  to="/ilab"*/}
                {/*  sx={{ mx: 1.5, fontWeight: "bold" }}*/}
                {/*>*/}
                {/*  Ilab*/}
                {/*</Link>*/}
                <Link
                  component={RouterLink}
                  underline="none"
                  variant="button"
                  color="white"
                  to="/education"
                  sx={{ mx: 1.5, fontWeight: "bold" }}
                >
                  Education
                </Link>
                <Link
                  component={RouterLink}
                  underline="none"
                  variant="button"
                  color="white"
                  to="contact-us"
                  sx={{ mx: 1.5, fontWeight: "bold" }}
                >
                  Contact Us
                </Link>
              </nav>
            </Grid>

            <Grid
                item
                sx={{ display: { lg: "none", md: "none", xs: "block" } }}
                xs={12}
            >
              <IconButton
                size="large"
                aria-label="menu"
                sx={{float:"right", color: "white" }}
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
          open={open}
          onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;

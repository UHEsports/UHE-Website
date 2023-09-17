import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { Outlet, Link as RouterLink } from "react-router-dom";
import Box from '@mui/material/Box';
import uheLogo from '../images/uhe_logo.png';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';

function Navbar() {
    const [state, setState] = React.useState({
        top: false,
    });

    // TODO come back to simplify this
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width:'auto'}}
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
                            sx={{my: 1, mx: 1.5, fontWeight:'bold', width:'100%'}}>
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
                            sx={{my: 1, mx: 1.5, fontWeight:'bold', width:'100%'}}>
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
                            sx={{my: 1, mx: 1.5, fontWeight:'bold', width:'100%'}}>
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
                            sx={{my: 1, mx: 1.5, fontWeight:'bold', width:'100%'}}>
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
                width: '100%',
                p: 2
            }}
            color="transparent"
            position="absolute"
            elevation={0}>
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        alignItems="center">
                        <Grid sx={{ display: {lg: 'block', md: 'block',xs:'none' }}} md={3}>
                            <img alt="UHE Logo" width='75px' src={uheLogo}/>
                        </Grid>
                        <Grid sx={{ display: {lg: 'none', md: 'none',xs:'block' }}} xs={12}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                sx={{ float:"right", color:"white" }}
                                onClick={toggleDrawer("top", true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item sx={{ display: {lg: 'block', md: 'block',xs:'none' }}} md={9} >
                            <nav style={{float:'right'}}>
                                <Link
                                    component={RouterLink}
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    to="/"
                                    sx={{my: 1, mx: 1.5, fontWeight:'bold'}}>
                                    Home
                                </Link>
                                <Link
                                    component={RouterLink}
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    to="/ilab"
                                    sx={{my: 1, mx: 1.5, fontWeight:'bold'}}>
                                    Ilab
                                </Link>
                                <Link
                                    component={RouterLink}
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    to="/education"
                                    sx={{my: 1, mx: 1.5, fontWeight:'bold'}}>
                                    Education
                                </Link>
                                <Link
                                    component={RouterLink}
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    to="contact-us"
                                    sx={{my: 1, mx: 1.5, fontWeight:'bold'}}>
                                    Contact Us
                                </Link>
                            </nav>
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
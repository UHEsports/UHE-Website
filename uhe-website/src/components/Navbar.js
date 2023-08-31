import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { Outlet, Link as RouterLink } from "react-router-dom";
import Box from '@mui/material/Box';
import uheLogo from '../images/uhe_logo.png';
import Grid from '@mui/material/Grid';

// TODO add in listeners so when page is clicked the navbar changes position
// from absolute to static and the color becomes our UHE green
function Navbar() {
    return (
        <AppBar
            sx={{
                p: 2,
                width: '100%'
            }}
            color="transparent"
            elevation={0}>
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        alignItems="center">
                        <Grid md={3}>
                            <img alt="UHE Logo" width='75px' src={uheLogo}/>
                        </Grid>
                        <Grid item md={9}>
                            <nav style={{float:'right'}}>
                                <Link
                                    component={RouterLink}
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    to="/"
                                    sx={{my: 1, mx: 1.5}}>
                                    Home
                                </Link>
                                <Link
                                    component={RouterLink}
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    to="/ilab"
                                    sx={{my: 1, mx: 1.5}}>
                                    Ilab
                                </Link>
                                <Link
                                    component={RouterLink}
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    to="/education"
                                    sx={{my: 1, mx: 1.5}}>
                                    Education
                                </Link>
                                <Link
                                    component={RouterLink}
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    to="contact-us"
                                    sx={{my: 1, mx: 1.5}}>
                                    Contact Us
                                </Link>
                            </nav>
                        </Grid>
                    </Grid>
                </Box>
            </Toolbar>
            <Outlet />
        </AppBar>

    );
}

export default Navbar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
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
            position="absolute"
            color="transparent"
            elevation={0}
        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                {/*<div sx={{ width: 'auto' }}>*/}
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        alignItems="center"
                    >
                        <Grid md={4}>
                            <img width='75px' src={uheLogo}/>
                        </Grid>
                        <Grid item md={8}>
                            <nav style={{float:'right'}}>
                                <Link
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    href="uhe-website/src/layouts#"
                                    sx={{my: 1, mx: 1.5}}
                                >
                                    Home
                                </Link>
                                <Link
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    href="uhe-website/src/layouts#"
                                    sx={{my: 1, mx: 1.5}}
                                >
                                    Ilab
                                </Link>
                                <Link
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    href="uhe-website/src/layouts#"
                                    sx={{my: 1, mx: 1.5}}
                                >
                                    Education
                                </Link>
                                <Link
                                    underline="none"
                                    variant="button"
                                    color="white"
                                    href="uhe-website/src/layouts#"
                                    sx={{my: 1, mx: 1.5}}
                                >
                                    Contact Us
                                </Link>
                            </nav>
                        </Grid>
                    </Grid>
                </Box>


                {/*<Box sx={{*/}
                {/*    width: 'auto',*/}
                {/*    display:'flex',*/}
                {/*    justifyContent: 'flex-end',*/}
                {/*}}>*/}

                {/*</Box>*/}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
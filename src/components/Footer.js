import React from "react";
import {Box, Grid, Link} from '@mui/material';
import uheLogo from "../assets/images/uhe_logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramSolidIcon from "./InstagramSolidIcon";
import TwitchSolidIcon from "./TwitchSolidIcon";
import TiktokSolidIcon from "./TiktokSolidIcon";
import DiscordSolidIcon from "./DiscordSolidIcon";
import SectionDescription from "./SectionDescription";
import CopyrightIcon from '@mui/icons-material/Copyright';

import {styled} from "@mui/material/styles";

// Use this component like a div box
const FooterText = styled('div')(({ theme }) => ({
    fontWeight: 300,
    letterSpacing: "-0.15px",
    fontSize: "1.2rem",
    [theme.breakpoints.down('sm')]: {
        // fontSize: "1.25rem",
    },
}));

function Footer() {
    return(
            <Grid container alignItems="center" sx={{pt:2, pb:4, backgroundColor: "#f6f6f6"}}>
                <Box sx={{ml:2}}>
                    <img
                        alt="UHE Logo"
                        width="150px"
                        src={uheLogo}
                        // style={{ float: "left" }}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <nav>
                    <Link
                        underline="none"
                        variant="button"
                        color="black"
                        rel="noopener noreferrer"
                        href="https://www.twitch.tv/uh_esports"
                        target="_blank"
                        sx={{mx: 0.5 }}
                    >
                        <TwitchSolidIcon sx={{fontSize:40}} />
                    </Link>
                    <Link
                        underline="none"
                        variant="button"
                        color="black"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/uhesports/"
                        target="_blank"
                        sx={{mx: 0.5 }}
                    >
                        <InstagramSolidIcon sx={{fontSize:40}} />
                    </Link>
                    <Link
                        underline="none"
                        variant="button"
                        color="black"
                        rel="noopener noreferrer"
                        href="https://www.tiktok.com/@uhesports"
                        target="_blank"
                        sx={{mx: 0.5 }}
                    >
                        <TiktokSolidIcon sx={{fontSize:40}} />
                    </Link>
                    <Link
                        underline="none"
                        variant="button"
                        color="black"
                        rel="noopener noreferrer"
                        href="https://discord.com/invite/UHEsports"
                        target="_blank"
                        sx={{mx: 0.5 }}
                    >
                        <DiscordSolidIcon sx={{fontSize:40}} />
                    </Link>
                    <Link
                        underline="none"
                        variant="button"
                        color="black"
                        rel="noopener noreferrer"
                        href="https://twitter.com/UHEsport"
                        target="_blank"
                        sx={{ml: 0.5, mr:3 }}
                    >
                        <TwitterIcon sx={{fontSize:40}} />
                    </Link>
                </nav>
                <Grid container spacing={3} sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}>
                    <Grid sx={{alignItems: 'center'}} lg={5} md={6}>
                        <FooterText sx={{textAlign:'left', color:'grey', ml:7}}>
                            <br/>
                            &copy; 2023 UH Esports. All Rights reserved.
                        </FooterText>
                    </Grid>
                    <Grid lg={2} md={1} />
                    <Grid lg={3} md={1} >
                        <FooterText sx={{textAlign:'right', color:'grey'}}>
                            <br/>
                            uhesport@hawaii.edu
                        </FooterText>
                    </Grid>
                    <Grid sx={{float:'right'}} lg={2} md={4}>
                        <FooterText sx={{textAlign:'right', color:'grey', mr:3}}>
                            2532 Correa Rd,
                            <br/>
                            Honolulu, HI 96822
                        </FooterText>

                    </Grid>

                </Grid>
                <Grid container spacing={3} sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}>
                    <Grid sm={2} xs={0}></Grid>
                    <Grid sm={6} xs={6}>
                        <FooterText sx={{textAlign:'right', color:'grey'}}>
                            <br/>
                            uhesport@hawaii.edu
                        </FooterText>
                    </Grid>
                    <Grid sx={{float:'right'}} sm={4} xs={6}>
                        <FooterText sx={{textAlign:'right', color:'grey', mr:3}}>
                            2532 Correa Rd,
                            <br/>
                            Honolulu, HI 96822
                        </FooterText>
                    </Grid>
                    <Grid sx={{alignItems: 'center'}} sm={12} xs={12}>
                        <FooterText sx={{textAlign:'left', color:'grey', ml:7}}>
                            <br/>
                            &copy; 2023 UH Esports. All Rights reserved.
                        </FooterText>
                    </Grid>
                </Grid>
            </Grid>
    );
}


export default Footer;
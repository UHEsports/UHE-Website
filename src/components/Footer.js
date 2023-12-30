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
                <Grid container spacing={3}>
                    <Grid sx={{alignItems: 'center'}} md={3}>
                        <FooterText sx={{textAlign:'left', color:'grey', ml:7}}>
                            <br/>
                            &copy; 2023 UH Esports. All Rights reserved.
                        </FooterText>
                    </Grid>
                    <Grid md={5} />
                    <Grid md={2}>
                        <FooterText sx={{textAlign:'right', color:'grey'}}>
                            <br/>
                            uhesport@hawaii.edu
                        </FooterText>
                    </Grid>
                    <Grid sx={{float:'right'}} md={2}>
                        <FooterText sx={{textAlign:'right', color:'grey', mr:3}}>
                            2532 Correa Rd,
                            <br/>
                            Honolulu, HI 96822
                        </FooterText>

                    </Grid>
                </Grid>
            </Grid>
    );
}


export default Footer;
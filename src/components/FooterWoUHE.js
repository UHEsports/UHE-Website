import React from "react";
import {Box, Grid, Link} from '@mui/material';
import uheLogo from "../assets/images/uhe_logo.png";
import XIcon from '@mui/icons-material/X';
import InstagramSolidIcon from "./InstagramSolidIcon";
import TwitchSolidIcon from "./TwitchSolidIcon";
import TiktokSolidIcon from "./TiktokSolidIcon";
import DiscordSolidIcon from "./DiscordSolidIcon";
import YouTubeIcon from '@mui/icons-material/YouTube';
import woUHELogo from "../assets/images/wouhe_logo.png";
import { useLocation } from "react-router-dom";

import {styled} from "@mui/material/styles";
import SpotifySolidIcon from "./SpotifySolidIcon";

// Utilize as a DIV box
const FooterText = styled('div')(({ theme }) => ({
    fontWeight: 300,
    letterSpacing: "-0.15px",
    fontSize: "1.2rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.15rem",
    },
}));

function FooterWoUHE() {
    const { pathname } = useLocation();
    if (pathname !== "/wouhe") return null;
    else return(
        // <Grid container sx={{pt:0, pb:4, alignItems: "center", justifyContent: "space-between", borderTop:"1px solid #F1F3F7", display:'flex', height:'300px'}}>
        <Grid container sx={{borderTop:"1px solid #F1F3F7", justifyContent: "space-between", pb:'125px'}}>
            <Box item sx={{display:'flex', alignItems: 'center', justifyContent: 'flex-start', ml:{lg:1, md:1, sm:0, xs:0}, height:'100px'}}>
                <img
                    style={{marginLeft:35}}
                    alt="UHE Logo"
                    width="45px"
                    src={woUHELogo}
                />
                <FooterText sx={{textAlign:'left', color:'grey', ml:3}}>
                    Copyright &copy; 2024 WoUHE | All Rights reserved.
                </FooterText>
            </Box>
            <Box item sx={{display: 'flex', alignItems:'center', flexDirection: 'flex-end'}}>
                <Link
                    underline="none"
                    variant="button"
                    color="black"
                    rel="noopener noreferrer"
                    href="https://www.twitch.tv/uh_esports"
                    target="_blank"
                    sx={{mr: 1}}
                >
                    <TwitchSolidIcon sx={{fontSize:35}} />
                </Link>
                <Link
                    underline="none"
                    variant="button"
                    color="black"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/uhesports/"
                    target="_blank"
                    sx={{mr: 1 }}
                >
                    <InstagramSolidIcon sx={{fontSize:35}} />
                </Link>
                <Link
                    underline="none"
                    variant="button"
                    color="black"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@uhesports"
                    target="_blank"
                    sx={{mr: 1 }}
                >
                    <YouTubeIcon sx={{fontSize:35}} />
                </Link>
                <Link
                    underline="none"
                    variant="button"
                    color="black"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@uhesports"
                    target="_blank"
                    sx={{mr: 1 }}
                >
                    <SpotifySolidIcon sx={{fontSize:35}}/>
                </Link>
                <Link
                    underline="none"
                    variant="button"
                    color="black"
                    rel="noopener noreferrer"
                    href="https://discord.com/invite/UHEsports"
                    target="_blank"
                    sx={{mr: 1 }}
                >
                    <DiscordSolidIcon sx={{fontSize:35}} />
                </Link>
                <Link
                    underline="none"
                    variant="button"
                    color="black"
                    rel="noopener noreferrer"
                    href="https://twitter.com/UHEsport"
                    target="_blank"
                    sx={{mr:{lg:4, md:4, sm:3, xs:2} }}
                >
                    <XIcon sx={{fontSize:35}} />
                </Link>
            </Box>

            <Grid container  spacing={2} sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}>
                {/*<Grid sx={{alignItems: 'center'}} lg={5} md={6}>*/}
                {/*    <FooterText sx={{textAlign:'left', color:'grey', ml:7}}>*/}
                {/*        <br/>*/}
                {/*        Copyright &copy; 2023 UH Esports. All Rights reserved.*/}
                {/*    </FooterText>*/}
                {/*</Grid>*/}
                {/*<Grid lg={2} md={1} />*/}
                {/*<Grid lg={3} md={1} >*/}
                {/*    <FooterText sx={{textAlign:'right', color:'grey'}}>*/}
                {/*        <br/>*/}
                {/*        uhesport@hawaii.edu*/}
                {/*    </FooterText>*/}
                {/*</Grid>*/}
                {/*<Grid sx={{float:'right'}} lg={2} md={4}>*/}
                {/*    <FooterText sx={{textAlign:'right', color:'grey', mr:4}}>*/}
                {/*        2532 Correa Rd,<br/>*/}
                {/*        Honolulu, HI 96822*/}
                {/*    </FooterText>*/}
                {/*</Grid>*/}
            </Grid>
        </Grid>
    );
}


export default FooterWoUHE;
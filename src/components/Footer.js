import React from "react";
import {Box, Grid, Link} from '@mui/material';
import uheLogo from "../assets/images/uhe_logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramSolidIcon from "./InstagramSolidIcon";
import TwitchSolidIcon from "./TwitchSolidIcon";
import TiktokSolidIcon from "./TiktokSolidIcon";
import DiscordSolidIcon from "./DiscordSolidIcon";

import {styled} from "@mui/material/styles";
import {useLocation} from "react-router-dom";

// Utilize as a DIV box
const FooterText = styled('div')(({ theme }) => ({
    fontWeight: 300,
    letterSpacing: "-0.15px",
    fontSize: "1.2rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.15rem",
    },
}));

function Footer() {
    const { pathname } = useLocation();
    if (pathname === "/wouhe") return null;
    else return(
            <Grid container sx={{pt:2, pb:4, backgroundColor: "#f6f6f6", alignItems: "center", justifyContent: "space-between"}}>
               <Box sx={{ml:{lg:1, md:1, sm:0, xs:0}}}>
                   <img
                       alt="UHE Logo"
                       width="150px"
                       src={uheLogo}
                   />
               </Box>
               <Box sx={{display: 'flex', flexDirection: 'flex-end'}}>
                   <Link
                       underline="none"
                       variant="button"
                       color="black"
                       rel="noopener noreferrer"
                       href="https://www.twitch.tv/uh_esports"
                       target="_blank"
                       sx={{mr: 0.25 }}
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
                       sx={{mr: 0.25 }}
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
                       sx={{mr: 0.25 }}
                   >
                       <TiktokSolidIcon sx={{fontSize:35}} />
                   </Link>
                   <Link
                       underline="none"
                       variant="button"
                       color="black"
                       rel="noopener noreferrer"
                       href="https://discord.com/invite/UHEsports"
                       target="_blank"
                       sx={{mr: 0.25 }}
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
                       <TwitterIcon sx={{fontSize:35}} />
                   </Link>
               </Box>

                <Grid container  spacing={2} sx={{ display: { lg: "flex", md: "flex", sm: "none", xs: "none" } }}>
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
                        <FooterText sx={{textAlign:'right', color:'grey', mr:4}}>
                            2532 Correa Rd,<br/>
                            Honolulu, HI 96822
                        </FooterText>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}>
                    <Grid sm={2} xs={0}></Grid>
                    <Grid sm={6} xs={12}>
                        <FooterText sx={{mr:{xs:3}, textAlign:'right', color:'grey'}}>
                            <br/>
                            uhesport@hawaii.edu
                        </FooterText>
                    </Grid>
                    <Grid sx={{float:'right', mt:{sm:0, xs:2}}} sm={4} xs={12}>
                        <FooterText sx={{textAlign:'right', color:'grey', mr:3}}>
                            2532 Correa Rd,
                            <br/>
                            Honolulu, HI 96822
                        </FooterText>
                    </Grid>
                    <Grid sx={{alignItems: 'center', mt:{xs:1}}} sm={12} xs={12}>
                        <FooterText sx={{fontSize:{sm:'0.9rem', xs:'0.9rem'}, textAlign:'left', color:'grey', ml:7}}>
                            <br/>
                            &copy; 2023 UH Esports. All Rights reserved.
                        </FooterText>
                    </Grid>
                </Grid>
            </Grid>
    );
}


export default Footer;
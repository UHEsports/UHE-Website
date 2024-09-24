import React from "react";
import {Box, Grid, Link} from '@mui/material';
import uheLogo from "../assets/images/uhe_logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramSolidIcon from "./InstagramSolidIcon";
import TwitchSolidIcon from "./TwitchSolidIcon";
import TiktokSolidIcon from "./TiktokSolidIcon";
import DiscordSolidIcon from "./DiscordSolidIcon";

import {styled} from "@mui/material/styles";

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
    return(
            <Grid container sx={{pt:2, pb:4, backgroundColor: "#f6f6f6", alignItems: "center", justifyContent: "space-between"}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ml:{lg:3, md:1, sm:1, xs:1}}}>
                    <img
                        alt="UHE Logo"
                        width="150px"
                        src={uheLogo}
                    />

                    <Box sx={{display: 'flex', flexDirection: 'row',ml:{lg:4, md:4, sm:3, xs:3}}}>
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




                    <FooterText sx={{textAlign:'left', color:'grey', fontSize:'1.1rem', ml:{lg:4, md:4, sm:3, xs:3}, display: {lg: "flex", md: "flex", sm: "none", xs: "none"}}}>
                        <br/>
                        &copy; 2023 UH Esports. All Rights reserved.
                    </FooterText>
                </Box>
               <Grid container  spacing={2} sx={{ position: 'relative', display: { lg: "flex", md: "flex", sm: "none", xs: "none" }}}>
                    <Grid lg={2} md={1} />
                    <Grid sx={{position: 'absolute', right:0, top:'-150px'}} lg={2} md={4}> {/*unable to find a way to keep the contents of each box level, so used positioning and top/right to make it even */}
                        <FooterText sx={{textAlign:'right', color:'black', fontWeight:'bold',fontSize:'1.5rem', mr:4}}>\
                            
                            <br/><br/><br/>
                            Contact<br/><br/>
                        </FooterText>
                        <FooterText sx={{textAlign:'right', color:'grey', fontSize:'1.1rem', mr:4}}>
                            uhesport@hawaii.edu<br/><br/>
                            2532 Correa Rd,<br/>
                            Honolulu, HI 96822<br/>
                            United States of America 
                        </FooterText>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}>
                    <Grid sx={{float:'right', mt:{sm:0, xs:2}, ml:{sm:7, xs:7}}} sm={4} xs={12}>
                        <FooterText sx={{textAlign:'left', color:'black', fontWeight:'bold', fontSize:'1.5rem'}}>
                            Contact<br/><br/>
                        </FooterText>
                        <FooterText sx={{textAlign:'left', color:'grey', fontSize:'1.1rem'}}>
                            uhesport@hawaii.edu<br/><br/>
                            2532 Correa Rd,<br/>
                            Honolulu, HI 96822<br/>
                            United States of America 
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


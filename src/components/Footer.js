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
const ContactFooterText = styled('div')(({ theme }) => ({
    fontWeight: 300,
    letterSpacing: "-0.15px",
    fontSize: "1.5rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.7rem",
    },
}));

function Footer() {
    return(
            <Grid container sx={{pt:{lg:6, md:6, sm:6, xs:2}, pb:{lg:4, md:4, sm:4, xs:0}, backgroundColor: "#f6f6f6", alignItems: "center", justifyContent: "space-between"}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ml:{lg:1, md:1, sm:1, xs:0}}}>
                <Box
                    component="img"
                    alt="UHE Logo"
                    src={uheLogo}
                    sx={{
                        width: {
                            xs: '175px',  // for extra small screens (mobile)
                            sm: '150px',  // for small screens (tablets)
                            md: '150px',
                            lg: '150px',

                        }
                    }}
                />

                    <Box sx={{display: 'flex', flexDirection: 'row', ml:{lg:4, md:4, sm:4, xs:4}}}>
                        <Link
                            underline="none"
                            variant="button"
                            color="black"
                            rel="noopener noreferrer"
                            href="https://www.twitch.tv/uh_esports"
                            target="_blank"
                            sx={{mr: 0.25 }}
                        >
                            <TwitchSolidIcon sx={{fontSize:{lg:30, md: 30, sm: 30, xs: 30}}} />
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
                            <InstagramSolidIcon sx={{fontSize:{lg:30, md: 30, sm: 30, xs: 30}}} />
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
                            <TiktokSolidIcon sx={{fontSize:{lg:30, md: 30, sm: 30, xs: 30}}} />
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
                            <DiscordSolidIcon sx={{fontSize:{lg:30, md: 30, sm: 30, xs: 30}}} />
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
                            <TwitterIcon sx={{fontSize:{lg:30, md: 30, sm: 30, xs: 30}}} />
                        </Link>
                    </Box>




                <FooterText sx={{mt:2, textAlign:'left', color:'grey', fontSize:'1.1rem', ml:{lg:4, md:4, sm:4}, display: {lg: "flex", md: "flex", sm: "flex", xs: "none"}}}>
                    &copy; 2025 UH Esports. All Rights reserved.
                </FooterText>
                </Box>
               <Grid container spacing={2} sx={{ position: 'relative', display: { lg: "flex", md: "flex", sm: "flex", xs: "none" }}}>
                    <Grid item lg={2} md={1} sm={2} />
                    <Grid item sx={{position: 'absolute', right:0, top:'-159px'}} lg={3} md={4} sm={6}> {/*unable to find a way to keep the contents of each box level, so used positioning and top/right to make it even */}
                        <ContactFooterText
                            sx={{textAlign: 'right', color: 'black', fontWeight: 'bold', fontSize: '1.5rem', mr: 4}}>
                            Contact
                        </ContactFooterText>
                        <FooterText sx={{mt:3, textAlign:'right', color:'grey', fontSize:'1.1rem', mr:4}}>
                            uhesport@hawaii.edu
                        </FooterText>
                        <FooterText sx={{mt:3, textAlign:'right', color:'grey', fontSize:'1.1rem', mr:4}}>
                            2532 Correa Rd,<br/>
                            Honolulu, HI 96822<br/>
                            United States of America
                        </FooterText>
                    </Grid>
                </Grid>


                <Grid container sx={{ display: { lg: "none", md: "none", sm: "none", xs: "flex" }}}>
                    <Grid item xs={12} sx={{float:'right', mt:{sm:0, xs:2}, ml:{xs:4}}}>
                        {/*<FooterText>*/}
                        {/*    <br/>*/}
                        {/*</FooterText>*/}
                        {/*<FooterText sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "none" } }}>*/}
                        {/*    <br/>*/}
                        {/*</FooterText>*/}
                        <ContactFooterText sx={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>
                            Contact
                        </ContactFooterText>
                        <FooterText>
                            <br/>
                        </FooterText>
                        <FooterText sx={{textAlign:'left', color:'grey', fontSize:'1.1rem'}}>
                            uhesport@hawaii.edu<br/><br/>
                            2532 Correa Rd,<br/>
                            Honolulu, HI 96822,<br/>
                            United States of America
                        </FooterText>
                    </Grid>
                    <Grid item xs={12} sx={{alignItems: 'center', mt:{sm:1}}} >
                        <FooterText sx={{fontSize:'1.2rem', textAlign:'left', color:'grey', ml:{xs:4}, mb:{sm:0, xs:5}}}>
                            <br/>
                            &copy; 2023 UH Esports.<br/>
                            All Rights reserved.
                        </FooterText>
                    </Grid>
                </Grid>

            </Grid>
    );
}


export default Footer;


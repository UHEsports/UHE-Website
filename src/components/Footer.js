import React from "react";
import {Box, Grid, Link} from '@mui/material';
import uheLogo from "../assets/images/uhe_logo.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramSolidIcon from "./InstagramSolidIcon";
import TwitchSolidIcon from "./TwitchSolidIcon";
import TiktokSolidIcon from "./TiktokSolidIcon";
import DiscordSolidIcon from "./DiscordSolidIcon";

function Footer() {
    return(
            <Grid container  sx={{backgroundColor: "#f6f6f6"}}>
                <Grid container alignItems="center" sx={{my:2}}>
                    <Box sx={{mx:1}}>
                        <img
                            alt="UHE Logo"
                            width="130rem"
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
                            <TwitchSolidIcon fontSize="large" />
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
                            <InstagramSolidIcon fontSize="large" />
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
                            <TiktokSolidIcon fontSize="large" />
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
                            <DiscordSolidIcon fontSize="large" />
                        </Link>
                        <Link
                            underline="none"
                            variant="button"
                            color="black"
                            rel="noopener noreferrer"
                            href="https://twitter.com/UHEsport"
                            target="_blank"
                            sx={{ml: 0.5, mr:2 }}
                        >
                            <TwitterIcon fontSize="large" />
                        </Link>
                    </nav>
                </Grid>
            </Grid>
    );
}


export default Footer;
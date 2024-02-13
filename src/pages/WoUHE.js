import * as React from 'react';
import Grid from "@mui/material/Grid";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import woUHELogo from "../assets/images/wouhe_logo.png";
import {styled} from "@mui/material/styles";
import group_1 from "../assets/images/group_1.jpg";
import leagueWoUHE from "../assets/images/league_wouhe.png";
import valorantWoUHE from "../assets/images/valorant_wouhe.png";
import wraith from "../assets/images/wraith_apex.png";
import battlefield from "../assets/images/battlefield_mlbb_1.png";

const WoUHEOpeningImage = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "700px",
    borderRadius:'10px',
    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
}));
function AboutWoUHE() {
    return (
        <Grid container sx={{ mt:{ lg:'152px', md:4, sm:4, xs:4 }}} justifyContent="center">
            <Grid item md={12} sm={12}>
                <img
                    alt="Women of UHE Logo"
                    width="115"
                    src={woUHELogo}
                />
            </Grid>
            <Grid item md={12} sm={12} sx={{ mt:{ lg:1 }}}>
                <SectionTitle>
                    Women of UHE
                </SectionTitle>
            </Grid>
            <Grid item md={7} sm={10} sx={{ mt:{ lg:1 }, p:2,}}>
                <SectionDescription sx={{textAlign:'center'}}>
                    Talk about the team’s history here.
                    Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
                </SectionDescription>
            </Grid>
            <Grid item md={8} sx={{ mt:{ lg:5 }}}>
                <WoUHEOpeningImage style={{backgroundImage:`url("${group_1}"`}}></WoUHEOpeningImage>
            </Grid>
        </Grid>
    );
}

const GameCard = styled('div')(({theme, defaultBackground}) => ({
    backgroundImage: `url('${defaultBackground}')`,
    overflow: 'hidden',
    borderRadius: '10px',
    position: 'relative',
    backgroundSize: '800px',
    backgroundPosition: "-130px",
    width: '634px !important',
    height: '450px',
    // TODO add in mobile conversion
    // [theme.breakpoints.down('lg')]: {
    //     width: '115px !important',
    //     height: '400px',
    //     [theme.breakpoints.down('sm')]: {
    //         width: '105px !important',
    //         height: '400px',
    //     },
    // },
}));

const GameTitleText = styled('div')(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: "40px",
    textAlign:'left',
    transform: 'rotate(-90deg)',
    position:'absolute',
    width: '420px',
    top: '45%',
    left:'390px',
    // TODO add in mobile conversion
    // [theme.breakpoints.down('lg')]: {
    //     fontSize: "2.30rem",
    //     top: '40%',
    //     left:'-130px',
    //     [theme.breakpoints.down('md')]: {
    //         left:'-115px',
    //         [theme.breakpoints.down('sm')]: {
    //             left:'-125px',
    //         },
    //     },
    // },
}));

function WoUHEGames() {
    return(
        <Grid sx={{mt:{ lg:4, md:1, xs:1 }}} spacing={4} container justifyContent="center">
            <Grid item md={12} xs={12}>
                <SectionTitle>
                    Our Teams
                </SectionTitle>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item md={4} xs={11}>
                <GameCard defaultBackground={valorantWoUHE}>
                    {/*<ApexCharacterImage />*/}
                    <GameTitleText>
                        VALORANT
                    </GameTitleText>
                </GameCard>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item md={4} xs={11}>
                <GameCard defaultBackground={leagueWoUHE}>
                    {/*<ApexCharacterImage2 />*/}
                    <GameTitleText>
                        LEAGUE OF LEGENDS
                    </GameTitleText>
                </GameCard>
                {/*<GameImage style={{backgroundImage:`url("${leagueWoUHE}"`}} />*/}
            </Grid>
        </Grid>
    );
}

function Events() {
    return (
        <>
            <SectionTitle>
                Events
            </SectionTitle>
        </>
    );
}

function WoUHEPodcast() {
    return (
        <>
            <SectionTitle>
                WoUHE Podcast
            </SectionTitle>
        </>
    );
}

function MeetOurTeam() {
    return (
        <>
            <SectionTitle>
                Meet Our Team
            </SectionTitle>
        </>
    );
}

function WoUHEFooter() {
    return (
        <>
        </>
    );
}
function WoUHE() {
    return (
        <>
            <AboutWoUHE />
            <WoUHEGames />
            <Events />
        </>
    );
}

export default WoUHE;
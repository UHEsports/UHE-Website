import * as React from 'react';
import Grid from "@mui/material/Grid";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import woUHELogo from "../assets/images/wouhe_logo.png";
import {styled} from "@mui/material/styles";
import group_1 from "../assets/images/group_1.jpg";
import leagueWoUHE from "../assets/images/league_wouhe.png";
import valorantWoUHE from "../assets/images/valorant_wouhe.png";

function AboutWoUHE() {
    return (
        <Grid container sx={{ mt:{ lg:'182px', md:'182px', sm:'110px', xs:'100px' }}} justifyContent="center">
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <img
                    alt="Women of UHE Logo"
                    width="95"
                    src={woUHELogo}
                />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt:{ lg:1, md:1, sm:1, xs:1 }}}>
                <SectionTitle>
                    Women of UHE
                </SectionTitle>
            </Grid>
            <Grid item lg={7} md={8} sm={10} xs={11} sx={{ mt:{ lg:3, md:3, sm:3, xs:2 }, px:2, pb:2 }}>
                <SectionDescription sx={{textAlign:'center'}}>
                    Talk about the team’s history here.
                    Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
                </SectionDescription>
            </Grid>
            <Grid item lg={8} md={10} sm={11} xs={11} sx={{ mt:{ lg:5, md:4, sm:4, xs:2 }}}>
                <img src={group_1} alt="Women of UHE Group photo" width="100%" style={{borderRadius:'10px'}}></img>
            </Grid>
        </Grid>
    );
}

const GameCardWoUHEValorant = styled('div')(({theme}) => ({
    backgroundImage: `url('${valorantWoUHE}')`,
    overflow: 'hidden',
    borderRadius: '10px',
    position: 'relative',
    backgroundSize: '900px',
    backgroundPosition: "-275px 0px",
    width:"100%",
    height: '425px',
    [theme.breakpoints.down('lg')]: {
        width: '100%',
        height: '400px',
        backgroundSize: '800px',
        backgroundPosition: "-320px 0px",
        [theme.breakpoints.down('md')]: {
            width: '100%',
            backgroundPosition: "-380px 0px",
            // TODO add in mobile conversion
        },
    },
}));

const GameCardWoUHELeague = styled('div')(({theme}) => ({
    backgroundImage: `url('${leagueWoUHE}')`,
    overflow: 'hidden',
    borderRadius: '10px',
    position: 'relative',
    backgroundSize: '800px',
    backgroundPosition: "-160px",
    width:"100%",
    height: '425px',
    [theme.breakpoints.down('lg')]: {
        width: '100%',
        height: '400px',
        backgroundSize: '750px',
        backgroundPosition: "-180px",
        [theme.breakpoints.down('md')]: {
            width: '100%',
            backgroundSize: '710px',
            backgroundPosition: "-175px 0px",
            // TODO add in mobile conversion
        },
    },
}));

const GameTitleText = styled('div')(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: "38px",
    textAlign:'right',
    // transform: 'rotate(-90deg)',
    writingMode: 'vertical-rl',
    position:'relative',
    height: '100%',
    bottom: '3%',
    float:'right',
    // TODO add in mobile conversion
    [theme.breakpoints.down('lg')]: {
        fontSize: "2.30rem",
        bottom:'1%',
    //     float:'left',
    //     textAlign:'left',
    //     left: '3%',
    //     top:'86%',
    //     writingMode: 'horizontal-tb',
    //     fontSize: "2.30rem",
        [theme.breakpoints.down('md')]: {
            // bottom: '10px',
            // textAlign: 'right',
            // writingMode: 'vertical-rl',
            // left:'0%',
            // height: '100%',
            // bottom: '5px',
            // top: '-1%',
            // float:'right',
        }
    //     [theme.breakpoints.down('sm')]: {
    //         left:'-125px',
    //     },
    //     },
    },
}));

function WoUHEGames() {
    return(
        <Grid sx={{mt:{ lg:4, md:1, xs:1 }}} spacing={2} container justifyContent="center">
            <Grid item md={12} xs={12}>
                <SectionTitle>
                    Our Teams
                </SectionTitle>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item lg={4} md={5} sm={5.5} xs={11}>
                <GameCardWoUHEValorant>
                    <GameTitleText>
                        VALORANT
                    </GameTitleText>
                </GameCardWoUHEValorant>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item lg={4} md={5} sm={5.5} xs={11}>
                <GameCardWoUHELeague>
                    <GameTitleText>
                        LEAGUE OF LEGENDS
                    </GameTitleText>
                </GameCardWoUHELeague>
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
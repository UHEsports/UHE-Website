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

// TODO remove if the img tag works better
// const WoUHEOpeningImage = styled('div')(({ theme }) => ({
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "700px",
//     borderRadius:'10px',
//     [theme.breakpoints.down('lg')]: {
//         height: "400px",
//         [theme.breakpoints.down('md')]: {
//             height: "250px",
//         },
//     },
// }));
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

const GameCard = styled('div')(({theme, defaultBackground}) => ({
    backgroundImage: `url('${defaultBackground}')`,
    overflow: 'hidden',
    borderRadius: '10px',
    position: 'relative',
    backgroundSize: '800px',
    backgroundPosition: "-150px",
    // backgroundPosition:"center",
    // width: '634px !important',
    width:"100%",
    height: '425px',
    // TODO add in mobile conversion
    [theme.breakpoints.down('lg')]: {
        width: '100%',
        height: '300px',
        backgroundSize: '650px',
        backgroundPosition: "-160px",
    //     [theme.breakpoints.down('sm')]: {
    //         width: '105px !important',
    //         height: '400px',
    //     },
    },
}));

const GameTitleText = styled('div')(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: "38px",
    textAlign:'right',
    // transform: 'rotate(-90deg)',
    writingMode: 'vertical-lr',
    position:'relative',
    height: '100%',
    bottom: '3%',
    // left:'91%',
    float:'right',
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
        <Grid sx={{mt:{ lg:4, md:1, xs:1 }}} spacing={2} container justifyContent="center">
            <Grid item md={12} xs={12}>
                <SectionTitle>
                    Our Teams
                </SectionTitle>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item lg={4} md={5} xs={11}>
                <GameCard defaultBackground={valorantWoUHE}>
                    {/*<ApexCharacterImage />*/}
                    <GameTitleText>
                        VALORANT
                    </GameTitleText>
                </GameCard>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item lg={4} md={5} xs={11}>
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
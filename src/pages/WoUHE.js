import * as React from 'react';
import Grid from "@mui/material/Grid";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import woUHELogo from "../assets/images/wouhe_logo.png";
import {styled} from "@mui/material/styles";
import group_1 from "../assets/images/group_1.jpg";
import valorantWoUHE from "../assets/images/valorant_cropped_wouhe.png";
import './WoUHE.css';

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
                    Supporting marginalized genders in the program by providing opportunities, space, and community to fruther their education and careers.
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
    transform: 'scaleX(-1)',
    overflow: 'hidden',
    position: 'relative',
    backgroundSize: 'cover',
    // backgroundPosition: "-100px 0px",
    float:'right',
    width:"900px",
    height: '596px',
    // [theme.breakpoints.down('lg')]: {
    //     width: '100%',
    //     height: '400px',
    //     backgroundSize: '800px',
    //     backgroundPosition: "-320px 0px",
    //     [theme.breakpoints.down('md')]: {
    //         width: '100%',
    //         backgroundPosition: "-380px 0px",
    //         // TODO add in mobile conversion
    //     },
    // },
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

const ExampleVideoBox = styled('div')(({ theme }) => ({
    width:'720px',
    height:'425px',
    position:'relative',
    zIndex:1,
    backgroundColor:'grey',
    marginRight:'-100px',
    float:'right',
    [theme.breakpoints.down('lg')]: {

    },
}));

function WoUHEGame() {
    return(
        <Grid sx={{mt:{ lg:4, md:1, xs:1 }}} spacing={2} container justifyContent="center">
            <Grid item md={12} xs={12}>
                <SectionTitle>
                    Our Teams
                </SectionTitle>
            </Grid>
            <Grid item lg={7} md={8} sm={10} xs={11} sx={{ mt:{ lg:3, md:3, sm:3, xs:2 }, px:2, pb:2 }}>
                <SectionDescription sx={{textAlign:'center'}}>
                    Our collegiate Valorant team, representing marginalized genders, sets a new standard for excellence and inspires a more inclusive and innovative future for all gamers.
                </SectionDescription>
            </Grid>
            <Grid item />
            <Grid item sx={{display:'flex', justifyContent:'flex-end', alignItems:'center', mt:{ lg:2, md:1, xs:1 }}} lg={6} md={12} sm={12} xs={11}>
                <ExampleVideoBox />
                {/*<GameCardWoUHEValorant />*/}
            </Grid>
            <Grid item sx={{mt:{ lg:2, md:1, xs:1 }}} lg={6} md={12} sm={12} xs={11}>
                {/*<ExampleVideoBox />*/}
                <GameCardWoUHEValorant />
            </Grid>
        </Grid>
    );
}

function Events() {
    return (
        <>
            <SectionTitle sx={{mt:{ lg:4, md:1, xs:1 }}}>
                Events
            </SectionTitle>
            {/*<iframe*/}
            {/*    src="https://9vey1wx7wknj1n.embednotionpage.com/65307ff35678453ea66b134f3dd1a121?pvs=4"*/}
            {/*    style={{width: '100%', height: '800px', border: 'none !important', padding: '0'}}*/}
            {/*></iframe>*/}
            <iframe
                src="https://9vey1wx7wknj1n.embednotionpage.com/65307ff35678453ea66b134f3dd1a121?pvs=4"
                style={{width: '100%', height: '922px', border: 'none !important', padding: '0'}}
            ></iframe>
        </>
    );
}

function WoUHEContent() {
    return (
        <>
            <SectionTitle>
                WoUHE Content
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

function WoUHE() {
    return (
        <>
            <AboutWoUHE />
            <WoUHEGame />
            {/*<Events />*/}
        </>
    );
}

export default WoUHE;
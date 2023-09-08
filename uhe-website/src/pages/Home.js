import * as React from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system';
import group_1 from '../images/group_1.jpg';
import group_2 from '../images/group_2.jpg';
import group_3 from '../images/group_3.jpg';
import group_4 from '../images/group_4.png';

const OpeningImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${group_4}')`,
    backgroundSize: "cover",
    height: "1000px",
    display: "flex",
    color: "white",
    alignItems: "center",
    alignContent: 'flex-start',
    [theme.breakpoints.down('lg')]: {
        height: "600px",
        [theme.breakpoints.down('sm')]: {
            height: "300px"
        },
    },
}));

const OpeningImageText = styled('div')(({ theme }) => ({
    "@keyframes slideIn": {
        "0%": {
            transform: "translateY(-100px)",
            opacity: 0,
        },
        "100%": {
            transform: "translateY(0px)",
            opacity: 1,
        }
    },
    animation: `slideIn 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    fontSize:"5rem",
    marginLeft:'20px',
    [theme.breakpoints.down('lg')]: {
        fontSize:"3rem",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.7rem",
        },
    },
}));

const OpeningImageSubtitle = styled('div')(({ theme }) => ({
    "@keyframes slideIn": {
        "0%": {
            transform: "translateY(-100px)",
            opacity: 0,
        },
        "100%": {
            transform: "translateY(0px)",
            opacity: 1,
        }
    },
    animation: `slideIn 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    marginLeft:"23px",
    fontSize:"3.5rem",
    [theme.breakpoints.down('lg')]: {
        fontSize:"2rem",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1rem",
        },
    },
}));

function HomePageImage() {
    return(
        <OpeningImage>
            <Grid
                sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                }}
                container>
                <Grid item md={12}>
                    <OpeningImageText item md={12}>
                        University of Hawaii Esports
                    </OpeningImageText>
                </Grid>
                <Grid item md={12}>
                    <OpeningImageSubtitle item md={12}>
                        subtitle text to add
                    </OpeningImageSubtitle>
                </Grid>
            </Grid>
        </OpeningImage>
    );
}

const SectionTitles = styled('div')(({ theme }) => ({
    fontWeight: "bold",
    fontSize:"3rem",
    [theme.breakpoints.down('lg')]: {
    fontSize:"2.5rem",
    [theme.breakpoints.down('sm')]: {
        fontSize:"1.5rem",
    },
},
}));

const WhoAreWeDescription = styled('div')(({ theme }) => ({
    textAlign: 'left',
    fontSize:"2rem",
    [theme.breakpoints.down('lg')]: {
        fontSize: "1.25rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5rem",
        },
    },
}));
function AboutSection() {
    return (
        <Grid sx={{mt:8, p:3}} container>
            <Grid item md={4}>
                <SectionTitles>Who are we?</SectionTitles>
            </Grid>
            <Grid item md={7}>
                <WhoAreWeDescription>
                    Tempora aut est maiores error laudantium ut architecto impedit.
                    Sit sit eius culpa sit. Non quia velit occaecati commodi.
                    Sed eos distinctio magni maxime commodi maxime.
                    Saepe quibusdam et quia ratione earum expedita.
                </WhoAreWeDescription>
            </Grid>
            <Grid item md={1}>

            </Grid>
        </Grid>
    );
}

const MileStoneImages = styled('div')(({ theme }) => ({
    backgroundImage: `url('${group_1}')`,
    backgroundSize: "cover",
    height: "500px",
    borderRadius:'20px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
        [theme.breakpoints.down('sm')]: {
            height: "300px"
        },
    },
}));

const MileStoneText = styled('div')(({ theme }) => ({
    textAlign: 'left',
    fontSize:"1.7rem",
    [theme.breakpoints.down('lg')]: {
        fontSize: "1.25rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5rem",
        },
    },
}));
function OurMilestones() {
    return(
        <Grid sx={{mt:6}} container spacing={4} justifyContent="center">
            <Grid item md={12} xs={12}>
                <SectionTitles>Our Milestones</SectionTitles>
            </Grid>
            <Grid sx={{mt:5}} item md={5} xs={11}>
                <MileStoneImages />
                <MileStoneText sx={{mt:2, fontWeight:'bold'}}>Esports Awards</MileStoneText>
                <MileStoneText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</MileStoneText>
            </Grid>
            <Grid sx={{mt:5}} item md={5} xs={11}>
                <MileStoneImages />
                <MileStoneText sx={{mt:2, fontWeight:'bold'}}>OWL Internship</MileStoneText>
                <MileStoneText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</MileStoneText>
            </Grid>
        </Grid>
    );
}

function JoinDiscord() {
    return(
        <Grid container>
            <Grid md={8}>
                Join Our College Program!
            </Grid>
            <Grid md={4}>

            </Grid>
        </Grid>
    );
}

function Home() {
    const [scrollTop, setScrollTop] = React.useState(0);
    const handleScroll = () => setScrollTop(window.scrollY);
    React.useEffect(() =>{
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>

            <HomePageImage />
            <AboutSection />
            {/*This is where games will be*/}
            <OurMilestones />
            {/*Sponsors    */}
        </>

    );
}

export default Home;
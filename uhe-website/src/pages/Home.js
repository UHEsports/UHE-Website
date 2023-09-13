import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import group_1 from '../images/group_1.jpg';
import group_2 from '../images/group_2.jpg';
import group_3 from '../images/group_3.jpg';
import group_4 from '../images/group_4.png';
import discord_server from '../images/discord_server.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uheLogo from "../images/uhe_logo.png";


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

const OpeningImageText = styled('div')(({ theme , slideIn}) => ({
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
    letterSpacing: "-1px",
    animation: slideIn && `slideIn 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    fontSize:"5rem",
    marginLeft:'20px',
    [theme.breakpoints.down('lg')]: {
        fontSize:"3.5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize:"2.75rem",
        },
    },
}));

const OpeningImageSubtitle = styled('div')(({ theme}) => ({
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
    letterSpacing: "-1px",
    animation: `slideIn 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    marginLeft:"23px",
    fontSize:"3.5rem",
    [theme.breakpoints.down('lg')]: {
        fontSize:"2rem",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.5rem",
        },
    },
}));

function HomePageImage() {
    // TODO onload event to trigger animation
    const [slideIn, setSlideIn] = React.useState(false);
    window.onload = () => {
        console.log("page is fully loaded");
        setSlideIn(true);
    };
    return(
        <OpeningImage>
            <Grid
                sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                }}
                container>
                <Grid item md={12}>
                    <OpeningImageText slideIn={slideIn} item md={12}>
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
    wordSpacing: '-3px',
    letterSpacing: "-1px",
    fontSize:"3.25rem",
    [theme.breakpoints.down('lg')]: {
    fontSize:"2.5rem",
    [theme.breakpoints.down('sm')]: {
        fontSize:"2.25rem",
    },
},
}));

const SectionDescriptions = styled('div')(({ theme }) => ({
    textAlign: 'left',
    letterSpacing: "0.15px",
    fontSize: "1.5rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.25rem",
    },
}));

const CarouselImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "400px",
    borderRadius:'20px',
    margin: '20px 0 20px 20px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
    },
}));

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 975,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const images = [
    group_1,
    group_2,
    group_3,
    group_1,
    group_2,
    group_3
]

function AboutSection() {
    return (
        <Grid sx={{mt:3, p:3}} justifyContent="center" spacing={2} container>
            <Grid item lg={4} md={4}>
                <SectionTitles>
                    Who are we?
                </SectionTitles>
            </Grid>
            <Grid item lg={5} md={7}>
                <SectionDescriptions>
                    Tempora aut est maiores error laudantium ut architecto impedit.
                    Sit sit eius culpa sit. Non quia velit occaecati commodi.
                    Sed eos distinctio magni maxime commodi maxime.
                    Saepe quibusdam et quia ratione earum expedita.
                </SectionDescriptions>
            </Grid>
            <Grid sx={{mt:3}} item md={11} xs={11}>
                <Slider {...settings}>
                    {
                        images.map((image) => {
                            return(
                                <div>
                                    <CarouselImages style={{backgroundImage:`url(${image})`}} />
                                </div>

                            );
                        })
                    }
                </Slider>
            </Grid>
        </Grid>
    );
}

const MileStoneImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "450px",
    borderRadius:'20px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
    },
}));

const MileStoneText = styled('div')(({ theme }) => ({
    textAlign: 'left',
    fontSize:"1.7rem",
    [theme.breakpoints.down('lg')]: {
        fontSize: "1.5rem",
    },
}));
function OurMilestones() {
    return(
        <Grid sx={{mt:2}} container spacing={4} justifyContent="center">
            <Grid item md={12} xs={12}>
                <SectionTitles>Our Milestones</SectionTitles>
            </Grid>
            <Grid sx={{mt:5}} item md={5} xs={11}>
                <MileStoneImages style={{backgroundImage:`url("${group_1}"`}} />
                <MileStoneText sx={{mt:2, fontWeight:'bold'}}>Esports Awards</MileStoneText>
                <MileStoneText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</MileStoneText>
            </Grid>
            <Grid sx={{mt:5}} item md={5} xs={11}>
                <MileStoneImages style={{backgroundImage:`url("${group_1}"`}} />
                <MileStoneText sx={{mt:2, fontWeight:'bold'}}>OWL Internship</MileStoneText>
                <MileStoneText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</MileStoneText>
            </Grid>
        </Grid>
    );
}

function JoinDiscord() {
    return(
        <Grid sx={{mt:6, backgroundColor:"#f6f6f6", p:3}} spacing={2} container justifyContent="center" alignItems="center" >
            <Grid item md={5}>
                <SectionTitles>
                    Join a community
                    <br/>
                    of  1500+
                    <br/>
                    Discord Members
                </SectionTitles>
                {/*TODO add color styling*/}
                <Button sx={{mt:3, fontWeight:"bold"}} size="large" variant="contained" color="success">Join</Button>
            </Grid>
            <Grid item md={5}>
                <img alt="discord server" width="100%" src={discord_server} />
            </Grid>
        </Grid>
    );
}

const UHEInfoImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "400px",
    borderRadius:'20px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
    },
}));

function UHEInfoBlock() {
    return(
        <Grid sx={{mt:7, p:3, pb:6, backgroundColor:"#f6f6f6"}} container spacing={4} alignItems="center" justifyContent="center">
            <Grid lg={5} md={5} xs={7} item>
                <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} />
            </Grid>
            <Grid lg={5} md={5} xs={5} item>
                <SectionTitles style={{textAlign:"left"}}>iLab</SectionTitles>
                <SectionDescriptions>
                    Tempora aut est maiores error laudantium
                    <br/>
                    ut architecto impedit.
                </SectionDescriptions>
            </Grid>
            <Grid lg={5} md={5} xs={5} item>
                <SectionTitles style={{textAlign:"right"}}>Education</SectionTitles>
                <SectionDescriptions style={{textAlign:"right"}}>
                    Tempora aut est maiores error laudantium
                    <br/>
                    ut architecto impedit.
                </SectionDescriptions>
            </Grid>
            <Grid lg={5} md={5} xs={7} item>
                <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} />
            </Grid>
        </Grid>
    );
}

const SponsorLogos = styled('div')(() => ({
    backgroundImage: `url('${uheLogo}')`,
    backgroundSize: "cover",
    width: "150px",
    height:"150px"
}));
function Sponsors() {
    return(
        <Grid sx={{mt:3, p:3}} container justifyContent="center">
            <Grid item md={12} xs={12}>
                <SectionTitles>Our Sponsors</SectionTitles>
            </Grid>
            <Grid item md={2} xs={6} sx={{mt:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <SponsorLogos />
            </Grid>
            <Grid item md={2} xs={6} sx={{mt:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <SponsorLogos />
            </Grid>
            <Grid item md={2} xs={6} sx={{mt:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <SponsorLogos />
            </Grid>
            <Grid item md={2} xs={6} sx={{mt:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <SponsorLogos />
            </Grid>
        </Grid>
    );
}

function Home() {
    return (
        <>

            <HomePageImage />
            <AboutSection />
            {/*TODO games component location*/}
            <JoinDiscord />
            <OurMilestones />
            <UHEInfoBlock />
            <Sponsors />

        </>

    );
}

export default Home;
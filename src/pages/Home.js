import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import group_1 from '../images/group_1.jpg';
import group_2 from '../images/group_2.jpg';
import group_3 from '../images/group_3.jpg';
import discord_server from '../images/discord_server.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uheLogo from "../images/uhe_logo.png";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import { useInView } from 'react-intersection-observer';
import {Link as RouterLink} from "react-router-dom";
import Games from "../components/Games";
import OpeningImage from "../components/OpeningImage";

const OpeningImageText = styled('div')(({ theme}) => ({
    letterSpacing: "-1px",
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
    letterSpacing: "-1px",
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
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return(
        <OpeningImage ref={ref}>
            <Grid
                sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                }}
                container>
                <Grid item md={12}>
                    <OpeningImageText className={inView ? 'slideIn1300ms' : ''} item md={12}>
                        University of Hawaii Esports
                    </OpeningImageText>
                </Grid>
                <Grid item md={12}>
                    <OpeningImageSubtitle className={inView ? 'slideIn1500ms' : ''} item md={12}>
                        subtitle text to add
                    </OpeningImageSubtitle>
                </Grid>
            </Grid>
        </OpeningImage>
    );
}

const CarouselImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "400px",
    borderRadius:'10px',
    margin: '20px 0 20px 20px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
        [theme.breakpoints.down('md')]: {
            height: "250px",
        },
    },

}));

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
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
        <Grid sx={{mt:{ lg:3, md:3, xs:1 }, p:3}} justifyContent="center" spacing={2} container>
            <Grid item lg={4} md={4}>
                <SectionTitle>
                    Who are we?
                </SectionTitle>
            </Grid>
            <Grid item lg={5} md={7}>
                <SectionDescription>
                    Tempora aut est maiores error laudantium ut architecto impedit.
                    Sit sit eius culpa sit. Non quia velit occaecati commodi.
                    Sed eos distinctio magni maxime commodi maxime.
                    Saepe quibusdam et quia ratione earum expedita.
                </SectionDescription>
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
    borderRadius:'10px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
        [theme.breakpoints.down('md')]: {
            height: "250px",
        },
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
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-170px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:1, md:1, xs:1 }}} container spacing={4} justifyContent="center">
            <Grid item md={12} xs={12} ref={ref}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Our Milestones
                </SectionTitle>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item md={5} xs={11}>
                <MileStoneImages style={{backgroundImage:`url("${group_1}"`}} />
                <MileStoneText sx={{mt:2, fontWeight:'bold'}}>Esports Awards</MileStoneText>
                <MileStoneText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</MileStoneText>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item md={5} xs={11}>
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
                <SectionTitle>
                    Join a community
                    <br/>
                    of  1500+
                    <br />
                    Discord Members
                </SectionTitle>
                <Button sx={{mt:3, fontWeight:"bold"}} size="large" variant="contained" color="uhegreen" href="https://discord.gg/uhesports" target="_blank">Join Now</Button>
            </Grid>
            <Grid item md={5}>
                <img
                    alt="discord server"
                    width="100%"
                    src={discord_server}
                />
            </Grid>
        </Grid>
    );
}

const UHEInfoImages = styled('div')(({ theme}) => ({
    backgroundSize: "cover",
    height: "400px",
    borderRadius:'10px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
        [theme.breakpoints.down('md')]: {
            height: "250px",
        },
    },
}));

function UHEInfoBlock() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-150px',
    });
    return(
        <Grid
            sx={{mt:7, p:3, pb:6, backgroundColor:"#f6f6f6"}}
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            ref={ref}>
            <Grid lg={5} md={5} xs={12} item>
                <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
            </Grid>
            <Grid lg={5} md={5} xs={12} item>
                <SectionTitle style={{textAlign:"left"}} className={inView ? 'slideIn1300ms' : 'hidden'}>
                    iLab
                </SectionTitle>
                <SectionDescription className={inView ? 'slideIn1500ms' : 'hidden'}>
                    Tempora aut est maiores error laudantium
                    <br/>
                    ut architecto impedit.
                    <br/>
                    <Button
                        sx={{mt:2, fontWeight:"bold"}}
                        size="large"
                        variant="contained"
                        color="uhegreen"
                        component={RouterLink}
                        to="/ilab">
                        Read More
                    </Button>
                </SectionDescription>
            </Grid>
            {/*Display when it is greater than or equal to md*/}
            <Grid sx={{ display: {lg: 'block', md: 'block', xs:'none' }}} lg={5} md={5} item>
                <SectionTitle style={{textAlign:"right"}} className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Education
                </SectionTitle>
                <SectionDescription sx={{textAlign:"right"}} className={inView ? 'slideIn1500ms' : 'hidden'}>
                    Tempora aut est maiores error laudantium
                    <br/>
                    ut architecto impedit.
                    <br/>
                    <Button
                        sx={{mt:2, fontWeight:"bold"}}
                        size="large"
                        variant="contained"
                        color="uhegreen"
                        component={RouterLink}
                        to="/education">
                        Read More
                    </Button>
                </SectionDescription>
            </Grid>
            <Grid sx={{ display: {lg: 'block', md: 'block', xs:'none' }}} lg={5} md={5} item>
                <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} className={inView ? 'slideIn1000ms' : 'hidden'} />
            </Grid>

            {/*Display when it is less than md*/}
            <Grid sx={{ mt:2, display: {lg: 'none', md: 'none', xs:'block' }}} xs={12} item>
                <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} className={inView ? 'slideIn1000ms' : 'hidden'} />
            </Grid>
            <Grid sx={{ display: {lg: 'none', md: 'none',xs:'block' }}} xs={12} item>
                <SectionTitle style={{textAlign:"left"}} className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Education
                </SectionTitle>
                <SectionDescription className={inView ? 'slideIn1500ms' : 'hidden'}>
                    Tempora aut est maiores error laudantium
                    <br/>
                    ut architecto impedit.
                    <br/>
                    <Button
                        sx={{mt:2, fontWeight:"bold"}}
                        size="large"
                        variant="contained"
                        color="uhegreen"
                        component={RouterLink}
                        to="/education">
                        Read More
                    </Button>
                </SectionDescription>
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
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:3, md:3, xs:1 }, p:3}} container justifyContent="center" ref={ref}>
            <Grid item md={12} xs={12}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Our Sponsors
                </SectionTitle>
            </Grid>
            <Grid item md={2} xs={6} sx={{mt:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <SponsorLogos className={inView ? 'slideIn1300ms' : 'hidden'} />
            </Grid>
            <Grid item md={2} xs={6} sx={{mt:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <SponsorLogos className={inView ? 'slideIn1500ms' : 'hidden'} />
            </Grid>
            <Grid item md={2} xs={6} sx={{mt:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <SponsorLogos className={inView ? 'slideIn1700ms' : 'hidden'} />
            </Grid>
            <Grid item md={2} xs={6} sx={{mt:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <SponsorLogos className={inView ? 'slideIn1900ms' : 'hidden'} />
            </Grid>
        </Grid>
    );
}

function Home() {
    return (
        <>
            <HomePageImage />
            <AboutSection />
            <JoinDiscord />
            {/*TODO games component location*/}
            <Games />
            <OurMilestones />
            <UHEInfoBlock />
            <Sponsors />
        </>
    );
}

export default Home;
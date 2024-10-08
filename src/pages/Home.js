import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import group_1 from '../assets/images/group_1.jpg';
import group_2 from '../assets/images/group_2.jpg';
import group_3 from '../assets/images/group_3.jpg';
// import group_4 from '../assets/images/group_4.png';
import uhesports_stan_sherrif from '../assets/images/uhesports-stan-sheriff.png';
import discord_server from '../assets/images/discord_server.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uheLogo from "../assets/images/uhe_logo.png";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import { useInView } from 'react-intersection-observer';
import {Link as RouterLink} from "react-router-dom";
import Games from "../components/Games";
import OpeningPageImage from '../components/OpeningPageImage';
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: '/', title: "Home" }); // Page information for Google Analytics

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
            <Grid item lg={5} md={12} sm={12} xs={11}>
                <SectionTitle>
                    Who are we?
                </SectionTitle>
            </Grid>
            <Grid item lg={5} md={10} sm={11} xs={12}>
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
        [theme.breakpoints.down('sm')]: {
            height: "250px",
        },
    },
}));

const MileStoneTextTitle = styled('div')(({ theme }) => ({
    textAlign: 'left',
    fontSize:"28px",
    fontWeight:'bold',
    marginTop:'16px',
}));

function OurMilestones() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-170px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:1, md:1, xs:1 }, p:3}} container spacing={3} justifyContent="center">
            <Grid item md={12} xs={12} ref={ref}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Our Milestones
                </SectionTitle>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item md={5} sm={11} xs={12}>
                <MileStoneImages style={{backgroundImage:`url("${group_1}"`}} />
                <MileStoneTextTitle>Esports Awards</MileStoneTextTitle>
                <SectionDescription sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>
            </Grid>
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item md={5} sm={11} xs={12}>
                <MileStoneImages style={{backgroundImage:`url("${group_1}"`}} />
                <MileStoneTextTitle>OWL Internship</MileStoneTextTitle>
                <SectionDescription sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>
            </Grid>
        </Grid>
    );
}

function JoinDiscord() {
    return(
        <Grid sx={{mt:6, backgroundColor:"#f6f6f6", p:3}} spacing={2} container justifyContent="center" alignItems="center" >
            <Grid item lg={5} md={6}>
                <SectionTitle>
                    Join a community
                    <br/>
                    of 1500+
                    <br/>
                    Discord Members
                </SectionTitle>
                <Button sx={{mt:3, fontWeight:"bold"}} size="large" variant="contained" color="uhegreen" href="https://discord.gg/uhesports" target="_blank">Join Now</Button>
            </Grid>
            <Grid item lg={5} md={6}>
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
        [theme.breakpoints.down('sm')]: {
            height: "250px",
        },
    },
}));

function UHEInfoBlock() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-150px',
    });

    const scrollToTop = () => {
        // behavor is auto so it instantly appears at the top instead of scrolling
        window.scrollTo({
            top:0,
            behavior: "auto",
        });
    };

    return(
        <Grid
            sx={{mt:7, p:3, pb:6, backgroundColor:"#f6f6f6"}}
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            ref={ref}>
            <Grid lg={5} md={5} sm={11} xs={12} item>
                <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
            </Grid>
            <Grid lg={5} md={5} sm={11} xs={12} item>
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
                        onClick={scrollToTop}
                        to="/ilab">
                        Read More
                    </Button>
                </SectionDescription>
            </Grid>
            {/*Display when it is greater than or equal to md*/}
            <Grid sx={{ display: {lg: 'block', md: 'block', sm:'none', xs:'none' }}} lg={5} md={5} item>
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
                        onClick={scrollToTop}
                        to="/education"
                    >
                        Read More
                    </Button>
                </SectionDescription>
            </Grid>
            <Grid sx={{ display: {lg: 'block', md: 'block', sm:'none', xs:'none' }}} lg={5} md={5} item>
                <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} className={inView ? 'slideIn1000ms' : 'hidden'} />
            </Grid>

            {/*Display when it is less than md*/}
            <Grid sx={{ mt:2, display: {lg: 'none', md: 'none', xs:'block' }}}  sm={11} xs={12} item>
                <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} className={inView ? 'slideIn1000ms' : 'hidden'} />
            </Grid>
            <Grid sx={{ display: {lg: 'none', md: 'none', xs:'block' }}} sm={11} xs={12} item>
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
                        onClick={scrollToTop}
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
            <OpeningPageImage header="University of Hawai'i Esports" imageURL={uhesports_stan_sherrif}/>
            <AboutSection />
            {/*<JoinDiscord />*/}
            <Games />
            <OurMilestones />
            <UHEInfoBlock />
            <Sponsors />
        </>
    );
}

export default Home;
import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import group_1 from '../assets/images/group_1.jpg';
import group_2 from '../assets/images/group_2.jpg';
import group_3 from '../assets/images/group_3.jpg';
import acm_logo from '../assets/images/ACMlogo_stacked.png';
import apcu_logo from '../assets/images/APCU_vert_2016_black.png';
import who_are_we_1 from '../assets/images/who_are_we_1.png';
import who_are_we_2 from '../assets/images/who_are_we_2.png';
import who_are_we_3 from '../assets/images/who_are_we_3.jpg';
import who_are_we_4 from '../assets/images/who_are_we_4.png';
import who_are_we_5 from '../assets/images/who_are_we_5.PNG';
import who_are_we_6 from '../assets/images/who_are_we_6.jpg';
import who_are_we_7 from '../assets/images/who_are_we_7.png';
import who_are_we_8 from '../assets/images/who_are_we_8.png';
import who_are_we_9 from '../assets/images/who_are_we_9.png';
import who_are_we_10 from '../assets/images/who_are_we_10.png';
import who_are_we_11 from '../assets/images/who_are_we_11.jpg';
import who_are_we_12 from '../assets/images/who_are_we_12.png';
import who_are_we_13 from '../assets/images/who_are_we_13.png';

import education_uhe_info from '../assets/images/education_uhe_info.jpg';
import milestone_1 from '../assets/images/milestone_0_Overwatch Internship 2021-22.png';
import milestone_2 from '../assets/images/milestone_1_Esports Awards 2022 - Collegiate Program of the Year.png';
import milestone_3 from '../assets/images/milestone_2_Aloha Pacific Federal Credit Union Scholarships 2023.jpg';
import milestone_4 from '../assets/images/milestone_3_Joe Marsh Visit to UH 2023 (PACE x UHE).jpg';
import milestone_5 from '../assets/images/milestone_4_Gen G Interns (23 & 24).png';
import milestone_6 from '../assets/images/milestone_5_T1 Intern Jazmin 2024.jpg';
import milestone_7 from '../assets/images/milestone_6_Good Jobs Hawaii x UH Esports Pathway 2024 fall.png';



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
import {Box} from "@mui/material";

ReactGA.send({ hitType: "pageview", page: '/', title: "Home" }); // Page information for Google Analytics

const CarouselImages = styled('img')(({ theme }) => ({
    // objectFit: 'contain',
    objectFit: 'cover',
    objectPosition: 'center',
    height: '350px',
    [theme.breakpoints.down(1500)]: {
        height: '325px',
        [theme.breakpoints.down(1400)]: {
            height: '300px',
            [theme.breakpoints.down('md')]: {
                height: '250px',
                maxWidth:'300px'
                // [theme.breakpoints.down('sm')]: {
                //     height: '250px',
                // },
            },
        },
    },
}));

const who_are_we_slider_settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    draggable:true,
    swipeToSlide:true,
    variableWidth: true,
    centerMode: true,
    // TODO makesure it is true
    autoplay: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 975,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                // arrows:true,
                centerMode: false,
                variableWidth: false,
                arrows:false,
            }
        },

    ]
};

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    draggable:true,
    swipeToSlide:true,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 975,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                // arrows:true,
                centerMode: false,
                variableWidth: false,
                arrows:false,
            }
        },
    ]
};

const who_are_we_images = [
    {
        image: who_are_we_1,
        title: <>Scholarship Overwatch 2<br/>varsity team (Fall 2024)</>,
    },
    {
        image: who_are_we_2,
        title: <>President of T1<br/>visits UH Manoa</>,
    },
    {
        image: who_are_we_3,
        title: <>The Women of<br/>UH Esports Division</>,
    },
    {
        image: who_are_we_4,
        title: <>Counter Strike 2<br/>varsity team (Fall 2024)</>,
    },
    {
        image: who_are_we_5,
        title: <>Activision-Blizzard<br/>Comes to Hawaii (2021-2022)</>,
    },
    {
        image: who_are_we_6,
        title: <>Students work with the <br/> Overwatch Broadcast 2021</>,
    },
    {
        image: who_are_we_7,
        title: <>Manoa Academy of Gamer's<br/>Halloween Contest</>,
    },
    {
        image: who_are_we_8,
        title: <>The women of our<br/>UH Esports program</>,
    },
    {
        image: who_are_we_9,
        title: <>Twitch Student visits<br/>UH Esports (2019)</>,
    },
    {
        image: who_are_we_10,
        title: <>The UH Smash team wins the <br/> first UH Esports Smash Collegiate<br/>Tournament at Kawaii Kon
            (2023)</>,
    },
    {
        image: who_are_we_11,
        title: 'WoHE members (2023)',
    },
    {
        image: who_are_we_12,
        title: 'WoHE Valorant Player',
    },
    {
        image: who_are_we_13,
        title: <>MLBB 2024 Spring<br/>ACC Championship</>,
    },
];

function AboutSection() {
    return (
        <Grid sx={{mt:{ lg:3, md:3, xs:1 }, p:3, minHeight:'300px'}} justifyContent="center" container>
            <Grid item lg={5} md={12} sm={12} xs={11}>
                <SectionTitle>
                    Who are we?
                </SectionTitle>
            </Grid>
            <Grid item sx={{mt:2}} lg={5} md={10} sm={11} xs={12}>
                <SectionDescription>
                    Tempora aut est maiores error laudantium ut architecto impedit.
                    Sit sit eius culpa sit. Non quia velit occaecati commodi.
                    Sed eos distinctio magni maxime commodi maxime.
                    Saepe quibusdam et quia ratione earum expedita.
                </SectionDescription>
            </Grid>
            {/*<Grid sx={{mt:3}} item lg={11} md={11} xs={11} >*/}
            <Grid item sx={{mt:{ lg:3, md:1, xs:2 }}} lg={11} md={11} sm={12} xs={12}>
                {/*<Slider {...settings}>*/}
                {/*    {*/}
                {/*        who_are_we_images.map((who_are_we) => {*/}
                {/*            return(*/}
                {/*                <div>*/}
                {/*                    <CarouselImages style={{backgroundImage:`url(${who_are_we.image})`}} />*/}
                {/*                </div>*/}
                {/*            );*/}
                {/*        })*/}
                {/*    }*/}
                {/*</Slider>*/}
                <Slider {...who_are_we_slider_settings}>
                    {
                        who_are_we_images.map((who_are_we, index) => {
                            return (
                                // <div>
                                //     <Grid container justifyContent="center" alignItems="center" sx={{ height: '350px' }}>
                                //         <img src={image} className="whoAreWeImages" alt="Who are we images" />
                                //     </Grid>
                                //     {/*<img src={apcu_logo} className="test" />*/}
                                //     {/*<CarouselImages style={{backgroundImage:`url("${milestone.image}"`}} />*/}
                                //     {/*<MileStoneTextTitle>{milestone.title}</MileStoneTextTitle>*/}
                                //     {/*<SectionDescription style={{margin: '5px 0 20px 20px',}} sx={{mt:1}}>{milestone.description}</SectionDescription>*/}
                                // </div>
                                <div key={{index}}>
                                    <Grid sx={{ml:{lg:2, md:2, sm:2, xs:0}, mt:3, mb:1, overflow:'hidden'}} direction="column" container alignItems="center">
                                        <CarouselImages src={who_are_we.image} />
                                        <Box sx={{mt:2}}>
                                            <MileStoneTextTitle style={{textAlign:'center'}}>{who_are_we.title}</MileStoneTextTitle>
                                        </Box>

                                        {/*<Grid item>*/}
                                        {/*    */}
                                        {/*    /!*<img src={who_are_we.image} className="whoAreWeImages" alt="Milestone Logo"/>*!/*/}
                                        {/*</Grid>*/}
                                        {/*<Grid item sx={{mt:2}}>*/}
                                        {/*    /!*<Testing>*!/*/}
                                        {/*    /!*    <SectionDescription style={{textAlign:'center', maxWidth: who_are_we.image === who_are_we_10 ? '450px': ''}}>{who_are_we.title}</SectionDescription>*!/*/}
                                        {/*    /!*</Testing>*!/*/}
                                        {/*    <SectionDescription style={{textAlign:'center', maxWidth: who_are_we.image === who_are_we_10 ? '': ''}}>{who_are_we.title}</SectionDescription>*/}
                                        {/*</Grid>*/}
                                    </Grid>
                                    {/*<img src={apcu_logo} className="test" />*/}
                                    {/*<CarouselImages style={{backgroundImage:`url("${milestone.image}"`}} />*/}
                                    {/*style={{margin: '36px 0 0 0', textAlign:'center', padding: '5px'}}*/}
                                    {/*<MileStoneTextTitle >{who_are_we.title}</MileStoneTextTitle>*/}
                                    {/*<SectionDescription style={{margin: '5px 0 20px 20px',}} sx={{mt:1}}>{who_are_we.description}</SectionDescription>*/}
                                </div>
                            );
                        })
                    }
                </Slider>
            </Grid>
        </Grid>
    );
}

const MileStoneImages = styled('div')(({theme}) => ({
    backgroundSize: "cover",
    height: "450px",
    borderRadius: '10px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
        [theme.breakpoints.down('sm')]: {
            height: "250px",
        },
    },
}));

const MileStoneTextTitle = styled('div')(({theme}) => ({
    textAlign: 'left',
    fontSize: "28px",
    fontWeight: 'bold',
    // marginTop:'16px',
    margin: '0px 16px 0 20px',
}));

// import milestone_6 from '../assets/images/milestone_5_T1 Intern Jazmin 2024.jpg';
// import milestone_7 from '../assets/images/milestone_6_Good Jobs Hawaii x UH Esports Pathway 2024 fall.png';


const milestone_images = [
    {
        image: milestone_1,
        title: 'Overwatch Internship',
        description: 'Tempora aut est maiores error laudantium ut architecto'
    },
    {
        image: milestone_2,
        title: 'Esports Awards 2022',
        description: 'Tempora aut est maiores error laudantium ut architecto'
    },
    {
        image: milestone_3,
        title: <>Aloha Pacific Federal<br/>Credit Union Scholarships</>,
        description: 'Tempora aut est maiores error laudantium ut architecto'
    },
    {
        image: milestone_4,
        title: <>Joe Marsh Visit to <br/>UH 2023 (PACE x UHE)</>,
        description: 'Tempora aut est maiores error laudantium ut architecto'
    },
    {
        image: milestone_5,
        title: 'Gen G Interns',
        description: 'Tempora aut est maiores error laudantium ut architecto'
    },
    {
        image: milestone_6,
        title: 'T1 Intern Jazmin 2024',
        description: 'Tempora aut est maiores error laudantium ut architecto'
    },
    {
        image: milestone_7,
        title: <>Good Jobs Hawaii x UH <br/> Esports Pathway 2024 fall</>,
        description: 'Tempora aut est maiores error laudantium ut architecto'
    },
];

function OurMilestones() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-170px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:1, md:1, xs:1 }, p:3}} container justifyContent="center">
            <Grid item lg={5} md={12} sm={12} xs={11} ref={ref}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Our Milestones
                </SectionTitle>
            </Grid>
            {/*<Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item md={5} sm={11} xs={12}>*/}
            {/*    <MileStoneImages style={{backgroundImage:`url("${group_1}"`}} />*/}
            {/*    <MileStoneTextTitle>Esports Awards</MileStoneTextTitle>*/}
            {/*    <SectionDescription sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>*/}
            {/*</Grid>*/}
            {/*<Grid sx={{mt:{ lg:2, md:1, xs:1 }}} item md={5} sm={11} xs={12}>*/}
            {/*    <MileStoneImages style={{backgroundImage:`url("${group_1}"`}} />*/}
            {/*    <MileStoneTextTitle>OWL Internship</MileStoneTextTitle>*/}
            {/*    <SectionDescription sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>*/}
            {/*</Grid>*/}
            <Grid sx={{mt:{ lg:2, md:1, xs:1 }}} lg={11} md={11} sm={12} xs={12}>
                {/*<Slider {...settings}>*/}
                {/*    {*/}
                {/*        milestone_images.map((milestone, index) => {*/}
                {/*            return(*/}
                {/*                <div key={{index}}>*/}
                {/*                    <Grid container justifyContent="center" alignItems="center">*/}
                {/*                        <Grid item>*/}
                {/*                            <img src={milestone.image} className="test" alt="Milestone Logo" />*/}
                {/*                        </Grid>*/}
                {/*                    </Grid>*/}
                {/*                    /!*<img src={apcu_logo} className="test" />*!/*/}
                {/*                    /!*<CarouselImages style={{backgroundImage:`url("${milestone.image}"`}} />*!/*/}
                {/*                    <MileStoneTextTitle>{milestone.title}</MileStoneTextTitle>*/}
                {/*                    <SectionDescription style={{margin: '5px 0 20px 20px',}} sx={{mt:1}}>{milestone.description}</SectionDescription>*/}
                {/*                </div>*/}
                {/*            );*/}
                {/*        })*/}
                {/*    }*/}
                {/*</Slider>*/}
                <Slider {...who_are_we_slider_settings}>
                    {
                        milestone_images.map((milestone, index) => {
                            return (
                                // <div>
                                //     <Grid container justifyContent="center" alignItems="center" sx={{ height: '350px' }}>
                                //         <img src={image} className="whoAreWeImages" alt="Who are we images" />
                                //     </Grid>
                                //     {/*<img src={apcu_logo} className="test" />*/}
                                //     {/*<CarouselImages style={{backgroundImage:`url("${milestone.image}"`}} />*/}
                                //     {/*<MileStoneTextTitle>{milestone.title}</MileStoneTextTitle>*/}
                                //     {/*<SectionDescription style={{margin: '5px 0 20px 20px',}} sx={{mt:1}}>{milestone.description}</SectionDescription>*/}
                                // </div>
                                <div key={{index}}>
                                    <Grid sx={{ml:{lg:2, md:2, sm:2, xs:0}, mt:3, mb:1, overflow:'hidden'}} direction="column" container alignItems="center">
                                        <CarouselImages src={milestone.image} />
                                        <Box sx={{mt:2}}>
                                            <MileStoneTextTitle style={{textAlign:'center'}}>{milestone.title}</MileStoneTextTitle>
                                            {/*// <SectionDescription style={{textAlign:'center', maxWidth: milestone.image === who_are_we_10 ? '': ''}}>{milestone.title}</SectionDescription>*/}
                                        </Box>

                                        {/*<Grid item>*/}
                                        {/*    */}
                                        {/*    /!*<img src={who_are_we.image} className="whoAreWeImages" alt="Milestone Logo"/>*!/*/}
                                        {/*</Grid>*/}
                                        {/*<Grid item sx={{mt:2}}>*/}
                                        {/*    /!*<Testing>*!/*/}
                                        {/*    /!*    <SectionDescription style={{textAlign:'center', maxWidth: who_are_we.image === who_are_we_10 ? '450px': ''}}>{who_are_we.title}</SectionDescription>*!/*/}
                                        {/*    /!*</Testing>*!/*/}
                                        {/*    <SectionDescription style={{textAlign:'center', maxWidth: who_are_we.image === who_are_we_10 ? '': ''}}>{who_are_we.title}</SectionDescription>*/}
                                        {/*</Grid>*/}
                                    </Grid>
                                    {/*<img src={apcu_logo} className="test" />*/}
                                    {/*<CarouselImages style={{backgroundImage:`url("${milestone.image}"`}} />*/}
                                    {/*style={{margin: '36px 0 0 0', textAlign:'center', padding: '5px'}}*/}
                                    {/*<MileStoneTextTitle >{who_are_we.title}</MileStoneTextTitle>*/}
                                    {/*<SectionDescription style={{margin: '5px 0 20px 20px',}} sx={{mt:1}}>{who_are_we.description}</SectionDescription>*/}
                                </div>
                            );
                        })
                    }
                </Slider>
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
            {/*<Grid lg={4} md={5} sm={11} xs={12} item>*/}
            {/*    <UHEInfoImages style={{backgroundImage:`url("${group_2}"`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>*/}
            {/*</Grid>*/}
            {/*<Grid lg={5} md={5} sm={11} xs={12} item>*/}
            {/*    <SectionTitle style={{textAlign:"left"}} className={inView ? 'slideIn1300ms' : 'hidden'}>*/}
            {/*        iLab*/}
            {/*    </SectionTitle>*/}
            {/*    <SectionDescription className={inView ? 'slideIn1500ms' : 'hidden'}>*/}
            {/*        Tempora aut est maiores error laudantium*/}
            {/*        <br/>*/}
            {/*        ut architecto impedit.*/}
            {/*        <br/>*/}
            {/*        /!*<Button*!/*/}
            {/*        /!*    sx={{mt:2, fontWeight:"bold"}}*!/*/}
            {/*        /!*    size="large"*!/*/}
            {/*        /!*    variant="contained"*!/*/}
            {/*        /!*    color="uhegreen"*!/*/}
            {/*        /!*    component={RouterLink}*!/*/}
            {/*        /!*    onClick={scrollToTop}*!/*/}
            {/*        /!*    to="/ilab">*!/*/}
            {/*        /!*    Read More*!/*/}
            {/*        /!*</Button>*!/*/}
            {/*    </SectionDescription>*/}
            {/*</Grid>*/}
            {/*Display when it is greater than or equal to md*/}
            {/*<Grid sx={{ display: {lg: 'block', md: 'block', sm:'none', xs:'none' }}} lg={5} md={5} item>*/}
            {/*    <SectionTitle style={{textAlign:"right"}} className={inView ? 'slideIn1300ms' : 'hidden'}>*/}
            {/*        Education*/}
            {/*    </SectionTitle>*/}
            {/*    <SectionDescription sx={{textAlign:"right"}} className={inView ? 'slideIn1500ms' : 'hidden'}>*/}
            {/*        Tempora aut est maiores error laudantium*/}
            {/*        <br/>*/}
            {/*        ut architecto impedit.*/}
            {/*        <br/>*/}
            {/*        <Button*/}
            {/*            sx={{mt:2, fontWeight:"bold"}}*/}
            {/*            size="large"*/}
            {/*            variant="contained"*/}
            {/*            color="uhegreen"*/}
            {/*            component={RouterLink}*/}
            {/*            onClick={scrollToTop}*/}
            {/*            to="/education"*/}
            {/*        >*/}
            {/*            Read More*/}
            {/*        </Button>*/}
            {/*    </SectionDescription>*/}
            {/*</Grid>*/}
            {/*<Grid sx={{ display: {lg: 'block', md: 'block', sm:'none', xs:'none' }}} lg={4} md={5} item>*/}
            {/*    <UHEInfoImages style={{backgroundImage:`url("${education_uhe_info}"`}} className={inView ? 'slideIn1000ms' : 'hidden'} />*/}
            {/*</Grid>*/}

            {/*Display when it is less than md*/}
            <Grid lg={1} md={1}></Grid>
            <Grid sx={{ mt:2, display: {lg: 'block', md: 'block', xs:'block' }}} lg={4} md={5}  sm={11} xs={12} item>
                <UHEInfoImages style={{backgroundImage:`url("${education_uhe_info}"`}} className={inView ? 'slideIn1000ms' : 'hidden'} />
            </Grid>
            <Grid sx={{ display: {lg: 'block', md: 'block', xs:'block' }}} lg={4} md={5} sm={11} xs={12} item>
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

const SponsorLogos = styled('img')(({ theme }) => ({
    display: 'block',
    maxWidth: '175px',
    width: 'auto',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
        maxWidth: '150px',
    },
}));
function Sponsors() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:3, md:3, xs:1 }, p:3, pb:5}} container justifyContent="center" ref={ref}>
            <Grid item lg={12} md={12} xs={12} sx={{mb:{lg:4, md:4, xs:3}}}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Our Sponsors
                </SectionTitle>
            </Grid>
            <Grid item lg={2} md={3} xs={6} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <SponsorLogos src={apcu_logo} className={inView ? 'slideIn1900ms' : 'hidden'} />
                {/*<img src={apcu_logo} className={inView ? 'slideIn1500ms logos' : 'hidden logos'} />*/}
            </Grid>
            <Grid lg={1} md={1}></Grid>
            <Grid item lg={2} md={3} xs={6} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <SponsorLogos src={acm_logo} className={inView ? 'slideIn1900ms' : 'hidden'} />
                {/*<img src={acm_logo} className={inView ? 'slideIn1900ms logos' : 'hidden logos'}/>*/}
                {/*<SponsorLogos style={{backgroundImage: `url('${acm_logo}')`, width: "200px", height: "150px"}}*/}
                {/*              className={inView ? 'slideIn1700ms' : 'hidden'}/>*/}
            </Grid>
        </Grid>
    );
}

function Home() {
    return (
        <>
            <OpeningPageImage header="University of Hawai'i Esports" imageURL={uhesports_stan_sherrif}/>
            <AboutSection/>
            {/*<JoinDiscord />*/}
            <Games />
            <OurMilestones />
            <UHEInfoBlock />
            <Sponsors />
        </>
    );
}

export default Home;
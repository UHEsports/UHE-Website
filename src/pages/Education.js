import * as React from 'react';
import './Education.css';
import {useInView} from "react-intersection-observer";
import OpeningPageImage from "../components/OpeningPageImage";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import education from "../images/education_intro_image.png";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import {styled} from "@mui/material";
import geng_1 from "../images/geng_1.png";
import geng_2 from "../images/geng_2.png";
import geng_3 from "../images/geng_3.png";
import Button from "@mui/material/Button";
import courses_graphic from "../images/com369_graphic_fall_2023.png";
import geng_background from "../images/geng_background.png";
import overwatch_background from "../images/overwatch_background.png";
import vanta_background from "../images/vanta_background.png";

const CarouselImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    backgroundPosition:"center",
    height: "450px",
    [theme.breakpoints.down('lg')]: {
        height: "320px",
        [theme.breakpoints.down('md')]: {
            height: "400px",
            [theme.breakpoints.down('sm')]: {
                height: "300px",
            },
        },
    },
}));

const imageCarouselSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows:false,
};

const textCarouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows:true,
};

function InternshipHeader() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <Grid container sx={{ mt:{ lg:6, md:4, sm:4, xs:4 }}} justifyContent="center" ref={ref}>
            <Grid item md={12} sm={12}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Internships
                </SectionTitle>
            </Grid>
            <Grid  item md={7} sm={10} sx={{p:2,}}>
                <SectionDescription className={inView ? 'slideIn1400ms' : 'hidden'}>
                    Talk about the team’s history here.
                    Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
                    Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad quis magna culpa anim
                </SectionDescription>
            </Grid>
        </Grid>
    );
}

function InternshipDescription({title, descriptions, backgroundURL}) {
    return(
        <Grid item lg={7} md={7} sm={12} xs={12} sx={{pt:{sm:2, xs:2}, pb:{sm:5, xs:5}, flexDirection: 'column',backgroundImage:`url('${backgroundURL}')`, backgroundPosition:'center', backgroundSize:'cover' }} className="InternshipInformation">
            <SectionTitle>
                {title}
            </SectionTitle>
            <Box sx={{mt:1, width:{ lg:'70%', md:'75%', sm:'65%', xs:'80%'}}}>
                <Slider {...textCarouselSettings}>
                    {
                        descriptions.map((text) => {
                            return(
                                <SectionDescription sx={{textAlign:'center'}}>
                                    <Box sx={{fontWeight:'bold'}}>{text[0]}</Box>{text[1]}
                                </SectionDescription>
                            );
                        })
                    }
                </Slider>
            </Box>
        </Grid>
    );
}

function InternshipGraphicRight({title, descriptions, images, backgroundURL}){
    return(
        <Grid container sx={{mt:{ lg:6, md:4, sm:4, xs:4}}}>
            <InternshipDescription title={title} descriptions={descriptions} backgroundURL={backgroundURL} />
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Box sx={{top:{lg:25, md:25, sm:0}, left:{lg:-30, md:-10, sm:0}, position:'relative'}}>
                    <Slider {...imageCarouselSettings}>
                        {
                            images.map((image) => {
                                return(
                                    <>
                                        <CarouselImages style={{backgroundImage:`url(${image})`}} />
                                    </>
                                );
                            })
                        }
                    </Slider>
                </Box>
            </Grid>
        </Grid>
    );
}

function InternshipGraphicLeft({title, descriptions, images, backgroundURL}){
    return(
        <Grid container sx={{mt:{ lg:6, md:4, sm:4, xs:4}}}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Box sx={{top:{lg:25, md:25, sm:0}, right:{lg:-30, md:-10, sm:0}, position:'relative'}}>
                    <Slider {...imageCarouselSettings}>
                        {
                            images.map((image) => {
                                return(
                                    <>
                                        <CarouselImages style={{backgroundImage:`url(${image})`}} />
                                    </>
                                );
                            })
                        }
                    </Slider>
                </Box>
            </Grid>
            <InternshipDescription title={title} descriptions={descriptions} backgroundURL={backgroundURL} />
        </Grid>
    );
}

function Courses() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-150px',
    });
    return(
        <Grid sx={{mt:8, backgroundColor:"#f6f6f6", pt:1, pb:5}} spacing={4} container justifyContent="center" alignItems="center" ref={ref}>
            <Grid item lg={5} md={5} sm={11} xs={11}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>Courses</SectionTitle>
                <Box sx={{mt:{lg:4, md:2, xs:2}}}>
                    <SectionDescription style={{textAlign:'center'}} className={inView ? 'slideIn1500ms' : 'hidden'}>
                        Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
                        Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad quis magna culpa anim dolor do aliqua duis nulla ad.
                        Fugiat incididunt id quis cillum eiusmod consectetur aliqua
                        <br/>
                        <Button sx={{mt:{lg:5, md:3, sm:4, xs:2}, fontWeight:"bold"}} size="large" variant="contained" color="uhegreen" href="https://discord.gg/uhesports" target="_blank">Learn More</Button>
                    </SectionDescription>
                </Box>
            </Grid>
            <Grid item lg={4} md={5} sm={10} xs={11}>
                <img
                    style={{borderRadius:'10px'}}
                    alt="UHE Courses"
                    width="100%"
                    className={inView ? 'slideIn1000ms' : 'hidden'}
                    src={courses_graphic}
                />
            </Grid>
        </Grid>
    );
}

function Education() {
    const exampleImages = [
        geng_1,
        geng_2,
        geng_3,
    ];

    const exampleText = [
        ["Learn from the Pros", "Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet. Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad."],
        ["Experience Korean Culture", "Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet. Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad."]
    ];
    return (
        <>
            <OpeningPageImage header="Education" imageURL={education}/>
            <InternshipHeader />
            <InternshipGraphicRight images={exampleImages} title="GEN G" descriptions={exampleText} backgroundURL={geng_background} />
            <Box sx={{display: {lg: 'block', md: 'block', sm:'none', xs:'none' }}}><InternshipGraphicLeft images={exampleImages} title="OVERWATCH LEAGUE" descriptions={exampleText} backgroundURL={overwatch_background} /></Box>
            <Box sx={{display: {lg: 'none', md: 'none', sm:'block', xs:'block' }}}><InternshipGraphicRight images={exampleImages} title="OVERWATCH LEAGUE" descriptions={exampleText} backgroundURL={overwatch_background} /> </Box>
            <InternshipGraphicRight images={exampleImages} title="VANTA" descriptions={exampleText} backgroundURL={vanta_background} />
            <Courses />
        </>
    );
}

export default Education;
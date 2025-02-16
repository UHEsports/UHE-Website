import * as React from 'react';
import './Education.css';
import {useInView} from "react-intersection-observer";
import OpeningPageImage from "../components/OpeningPageImage";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import education_opening_image from "../assets/images/education/education_opening_image.png";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import Button from "@mui/material/Button";
import courses_graphic from "../assets/images/education/com369_graphic_fall_2023.png";
import geng_background from "../assets/images/education/geng_background.png";
import overwatch_background from "../assets/images/education/overwatch_background.png";
import vanta_background from "../assets/images/education/vanta_background.png";
import ReactGA from "react-ga4";
import {styled} from "@mui/material/styles";

ReactGA.send({ hitType: "pageview", page: '/education', title: "Education" }); // Page information for Google Analytics

const VideoComponent = styled('iframe')(({ theme , videoURL}) => ({
    width:"100%",
    height: '450px',
    title:"YouTube video player",
    [theme.breakpoints.down(900)]: {
        height: '400px',
        [theme.breakpoints.down(600)]: {
            height: '250px',
        },
    },
}));

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
        <Grid container sx={{mt:{ lg:3, md:3, xs:1 }, p:3}} justifyContent="center" spacing={2} ref={ref}>
            <Grid item lg={12} md={12} sm={12} xs={11}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Internships
                </SectionTitle>
            </Grid>
            <Grid item lg={7} md={10} sm={11} xs={12}>
                <SectionDescription className={inView ? 'slideIn1400ms' : 'hidden'}>
                    UH Esports prides itself on offering students unique opportunities to engage with industry. Throughout its history, the program has looked at partnering with global industries, such as the Overwatch League Gen. G, and local partners, such as Vanta Esports. All internships are offered as 3-credit courses through the College of Social Sciences (SOCs).
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
            <Box sx={{mt:1, width:{ lg:'70%', md:'75%', sm:'65%', xs:'88%'}}}>
                <Slider {...textCarouselSettings}>
                    {
                        descriptions.map((text) => {
                            return(
                                <SectionDescription sx={{maxWidth: '725px'}}>
                                    {text[0]}
                                </SectionDescription>
                            );
                        })
                    }
                </Slider>
            </Box>
        </Grid>
    );
}

function InternshipGraphicRight({title, descriptions, videoURL, backgroundURL}){
    return(
        <Grid container sx={{mt:{ lg:6, md:4, sm:4, xs:4}, mb:6}}>
            <InternshipDescription title={title} descriptions={descriptions} backgroundURL={backgroundURL} />
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Box sx={{top: {lg: 25, md: 25, sm: 0}, left: {lg: -30, md: -10, sm: 0}, position: 'relative'}}>
                    <VideoComponent src={videoURL}
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" loading="lazy" allowFullScreen />
                </Box>
            </Grid>
        </Grid>
    );
}

function InternshipGraphicLeft({title, descriptions, videoURL, backgroundURL}) {
    return (
        <Grid container sx={{mt: {lg: 6, md: 4, sm: 4, xs: 4}}}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Box sx={{top: {lg: 25, md: 25, sm: 0}, right: {lg: -30, md: -10, sm: 0}, position: 'relative'}}>
                    <VideoComponent src={videoURL}
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" loading="lazy" allowFullScreen />
                </Box>
            </Grid>
            <InternshipDescription title={title} descriptions={descriptions} backgroundURL={backgroundURL}/>
        </Grid>
    );
}

function Courses() {
    const {ref, inView} = useInView({
        triggerOnce: true,
        rootMargin: '-150px',
    });
    return (
        // TODO remove the mb spacing. Only added to showcase footer spacing
        <Grid sx={{backgroundColor: "#f6f6f6", pt: 1, pb: 5}} spacing={4} container justifyContent="center" alignItems="center" ref={ref}>
            <Grid item lg={5} md={5} sm={11} xs={11}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>Courses</SectionTitle>
                <Grid container justifyContent="center" sx={{mt:2}}>
                    <SectionDescription className={inView ? 'slideIn1500ms' : 'hidden'}>
                        UH's Esports & Society (COM) course is one of the longest-offered esports courses in North America for esports. The class provides a critical overview of esports infrastructures, the influence South Korea, gender in esports, the emergence of esports in higher education, media, and mobile esports cultures.
                        <br/>
                    </SectionDescription>
                    <Button className={inView ? 'slideIn1500ms' : 'hidden'} sx={{mt:{lg:5, md:3, sm:4, xs:2}, fontWeight:"bold"}} size="large" variant="contained" color="uhegreen" href="https://www.sis.hawaii.edu/uhdad/avail.classes?i=MAN" target="_blank">Learn More</Button>
                </Grid>
            </Grid>
            <Grid item lg={4} md={5} sm={10} xs={11}>
                <img
                    style={{borderRadius:'10px'}}
                    alt="UHE Courses"
                    width="80%"
                    className={inView ? 'slideIn1000ms' : 'hidden'}
                    src={courses_graphic}
                />
            </Grid>
        </Grid>
    );
}

function Education() {
    const gengDescription = [
        ["During the summer months, students travel to work, live, and play in one of the most dynamic locations for esports in the world: Seoul, South Korea. For 3 weeks, students work at Gen G., one of South Korea's best esports organizations, with company mentors on projects that have a meaningful impact on the company's mission and operations"]
    ];

    const overwatchLeagueDescription = [
        ["In 2021 and 2022, UH Esports partnered with Activision Blizzard during the COVID-19 pandemic to put their championship season. 40 students took part over the two years in helping run the league by shadowing the OWL crew and staff. At the end of the experience, students learned valuable insights as to how operations are carried out, as well as forming lasting relationships with mentors from the league. "]
    ];

    const vantaDescription = [
        ["During the summer, students learn about how Hawaii's scholastic esports (at the middle and high school levels) operate. Just like the Gen. G internship, individuals are slotted into teams depending on their interests (PR, Communications, Operations, or Coding), and are assigned to key projects that tackle one or more problems that Vanta Esports is seeking to address. The goal is for students to have a greater understanding of local esports on the islands. "]
    ];

    return (
        <>
            <OpeningPageImage header="Education" imageURL={education_opening_image}/>
            <Courses />
            {/* TODO section for special cert SKY*/}
            <InternshipHeader />
            <InternshipGraphicRight title="GEN G" videoURL="https://www.youtube.com/embed/MbDj0NiphBA?si=qjDZTgcK0vq4ByX_" descriptions={gengDescription} backgroundURL={geng_background} />
            <Box sx={{display: {lg: 'block', md: 'block', sm:'none', xs:'none' }}}><InternshipGraphicLeft title="OVERWATCH LEAGUE" videoURL="https://www.youtube.com/embed/2l6aOirhdQI?si=ktCsURa31nleY2tU?controls=2" descriptions={overwatchLeagueDescription} backgroundURL={overwatch_background} /></Box>
            <Box sx={{display: {lg: 'none', md: 'none', sm:'block', xs:'block' }}}><InternshipGraphicRight title="OVERWATCH LEAGUE" videoURL="https://www.youtube.com/embed/2l6aOirhdQI?si=ktCsURa31nleY2tU?controls=2" descriptions={overwatchLeagueDescription} backgroundURL={overwatch_background} /> </Box>
            <InternshipGraphicRight title="VANTA" descriptions={vantaDescription} videoURL="https://www.youtube.com/embed/QD2-khpxGHg?si=y4Xdze76xnxhYWu2" backgroundURL={vanta_background} />

        </>
    );
}

export default Education;
import * as React from 'react';
import './Education.css';
import {useInView} from "react-intersection-observer";
import OpeningPageImage from "../components/OpeningPageImage";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import education_1 from "../images/education_intro_image_1.png";
import gen_g_background from '../images/gen_g_grey_background.png';
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import {styled} from "@mui/material";
import geng_1 from "../images/geng_1.png";
import geng_2 from "../images/geng_2.png";
import geng_3 from "../images/geng_3.png";

const CarouselImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    backgroundPosition:"center",
    height: "450px",
    // borderRadius:'10px',
    // margin: '20px 0 20px 20px',
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

const images = [
    geng_1,
    geng_2,
    geng_3,
];

const gengText = [
    ["Learn from the Pros", "Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet. Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad."],
    ["Experience Korean Culture", "Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet. Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad."]
];

function Internships() {
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
            <Grid  item md={7} sm={10} sx={{p:2, mb:{ lg:6, md:4, sm:4, xs:4},}}>
                <SectionDescription className={inView ? 'slideIn1400ms' : 'hidden'}>
                    Talk about the team’s history here.
                    Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
                    Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad quis magna culpa anim
                </SectionDescription>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12} sx={{pt:{sm:2, xs:2}, pb:{sm:4, xs:4}, mb:{ sm:3 }, backgroundImage:`url('${gen_g_background}')`, backgroundSize:'cover', backgroundPosition:'center', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Box sx={{ width:{ lg:'70%', md:'85%', sm:'70%', xs:'80%'}}}>
                    <SectionTitle>
                        GEN G
                    </SectionTitle>
                    <Slider {...textCarouselSettings}>
                        {
                            gengText.map((text) => {
                                return(
                                    <>
                                        <SectionDescription sx={{p:2, textAlign:'center'}}>
                                            <Box sx={{fontWeight:'bold'}}>{text[0]}</Box>{text[1]}
                                        </SectionDescription>
                                    </>
                                );
                            })
                        }
                    </Slider>
                </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
                <Box sx={{top:{lg:25, md:30, sm:0}, left:{lg:-30, md:-10, sm:0}, position:'relative',}}>
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

function Education() {
    return (
        <>
            <OpeningPageImage header="Education" imageURL={education_1}/>
            {/*TODO instead of position absolute use grids and push the element out??*/}
            <Internships />
        </>

    );
}

export default Education;
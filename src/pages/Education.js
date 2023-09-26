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
import { positions } from '@mui/system';

const InternshipBox = styled('div')(({ theme, imageURL }) => ({
    backgroundImage: `url('${imageURL}')`,
    backgroundSize: "cover",
    width:'1130px',
    height: "579px",
    position:'relative',
    [theme.breakpoints.down('lg')]: {
        width:'500px',
        height: "475px",
        // [theme.breakpoints.down('sm')]: {
        //     height: "300px"
        // },
    },
}));

// used as div instead of a class for responsiveness options
const InternshipCarouselPosition = styled('div')(({ theme, imageURL }) => ({
    position: 'absolute',
    top: '25px',
    left: '800px',
    width: '1050px',
    [theme.breakpoints.down('lg')]: {
        top: '35px',
        left: '475px',
        width:'460px',
        height: "505px",
},
}));

const CarouselImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    backgroundPosition:"center",
    height: "500px",
    // borderRadius:'10px',
    // margin: '20px 0 20px 20px',
    [theme.breakpoints.down('lg')]: {
        height: "400px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
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
    "Learn from the Pros: Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet. Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad quis magna culpa anim dolor do aliqua duis nulla ad.",
    "Experience Korean Culture: Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet. Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad quis magna culpa anim dolor do aliqua duis nulla ad."
];

function Internships() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <Grid container sx={{mt:{ lg:6, md:2, sm:1 }}} justifyContent="center" ref={ref}>
            <Grid item md={12}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Internships
                </SectionTitle>
            </Grid>
            <Grid  item md={7} sx={{p:2, mb:{ lg:6, md:2, sm:1 },}}>
                <SectionDescription className={inView ? 'slideIn1400ms' : 'hidden'}>
                    Talk about the team’s history here.
                    Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
                    Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad quis magna culpa anim
                </SectionDescription>
            </Grid>
            <Grid item lg={7} md={7} sx={{ backgroundImage:`url('${gen_g_background}')`, backgroundSize:'cover', backgroundPosition:'center', display:'flex', alignItems:'center', justifyContent:'center' }}>
                {/*<Grid sx={{}}>*/}
                <Box sx={{ width:{ lg:'70%', md:'85%'}}}>
                    <SectionTitle>
                        GEN G
                    </SectionTitle>
                    <Slider {...textCarouselSettings}>
                        {
                            gengText.map((text) => {
                                return(
                                    <>
                                        <SectionDescription sx={{p:2, textAlign:'center'}}>
                                            {text}
                                        </SectionDescription>
                                    </>
                                );
                            })
                        }
                    </Slider>
                </Box>

                {/*</Grid>*/}
            </Grid>
            <Grid item lg={5} md={5} >
                <Box sx={{top:35, left:{lg:-30, md:-15}, position:'relative',}}>
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

function InternshipPageWithAbsolute() {
    return(
        <>
        <Grid item md={12} sx={{mt:{ lg:6, md:2, sm:1 }}}>
            <InternshipBox imageURL={gen_g_background} sx={{display:'flex', alignItems:'center'}}>
                <Grid container>
                    <Grid item lg={8} md={10} sx={{p:3, ml:2}}>
                        <SectionTitle>
                            GEN G
                        </SectionTitle>
                        <Slider {...textCarouselSettings}>
                            {
                                gengText.map((text) => {
                                    return(
                                        <>
                                            <SectionDescription sx={{p:2, textAlign:'center'}}>
                                                {text}
                                            </SectionDescription>
                                        </>
                                    );
                                })
                            }
                        </Slider>
                    </Grid>
                </Grid>
                <InternshipCarouselPosition>
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
                </InternshipCarouselPosition>
            </InternshipBox>
        </Grid>
        </>
    );
}

function Education() {
    return (
        <>
            <OpeningPageImage header="Education" imageURL={education_1}/>
            {/*TODO instead of position absolute use grids and push the element out??*/}
            <Internships />
            <p>Education</p>
        </>

    );
}

export default Education;
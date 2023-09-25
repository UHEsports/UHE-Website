import * as React from 'react';
import './Education.css';
import {useInView} from "react-intersection-observer";
import OpeningPageImage from "../components/OpeningPageImage";
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import education_1 from "../images/education_intro_image_1.png";
import education_2 from "../images/education_intro_image_2.png";
import education_3 from "../images/education_intro_image_3.png";
import group_4 from "../images/group_4.png";
import gen_g_background from '../images/gen_g_grey_background.png';
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import {styled} from "@mui/material";
import group_1 from "../images/group_1.jpg";
import group_2 from "../images/group_2.jpg";
import group_3 from "../images/group_3.jpg";

const InternshipBox = styled('div')(({ theme, imageURL }) => ({
    backgroundImage: `url('${imageURL}')`,
    backgroundSize: "cover",
    width:'1130px',
    height: "579px",
    display: "flex",
    justifyContent: 'center',
    // alignItems: "center",
    alignContent: 'flex-start',
    position:'relative',
    // [theme.breakpoints.down('lg')]: {
    //     height: "600px",
    //     [theme.breakpoints.down('sm')]: {
    //         height: "300px"
    //     },
    // },
}));

const IntershipCarouselPosition = styled('div')(({ theme, imageURL }) => ({
    position: 'absolute',
    top: '25px',
    left: '800px',
    width: '1050px'
}));

const CarouselImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "600px",
    borderRadius:'10px',
    margin: '20px 0 20px 20px',
    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
}));

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows:false,
};

const images = [
    group_1,
    group_2,
    group_3,
    group_1,
    group_2,
    group_3
];

function Internships() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <Grid container sx={{mt:{ lg:5, md:2, sm:1 }}} justifyContent="center" ref={ref}>
            <Grid item md={12}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Internships
                </SectionTitle>
            </Grid>
            <Grid item md={7} sx={{p:2}}>
                <SectionDescription className={inView ? 'slideIn1400ms' : 'hidden'}>
                    Talk about the team’s history here.
                    Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
                    Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad quis magna culpa anim
                </SectionDescription>
            </Grid>
            <Grid item md={12} sx={{mt:{ lg:4, md:2, sm:1 }}}>
                <InternshipBox imageURL={gen_g_background}>
                    <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                        GEN G
                    </SectionTitle>
                    <IntershipCarouselPosition>
                        <Slider {...settings}>
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
                    </IntershipCarouselPosition>
                </InternshipBox>
            </Grid>
        </Grid>
    );
}

function Education() {
    return (
        <>
            <OpeningPageImage header="Education" subtitle="Subtitle text" imageURL={education_1}/>
            <Internships />
            <p>Education</p>
        </>

    );
}

export default Education;
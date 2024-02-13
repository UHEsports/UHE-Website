import * as React from 'react';
import Grid from "@mui/material/Grid";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import Slider from "react-slick";
import {useInView} from "react-intersection-observer";
import woUHELogo from "../assets/images/wouhe_Logo.png";
import {styled} from "@mui/material/styles";
import group_1 from "../assets/images/group_1.jpg";

const WoUHEOpeningImage = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "700px",
    borderRadius:'10px',
    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
}));
function AboutWoUHE() {
    return (
        <Grid container sx={{ mt:{ lg:'152px', md:4, sm:4, xs:4 }}} justifyContent="center">
            <Grid item md={12} sm={12}>
                <img
                    alt="Women of UHE Logo"
                    width="115"
                    src={woUHELogo}
                />
            </Grid>
            <Grid item md={12} sm={12} sx={{ mt:{ lg:1 }}}>
                <SectionTitle>
                    Women of UHE
                </SectionTitle>
            </Grid>
            <Grid item md={7} sm={10} sx={{ mt:{ lg:1 }, p:2,}}>
                <SectionDescription sx={{textAlign:'center'}}>
                    Talk about the team’s history here.
                    Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
                </SectionDescription>
            </Grid>
            <Grid item md={8} sx={{ mt:{ lg:5 }}}>
                <WoUHEOpeningImage style={{backgroundImage:`url("${group_1}"`}}></WoUHEOpeningImage>
            </Grid>
        </Grid>
    );
}
function WoUHE() {
    return (
        <>
            <AboutWoUHE />
        </>
    );
}

export default WoUHE;
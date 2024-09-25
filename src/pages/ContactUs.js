import * as React from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import OpeningPageImage from "../components/OpeningPageImage";
import group_3 from "../assets/images/group_3.jpg";
import headerImage from "../assets/images/group_4.png";
import {
    Divider,
    Box,
    styled,
    Button,
    Grid,
} from "@mui/material";
import ReactGA from "react-ga4";
import LeadershipSection from "../components/LeadershipSection";

ReactGA.send({ hitType: "pageview", page: '/contact-us', title: "ContactUs" }); // Page information for Google Analytics

function InternshipHeader() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  return (
    <Grid
      container
      sx={{ p:3, pb:5, backgroundColor: "#f5f5f5" }}
      justifyContent="center"
      spacing={2}
      ref={ref}
    >
      <Grid item lg={12} md={12} sm={12} xs={11}>
        <SectionTitle className={inView ? "slideIn1300ms" : "hidden"}>
          Giving
        </SectionTitle>
      </Grid>
      <Grid item lg={7} md={10} sm={11} xs={12}>
        <SectionDescription className={inView ? "slideIn1400ms" : "hidden"}>
          Talk about the team’s history here. Duis in nulla ullamco cillum
          aliqua et incididunt in culpa tempor cupidatat irure consectetur est
          aliquip dolor, amet. Aute, adipisicing amet quis sit voluptate
          reprehenderit elit occaecat ad quis magna culpa anim
        </SectionDescription>
      </Grid>
    </Grid>
  );
}

const ImageTest = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "650px",
    width: "625px",
    [theme.breakpoints.down('1650')]: {
        height: "650px",
        width: "575px",
        [theme.breakpoints.down('1500')]: {
            height: "650px",
            width: "525px",
            [theme.breakpoints.down('1350')]: {
                height: "650px",
                width: "500px",
                [theme.breakpoints.down('lg')]: {
                    height: "425px",
                    [theme.breakpoints.down('md')]: {
                        height: "375px",
                        [theme.breakpoints.down('sm')]: {
                            height: "250px",
                            width: "435px",
                        },
                    },
                },
            },
        },

    },
}));

function DonationComponent() {
    // TODO the heights=52% and 48% are to give more spacing to our grid columns, this todo signifies further documentation and comments to describe the code structure.
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "-150px",
    });
    return (
        <Grid container sx={{mt:{ lg:8, md:4, sm:4, xs:4} }} ref={ref}>
            <Grid item lg={5} sx={{position:'relative', display: {lg: 'flex', md: 'none', sm:'none', xs:'none' }}} justifyContent='flex-end' container>
                <Box sx={{position: 'absolute', bottom:0, left:0, width: '100%', height: '52%', backgroundColor: "#f5f5f5"}}></Box>
                <ImageTest sx={{bottom:{lg:25, md:25, sm:0}, position:'relative'}} style={{backgroundImage: `url(${group_3})`}} className={inView ? "slideIn1300ms" : "hidden"} />
            </Grid>
            <Grid item lg={7} md={12} sm={12} xs={12} className={inView ? "slideIn1300ms" : "hidden"}>
                <Grid item container sx={{height:{lg:'48%'}, mt:{lg:0, md:3} }} justifyContent='center'>
                    {/*the justfiy center is fine to leave as it does not come into use until we reach screen sm*/}
                    <Grid item md={4} sm={8} xs={11} sx={{display: {lg: 'none', md: 'flex', sm:'flex', xs:'flex' }}} justifyContent='center'>
                        <ImageTest style={{backgroundImage: `url(${group_3})`, borderRadius:'10px'}} className={inView ? "slideIn1300ms" : "hidden"} />
                    </Grid>
                    <Grid item lg={11} md={6} sm={11} xs={12} sx={{p:{lg:0, md:3, sm:3, xs:3} , pb:{lg:0, md:3, sm:5}, ml:{lg:0, md:1}}}>
                        <Box sx={{height:'100%', flexDirection: 'column', display: 'flex', justifyContent:'center',alignItems:'flex-start'}}>
                            <SectionTitle sx={{textAlign:'left'}}>How to support</SectionTitle>
                            <SectionDescription sx={{mt:2}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </SectionDescription>
                        </Box>

                    </Grid>
                </Grid>

                <Grid item container justifyContent='center' sx={{p:3, pl:{lg:0, md:10}, mt:{lg:0, md:5}, pb:{lg:3, md:5, sm:5, xs:5}, height:{lg:'52%'}, backgroundColor: "#f5f5f5",}}>
                    <Grid item lg={11} md={11} sm={11} xs={12} className={inView ? "slideIn1700ms" : "hidden"}>
                        <SectionTitle sx={{textAlign:'left'}}>UH Foundation</SectionTitle>
                        <SectionDescription sx={{mt:2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </SectionDescription>
                        <Button sx={{mt:{lg:2, md:3, sm:3, xs:3}, fontWeight:"bold", float:'left'}} size="large" variant="contained" color="uhegreen" href="https://giving.uhfoundation.org/funds/12938304" target="_blank">Please Donate</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}

function Leadership() {
    // TODO temporary will convert into a dictionary or array that contains each member of leadership and we loop through it
    const test = '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        '                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
        '                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });
  return (
    <Grid container sx={{mt: { lg: 3, md: 4, sm: 4, xs: 4 }, pb:5}} ref={ref}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <SectionTitle sx={{ml:3}} style={{textAlign: 'center'}} className={inView ? "slideIn1300ms" : "hidden"}>
                Leadership
            </SectionTitle>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{my:2}} container justifyContent='center'>
            <Grid lg={11} md={11} sm={11} xs={11}>
                <Divider sx={{ borderBottomWidth: 5 }} />
            </Grid>
        </Grid>
        <LeadershipSection name="Sky" role="ILab Coordinator" description={test} email="madeline@gmail.com" />
        <LeadershipSection name="Kevin" role="ILab Coordinator" description={test} email="madeline@gmail.com" />
        <LeadershipSection name="Madeline Gilbert" role="ILab Coordinator" description={test} email="madeline@gmail.com" />
        <LeadershipSection name="Alex Gilbert" role="ILab Coordinator" description={test} email="madeline@gmail.com" />
        <LeadershipSection name="Camielle Gilbert" role="ILab Coordinator" description={test} email="madeline@gmail.com" />
        <LeadershipSection name="Gunn Gilbert" role="ILab Coordinator" description={test} email="madeline@gmail.com" />

    </Grid>
  );
}

function ContactUs() {
    return (
        <>
            <OpeningPageImage header="Contact Us" imageURL={headerImage} />
            <InternshipHeader />
            <DonationComponent />
            <Leadership/>
        </>
    );
}

export default ContactUs;

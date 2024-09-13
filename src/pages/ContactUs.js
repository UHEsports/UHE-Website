import * as React from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import OpeningPageImage from "../components/OpeningPageImage";
import group_3 from "../assets/images/group_3.jpg";
import headerImage from "../assets/images/group_4.png";
import {
    Divider,
    Typography,
    Paper,
    Box,
    Avatar,
    styled,
    Button,
    Grid,
} from "@mui/material";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: '/contact-us', title: "ContactUs" }); // Page information for Google Analytics

function InternshipHeader() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  return (
    <Grid
      container
      sx={{ pt:3, pb:5, bgcolor: "#f5f5f5", }}
      justifyContent="center"
      spacing={2}
      ref={ref}
    >
      <Grid item lg={12} sm={12}>
        <SectionTitle className={inView ? "slideIn1300ms" : "hidden"}>
          Giving
        </SectionTitle>
      </Grid>
      <Grid item lg={7} sm={10} sx={{ p: 2 }}>
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
    height: "600px",
    width: "700px",
    position: 'absolute',
    left:'15px',
    top:'1290px',
        [theme.breakpoints.down('lg')]: {
        height: "300px",
        [theme.breakpoints.down('md')]: {
            height: "250px",
        },
    },
}));
function DonationComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });
  return (
      <Grid container sx={{mt:{ lg:5, md:4, sm:4, xs:4}}} ref={ref}>
        <Grid item lg={5} />
        <Grid
          item
          lg={7}
          className={inView ? "slideIn1300ms" : "hidden"}
        >
            <Grid container spacing={2} sx={{pb:5}}>
                <Grid item lg={12}>
                    <SectionTitle sx={{textAlign:'left'}}>How to support</SectionTitle>
                </Grid>
                <Grid item lg={10}>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </SectionDescription>
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={5} sx={{bgcolor: "#f5f5f5"}}>
            <ImageTest style={{backgroundImage: `url(${group_3})`}} className={inView ? "slideIn1300ms" : "hidden"} />
        </Grid>
        <Grid item lg={7} sx={{bgcolor: "#f5f5f5", pt:3}}>
            <Grid container spacing={2} sx={{pb:5}} className={inView ? "slideIn1700ms" : "hidden"}>
                <Grid item lg={12}>
                    <SectionTitle sx={{textAlign:'left'}}>UH Foundation</SectionTitle>
                </Grid>
                <Grid item lg={10}>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </SectionDescription>
                    <Button sx={{mt:3, fontWeight:"bold", float:'left'}} size="large" variant="contained" color="uhegreen" href="https://giving.uhfoundation.org/funds/12938304" target="_blank">Please Donate</Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
}

function KeepInTouch() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });

  const buttonStyles = {
    backgroundColor: "#4caf50",
    color: "#fff",
    marginBottom: "16px",
    width: "100%",
    display: "block",
    textTransform: "none",
    fontSize: "24px",
    "&:hover": {
      backgroundColor: "#026440",
      opacity: 1,
    },
  };
  const videoPlayerHeight = 240; // Defined for consistent use
  return (
    <Box
      sx={{
        mt: { lg: 6, md: 4, sm: 4, xs: 4 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
      ref={ref}
      className={inView ? "slideIn1300ms" : "hidden"}
    >
      <Box sx={{ width: "60%", p: 2 }} ref={ref}>
        <SectionTitle className={inView ? "slideIn1300ms" : "hidden"}>
          KEEP IN TOUCH!
        </SectionTitle>
        <SectionDescription sx={{ padding: "8px" }}>
          See the work made by UH Esports Content Teams and the various
          opportunities, tryouts, community nights, and more available to
          students
        </SectionDescription>
        <Paper
          elevation={4}
          sx={{
            height: 240,
            mb: 1,
            backgroundColor: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            UH Esports Twitch Stream
          </Typography>
          {/* <iframe
            src="https://player.twitch.tv/?channel=uh_esports&parent=yourwebsite.com" // Replace 'yourwebsite.com' with your actual domain
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}
          ></iframe> */}
          <div id="twitch-embed"></div>
        </Paper>
      </Box>
      <Box
        sx={{
          width: "30%",
          ml: 2,
          height: `calc(${videoPlayerHeight}px - 40px)`,
        }}
      >
        {" "}
        {/* Customizable Buttons */}
        <Button sx={buttonStyles}>@uhesports #1</Button>
        <Button sx={buttonStyles}>@uhesports #2</Button>
        <Button sx={buttonStyles}>@uhesports #3</Button>
        <Button sx={buttonStyles}>@uhesports #4</Button>
        <Button sx={buttonStyles}>@uhesports #5</Button>
      </Box>
    </Box>
  );
}

const leaders = [
  {
    name: "FIRST LAST",
    title: "INSERT TITLE HERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    email: "exampleemail@gmail.com",
  },
  {
    name: "FIRST LAST",
    title: "INSERT TITLE HERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    email: "exampleemail@gmail.com",
  },
  {
    name: "FIRST LAST",
    title: "INSERT TITLE HERE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    email: "exampleemail@gmail.com",
  },
];

const LeadershipImage = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "450px",
    width: "400px",
    // position: 'absolute',
    // left:'15px',
    // top:'1300px',
    [theme.breakpoints.down('lg')]: {
        height: "300px",
        [theme.breakpoints.down('md')]: {
            height: "250px",
        },
    },
}));
function LeadershipSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });
  return (
    <Grid
        container
        spacing={2}
        sx={{
            pl: 3,
            mt: { lg: 3, md: 4, sm: 4, xs: 4 },
        }}
        ref={ref}
    >
        <Grid item lg={12}>
            <SectionTitle sx={{ml:3}} style={{textAlign: 'left'}} className={inView ? "slideIn1300ms" : "hidden"}>
                Leadership
            </SectionTitle>
        </Grid>
        <Grid lg={12} sx={{my:2}} container justifyContent='center'>
            <Grid lg={11}>
                <Divider sx={{ borderBottomWidth: 5 }} />
            </Grid>
        </Grid>
        <Grid item lg={12} container>
            <Grid item lg={3}>
                <LeadershipImage sx={{ml:4}} style={{backgroundImage: `url(${group_3})`}} />
            </Grid>
            {/*<Grid lg={0}></Grid>*/}
            <Divider orientation="vertical" variant="middle" sx={{ borderRightWidth: 5 }} flexItem />
            <Grid item lg={8} sx={{pl:2}}>
                <SectionTitle style={{textAlign: 'left'}} className={inView ? "slideIn1300ms" : "hidden"}>
                    Madeline Gilbert
                </SectionTitle>
                <SectionTitle style={{textAlign: 'left'}} className={inView ? "slideIn1300ms" : "hidden"}>
                    Leadership Role
                </SectionTitle>
                <SectionDescription style={{textAlign: 'left'}} className={inView ? "slideIn1300ms" : "hidden"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br />
                    <br />
                        madeline@gmail.com
                </SectionDescription>
            </Grid>
            {/*{leaders.map((leader, index) => (*/}
            {/*    <Paper*/}
            {/*        key={index}*/}
            {/*        elevation={3}*/}
            {/*        sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5" }}*/}
            {/*        className={inView ? "slideIn1300ms" : "hidden"}*/}
            {/*    >*/}
            {/*        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>*/}
            {/*            <Avatar*/}
            {/*                sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}*/}
            {/*            >*/}
            {/*                {leader.name[0]}*/}
            {/*            </Avatar>*/}
            {/*            <Box>*/}
            {/*                <Typography variant="h6" sx={{ color: "#333" }}>*/}
            {/*                    {leader.name}*/}
            {/*                </Typography>*/}
            {/*                <Typography variant="subtitle1" sx={{ color: "#555" }}>*/}
            {/*                    {leader.title}*/}
            {/*                </Typography>*/}
            {/*            </Box>*/}
            {/*        </Box>*/}
            {/*        <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>*/}
            {/*            {leader.description}*/}
            {/*        </Typography>*/}
            {/*        <Typography variant="body2" sx={{ color: "#888" }}>*/}
            {/*            {leader.email}*/}
            {/*        </Typography>*/}
            {/*    </Paper>*/}
            {/*))}*/}
        </Grid>
    </Grid>
  );
}

function ContactUs() {
  return (
    <>
      <OpeningPageImage header="Contact Us" imageURL={headerImage} />
      <InternshipHeader />
      <DonationComponent />
      {/*<KeepInTouch />*/}
      <LeadershipSection />
    </>
  );
}

export default ContactUs;

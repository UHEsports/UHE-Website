import * as React from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import OpeningPageImage from "../components/OpeningPageImage";
import group_3 from "../assets/images/group_3.jpg";
import headerImage from "../assets/images/group_4.png";
import {
  Typography,
  Paper,
  Box,
  Avatar,
  styled,
  Button,
  Grid,
} from "@mui/material";

function InternshipHeader() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });
  return (
    <Grid
      container
      sx={{ mt: { lg: 6, md: 4, sm: 4, xs: 4 } }}
      justifyContent="center"
      ref={ref}
    >
      <Grid item md={12} sm={12}>
        <SectionTitle className={inView ? "slideIn1300ms" : "hidden"}>
          GIVING
        </SectionTitle>
      </Grid>
      <Grid item md={7} sm={10} sx={{ p: 2 }}>
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

function DonationComponent() {
  const DonateButton = styled(Button)({
    minWidth: "100px",
    height: "40px",
    margin: "5px",
    fontSize: "16px",
    fontWeight: "bold",
  });
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });
  return (
    <Box
      sx={{
        p: 3,
        mt: { lg: 6, md: 4, sm: 4, xs: 4 },
        bgcolor: "#f5f5f5",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={ref}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            src={group_3}
            alt="Esports"
            style={{ width: "70%", height: "auto", borderRadius: "4px" }}
            className={inView ? "slideIn1300ms" : "hidden"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "auto",
            overflow: "hidden",
          }}
          className={inView ? "slideIn1300ms" : "hidden"}
        >
          <SectionTitle>INSERT TITLE:</SectionTitle>
          <SectionDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionDescription>
          <br />
          <SectionDescription>
            Short paragraph that will appear with each image to describe where
            the donations will go and how they will benefit the students in the
            Esports programs.
          </SectionDescription>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: "bold", color: "#004D40" }}
          >
            DONATE:
          </Typography>
          <Box>
            <DonateButton variant="contained" color="primary">
              $5
            </DonateButton>
            <DonateButton variant="contained" color="primary">
              $10
            </DonateButton>
            <DonateButton variant="contained" color="primary">
              $15
            </DonateButton>
            <DonateButton variant="contained" color="primary">
              $20
            </DonateButton>
            <DonateButton variant="contained" color="secondary">
              CUSTOM
            </DonateButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
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

function LeadershipSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "#f5f5f5",
        mt: { lg: 6, md: 4, sm: 4, xs: 4 },
      }}
      ref={ref}
    >
      <SectionTitle className={inView ? "slideIn1300ms" : "hidden"}>
        LEADERSHIP
      </SectionTitle>
      {leaders.map((leader, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{ p: 2, mb: 2, backgroundColor: "#f5f5f5" }}
          className={inView ? "slideIn1300ms" : "hidden"}
        >
          <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
            <Avatar
              sx={{ bgcolor: "secondary.main", width: 56, height: 56, mr: 2 }}
            >
              {leader.name[0]}
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ color: "#333" }}>
                {leader.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#555" }}>
                {leader.title}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ color: "#666", mb: 1 }}>
            {leader.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "#888" }}>
            {leader.email}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

function ContactUs() {
  return (
    <>
      <OpeningPageImage header="Contact" imageURL={headerImage} />
      <InternshipHeader />
      <DonationComponent />
      <KeepInTouch />
      <LeadershipSection />
    </>
  );
}

export default ContactUs;

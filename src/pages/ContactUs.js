import * as React from "react";
import { Grid, Box, styled } from "@mui/material";
import { useInView } from "react-intersection-observer";

import OpeningPageImage from "../components/OpeningPageImage";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import group_1 from "../images/group_1.jpg";
import group_2 from "../images/group_2.jpg";
import group_3 from "../images/group_3.jpg";
import group_4 from "../images/group_4.png";
import { borderRight, fontSize } from "@mui/system";

const UHEInfoImages = styled("div")(({ theme }) => ({
  backgroundSize: "cover",
  borderRadius: "10px",
  height: "25rem",
  width: "25rem",
}));

const TextContainer = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2), // Adjust as per requirement
  paddingRight: theme.spacing(2), // Adjust as per requirement
  textAlign: "left",
}));

function GivingSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-170px 0px",
  });
  return (
    <Grid
      sx={{ mt: { lg: 3, md: 3, xs: 1 }, p: 3 }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      container
      direction="column"
      ref={ref}
    >
      <Grid item lg={4} md={4}>
        <SectionTitle>GIVING</SectionTitle>
        <SectionDescription sx={{ m: "3rem" }}>
          Tempora aut est maiores error laudantium ut architecto impedit. Sit
          sit eius culpa sit. Non quia velit occaecati commodi. Sed eos
          distinctio magni maxime commodi maxime. Saepe quibusdam et quia
          ratione earum expedita.
        </SectionDescription>
      </Grid>
      {/* <Grid item md={6} xs={12} container alignItems="center">
        <Grid item md={6} xs={12}>
          <UHEInfoImages
            style={{ backgroundImage: `url(${group_3})` }}
            className={inView ? "slideIn1000ms" : "hidden"}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextContainer>
            <SectionTitle className={inView ? "slideIn1300ms" : "hidden"}>
              INSERT TITLE:
            </SectionTitle>
            <SectionDescription className={inView ? "slideIn1300ms" : "hidden"}>
              Short paragraph that will appear with each image to describe where
              the donations will go and how they will benefit the students in
              the Esports programs.
            </SectionDescription>
            <SectionTitle
              className={inView ? "slideIn1300ms" : "hidden"}
              sx={{ mt: "5rem", fontSize: "2.5rem" }}
            >
              DONATE:
            </SectionTitle>
          </TextContainer>
        </Grid>
      </Grid> */}
    </Grid>
  );
}

function ContactUs() {
  return (
    <>
      <OpeningPageImage header="CONTACT" subtitle="" imageURL={group_4} />
      <GivingSection />
    </>
  );
}

export default ContactUs;

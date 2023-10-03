/*import * as React from 'react';
import logo from "../logo.svg";
import Button from "@mui/material/Button";
import { useInView } from 'react-intersection-observer';*/
//importing everything 
import * as React from 'react';
import Grid from '@mui/material/Grid';
import './Ilab.css';
import { styled } from '@mui/material/styles';
import group_1 from '../images/group_1.jpg';
import group_2 from '../images/group_2.jpg';
import group_3 from '../images/group_3.jpg';
import group_4 from '../images/group_4.png';
import discord_server from '../images/discord_server.png';
import Slider from "react-slick";
import uheLogo from "../images/uhe_logo.png";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import { useInView } from 'react-intersection-observer';
import {Link as RouterLink} from "react-router-dom";
import OpeningPageImage from '../components/OpeningPageImage';
import { Block, ChildCare } from '@mui/icons-material';

const LocationMainText = styled('images')(({ theme }) => ({
    backgroundSize: "cover",
    height: "250px",
    [theme.breakpoints.down('lg')]: {
        height: "200px",
        [theme.breakpoints.down('md')]: {
            height: "150px",
        },
    },
}));

const LocationSideImages = styled('images')(({ theme }) => ({
    
}));

function Location({}){
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-170px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:1, md:1, xs:1 }}} container spacing={4} justifyContent="center" backgroundColor={"#cfcece"}>
            <Grid item md={12} xs={12} ref={ref}>
                <IlabTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Location
                </IlabTitle>
            </Grid>
            {/*problem with scrollable starting off the screen*/}
            <Grid className="horizontal-scrollable" item lg={12} md={12} xs={12} ref={ref}> 
                    <LocationSideImages style={{backgroundImage:`url("${group_1}"`}} />
            </Grid>
        </Grid>
    );
}

const IlabTitle = styled('div')(({ theme }) => ({
    fontWeight: "bold",
    wordSpacing: '-3px',
    letterSpacing: "-1px",
    fontSize: "3.25rem",
    textAlign: "left",
    marginBottom: "-2.0rem",
    marginLeft: "1.5rem",
    [theme.breakpoints.down('lg')]: {
        fontSize: "2.5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.25rem",
        },
    },
}));

const AvailableEquipmentImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "250px",
    width: "250px",
    [theme.breakpoints.down('lg')]: {
        height: "200px",
        width: "200px",
        [theme.breakpoints.down('md')]: {
            height: "150px",
            width: "150px",
        },
    },
}));

const AvailableEquipmentText = styled('div')(({ theme }) => ({
    textAlign: 'left',
    fontSize:"1.2rem",
    overflow: "Hidden",
    [theme.breakpoints.down('lg')]: {
        fontSize: "1.0rem",
    },
}));

const AvailableEquipmentBlock = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    borderRadius:'10px',
    marginRight: "10px",
    [theme.breakpoints.down('lg')]: {
        height: "300px",
        width: "270px",
        [theme.breakpoints.down('md')]: {
            height: "300px",
            width: "220px",
            [theme.breakpoints.down('sm')]: {
                height: "200px",
                width: "175px",
            }
        },
    },
}));

function AvailableEquipment({/*will and to change this later to be more like OpeningImage*/}){
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-170px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:1, md:1, xs:1 }}} container spacing={4} justifyContent="center" backgroundColor={"#cfcece"}>
            <Grid item md={12} xs={12} ref={ref}>
                <IlabTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    AVAILABLE EQUIPMENT
                </IlabTitle>
            </Grid>
            {/*problem with scrollable starting off the screen*/}
            <Grid className="horizontal-scrollable" item lg={12} md={12} xs={12} ref={ref}> 
                <AvailableEquipmentBlock>
                    {/*problem with element initially loading into screen (resizes after getting into position*/}
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <AvailableEquipmentText sx={{mt:2, fontWeight:'bold'}}>Esports Awards</AvailableEquipmentText>
                    <AvailableEquipmentText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</AvailableEquipmentText>
                </AvailableEquipmentBlock>
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <AvailableEquipmentText sx={{mt:2, fontWeight:'bold'}}>OWL Internship</AvailableEquipmentText>
                    <AvailableEquipmentText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</AvailableEquipmentText>
                </AvailableEquipmentBlock>
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <AvailableEquipmentText sx={{mt:2, fontWeight:'bold'}}>Esports Awards</AvailableEquipmentText>
                    <AvailableEquipmentText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</AvailableEquipmentText>
                </AvailableEquipmentBlock>
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <AvailableEquipmentText sx={{mt:2, fontWeight:'bold'}}>OWL Internship</AvailableEquipmentText>
                    <AvailableEquipmentText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</AvailableEquipmentText>
                </AvailableEquipmentBlock>
            </Grid>
        </Grid>
    );
}


function Ilab() {
    return (
        <>
        {/*gonna figure out how to have line breaks within the subtitle*/}
        <OpeningPageImage header="ILab" subtitle=">>MONDAY - FRIDAY 10:30 AM - 4:00 PM HST"imageURL={group_4} />
        <Location />
        <AvailableEquipment />
        </>
    );
}

export default Ilab;
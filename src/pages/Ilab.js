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

function Spaces(){

}

const AvailableEquipmentImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "250px",
    [theme.breakpoints.down('lg')]: {
        height: "100px",
        [theme.breakpoints.down('md')]: {
            height: "150px",
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

const EquipmentBlock = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    borderRadius:'10px',
    [theme.breakpoints.down('lg')]: {
        height: "45%",
        width: "30%",
        [theme.breakpoints.down('md')]: {
            height: "45%",
            width: "30%",
            [theme.breakpoints.down('sm')]: {
                height: "35%",
                width: "20%",
            }
        },
    },
    margin: "10px",
}));

function AvailableEquipment() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-170px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:1, md:1, xs:1 }}} container spacing={4} justifyContent="center" backgroundColor={"pink"}>
            <Grid item md={12} xs={12} ref={ref}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    Available Equipment
                </SectionTitle>
            </Grid>
            <Grid className="horizontal-scrollable" item lg={12} md={12} xs={12} ref={ref}> 
                <EquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <AvailableEquipmentText sx={{mt:2, fontWeight:'bold'}}>Esports Awards</AvailableEquipmentText>
                    <AvailableEquipmentText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</AvailableEquipmentText>
                </EquipmentBlock>
                <EquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <AvailableEquipmentText sx={{mt:2, fontWeight:'bold'}}>OWL Internship</AvailableEquipmentText>
                    <AvailableEquipmentText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</AvailableEquipmentText>
                </EquipmentBlock>
                <EquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <AvailableEquipmentText sx={{mt:2, fontWeight:'bold'}}>Esports Awards</AvailableEquipmentText>
                    <AvailableEquipmentText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</AvailableEquipmentText>
                </EquipmentBlock>
                <EquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <AvailableEquipmentText sx={{mt:2, fontWeight:'bold'}}>OWL Internship</AvailableEquipmentText>
                    <AvailableEquipmentText sx={{mt:1}}>Tempora aut est maiores error laudantium ut architecto</AvailableEquipmentText>
                </EquipmentBlock>
            </Grid>
        </Grid>
    );
}


function Ilab() {
    return (
        <>
        <OpeningPageImage header="iLab" subtitle="Subtitle text" imageURL={group_4} />
        <AvailableEquipment />
        </>
    );
}

export default Ilab;
/*import * as React from 'react';
import logo from "../logo.svg";
import Button from "@mui/material/Button";
import { useInView } from 'react-intersection-observer';*/
//importing everything 
import * as React from 'react';
import './Home.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import group_1 from '../images/group_1.jpg';
import group_2 from '../images/group_2.jpg';
import group_3 from '../images/group_3.jpg';
import group_4 from '../images/group_4.png';
import discord_server from '../images/discord_server.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uheLogo from "../images/uhe_logo.png";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import {Link as RouterLink} from "react-router-dom";
import OpeningPageImage from '../components/OpeningPageImage';

function Spaces(){

}

function AvailableEquipment(){

}

function Ilab() {
    return (
        <OpeningPageImage header="iLab" subtitle="Subtitle text" imageURL={group_4}/>
    );
}

export default Ilab;
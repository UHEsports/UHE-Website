/*import * as React from 'react';
import logo from "../logo.svg";
import Button from "@mui/material/Button";
import { useInView } from 'react-intersection-observer';*/
//importing everything 
import * as React from 'react';
import './Ilab.css';
import group_1 from '../images/group_1.jpg';
import group_2 from '../images/group_2.jpg';
import group_3 from '../images/group_3.jpg';
import group_4 from '../images/group_4.png';
import discord_server from '../images/discord_server.png';
import Slider from "react-slick";
import uheLogo from "../images/uhe_logo.png";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import {Link as RouterLink} from "react-router-dom";
import OpeningPageImage from '../components/OpeningPageImage';

function Spaces(){

}

function AvailableEquipment() {
    return (
      <center>
        <div className="container">
          <h1 style={{ textAlign: "center", color: "green" }}>GeeksforGeeks</h1>
          <h3>To make horizontal scrollable in a bootstrap row?</h3>
          <div className="container horizontal-scrollable">
            <div className="row text-center">
              <div className="col-xs-4">
                First image
                <br />
                <img src={group_1} alt="Image 1" height="100" />
              </div>
              <div className="col-xs-4">
                Second image
                <br />
                <img src={group_2} alt="Image 2" height="100" />
              </div>
              <div className="col-xs-4">
                Third image
                <br />
                <img src={group_3} alt="Image3" height="100" />
              </div>
              <div className="col-xs-4">
                Fourth image
                <br />
                <img src={group_4} alt="Image4" height="100" />
              </div>
            </div>
          </div>
        </div>
      </center>
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
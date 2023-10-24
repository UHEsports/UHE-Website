/*import * as React from 'react';
import logo from "../logo.svg";
import Button from "@mui/material/Button";
import { useInView } from 'react-intersection-observer';*/
//importing everything 
import * as React from 'react';
import Grid from '@mui/material/Grid';
import './Ilab.css';
import { styled } from '@mui/material/styles';
import group_1 from '../assets/images/group_1.jpg';
import group_2 from '../assets/images/group_2.jpg';
import group_3 from '../assets/images/group_3.jpg';
import group_4 from '../assets/images/group_4.png';
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import OpeningPageImage from '../components/OpeningPageImage';
import Divider from '@mui/material/Divider';


/*Need to fix sizing issues*/
const LocationSideImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    width: "100%",
    height: "250px",
    margin: "10px",
    [theme.breakpoints.down('lg')]: {
        height: "200px",
        [theme.breakpoints.down('md')]: {
            height: "150px",
            [theme.breakpoints.down('xs')]: {
                height: "100%",
                width: "100%",
            },
        },
    },
}));

function Location() {
    return (
        <Grid container spacing={2} justifyContent="center" sx={{mt: 2,}}>
            <Grid item xs={12} md={4}>
                <SectionTitle style={{textAlign:"left", fontSize: "5 rem",}} sx={{ml:3, mb: 4, }}>
                    LOCATION
                </SectionTitle>
                <SectionDescription sx={{ml: 3, mr:3, mb: 3,}}>
                {/* <-- bulletpoint*/} <span style={{ fontWeight: 'bold' }}>Lorem ipsum - </span>
                {" "}ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                </SectionDescription>
                <SectionDescription sx={{ml: 3, mr:3, mb: 3,}}>
                {/* <-- bulletpoint*/} <span style={{ fontWeight: 'bold' }}>Lorem ipsum - </span>
                {" "}ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                </SectionDescription>
            </Grid>
            <Grid item xs={12} s={5} md={5}>
                <LocationSideImages style={{backgroundImage:`url("${group_1}"`}} s={6} md={7} />
                <LocationSideImages style={{backgroundImage:`url("${group_1}"`}} s={6} md={7}/>
                <LocationSideImages style={{backgroundImage:`url("${group_1}"`}} s={6} md={7}/>
            </Grid>
        </Grid>
    );
}

/**Find way to change the vertial divider */
function Policies(){
    return (
        <Grid sx={{mt:{ lg:1, md:1, xs:1 }}} container spacing={4} justifyContent="center" backgroundColor={"#cfcece"}>
            <Grid item md={12} xs={12}>
                <SectionTitle sx={{mb:3}}>
                    POLICIES & USAGE
                </SectionTitle>
            </Grid>
            <Grid item xs={10} md={5} sx={{mb:5}}>
                <SectionDescription md={4} sx={{ml: 3, mr:3, mb: 3,}}>
                    &#8226; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                    Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Sed malesuada lobortis pretium.
                </SectionDescription>
                <SectionDescription sx={{ml: 3, mr:3, mb: 3,}}>
                    &#8226; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                    Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Sed malesuada lobortis pretium.
                </SectionDescription>
            </Grid>
            <Divider orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horixontal" : "vertical"} flexItems={true}/>
            {/*<Divider orientation={{sm: 'horizontal', m: 'vertical'}} flexItem xs={0} sx={{ border: 2, mb:3 }} />*/}
            <Grid item xs={10} md={5} sx={{mb:5}}>
                <SectionDescription sx={{ml: 3, mr:3, mb: 3,}}>
                    &#8226;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                    Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Sed malesuada lobortis pretium.
                </SectionDescription>
            </Grid>
        </Grid>
    )
}

/*needs centered in the equipmentblock*/
const AvailableEquipmentImages = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "350px",
    width: "350px",
    [theme.breakpoints.down('lg')]: {
        height: "300px",
        width: "300px",
        [theme.breakpoints.down('md')]: {
            height: "250px",
            width: "250px",
        },
    },
}));

const AvailableEquipmentBlock = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    marginRight: "35px",
    /*border: "2px solid", <-- temporary*/
}));

/*to change the overflow for the AvailableEquipmentDescription TEMPORARY */
const AEDesc = {
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    marginTop: 1,
    overflow: 'hidden',
  };

function AvailableEquipment({/*will and to change this later to be more like OpeningImage*/}){
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-170px 0px',
    });
    return(
        <Grid sx={{mt:{ lg:1, md:1, xs:1 }}} container spacing={4} justifyContent="center" backgroundColor={"#cfcece"}>
            <Grid item md={12} xs={12} ref={ref}>
                <SectionTitle sx={{mb:1}}>
                    AVAILABLE EQUIPMENT
                </SectionTitle>
            </Grid>
            {/*problem with scrollable starting off the screen*/}
            <Grid className="horizontal-scrollable" item sx={{ml:10}} lg={12} md={12} xs={12} ref={ref}> 
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <SectionDescription sx={{mt:2, fontWeight:'bold'}}>Esports Awards</SectionDescription>
                    <SectionDescription sx={AEDesc}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>
                </AvailableEquipmentBlock>
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <SectionDescription sx={{mt:2, fontWeight:'bold'}}>OWL Internship</SectionDescription>
                    <SectionDescription sx={AEDesc}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>
                </AvailableEquipmentBlock>
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <SectionDescription sx={{mt:2, fontWeight:'bold'}}>Esports Awards</SectionDescription>
                    <SectionDescription sx={AEDesc} >Tempora aut est maiores error laudantium ut architecto</SectionDescription>
                </AvailableEquipmentBlock>
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <SectionDescription sx={{mt:2, fontWeight:'bold'}}>OWL Internship</SectionDescription>
                    <SectionDescription sx={AEDesc}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>
                </AvailableEquipmentBlock>
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <SectionDescription sx={{mt:2, fontWeight:'bold'}}>OWL Internship</SectionDescription>
                    <SectionDescription sx={AEDesc}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>
                </AvailableEquipmentBlock>
                <AvailableEquipmentBlock>
                    <AvailableEquipmentImages style={{backgroundImage:`url("${group_1}"`}} />
                    <SectionDescription sx={{mt:2, fontWeight:'bold'}}>OWL Internship</SectionDescription>
                    <SectionDescription sx={AEDesc}>Tempora aut est maiores error laudantium ut architecto</SectionDescription>
                </AvailableEquipmentBlock>
            </Grid>
        </Grid>
    );
}

function Staff(){

}

function Ilab() {
    return (
        <>
        {/*gonna figure out how to have line breaks within the subtitle*/}
        <OpeningPageImage header="ILab" subtitle=">>MONDAY - FRIDAY 10:30 AM - 4:00 PM HST"imageURL={group_4} />
        <Location />
        <Policies />
        <AvailableEquipment />
        <Staff />
        </>
    );
}

export default Ilab;
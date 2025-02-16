import * as React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import wraith from '../assets/images/home/wraith_apex.png';
import jett from '../assets/images/home/jett_valorant.webp';
import ahri from '../assets/images/home/ahri_lol.png';
import lucio from '../assets/images/home/lucio_overwatch.png';
import mario from '../assets/images/home/mario_ssbu.png';
import soldier from '../assets/images/home/soldier_cod.png';
import sledge from '../assets/images/home/sledge_rainbowsix.webp';
import alucard from '../assets/images/home/alucard_mlbb.png';
import ct from '../assets/images/home/ct_csgo.png';
import summonersRift from '../assets/images/home/summoners_rift_1.png';
import dust2 from '../assets/images/home/dust2_1.png';
import worldsEdge from '../assets/images/home/worlds_edge_1.png';
import haven from '../assets/images/home/haven_1.png';
import eichenwald from '../assets/images/home/eichenwald_overwatch_1.png';
import finalDestination from '../assets/images/home/final_destination_ssbu_1.png';
import nukeTown from '../assets/images/home/nuketown_cod_1.png';
import bank from '../assets/images/home/bank_rainbowsix_1.png';
import battlefield from '../assets/images/home/battlefield_mlbb_1.png';
import SectionTitle from "./SectionTitle";
import {useInView} from "react-intersection-observer";
import './Games.css';
import Slider from "react-slick";
import { useState, useEffect } from 'react';

const ApexCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${wraith}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    transition: 'all .7s',
    position:'absolute',
    width: '200px',
    height: '527px',
    backgroundPosition: "-40px 20px",
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-45px 35px",
        width: '175px',
        height: '461px',
    },
}));

const ValorantCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${jett}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-90px 30px",
    width: '370px',
    height: '567px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-75px 40px",
        width: '300px',
        height: '460px',
    },
}));

const LOLCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${ahri}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-230px 0px",
    width: '650px',
    height: '467px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-220px 5px",
        width: '600px',
        height: '431px',
    },
}));

const OverwatchCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${lucio}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-140px -40px",
    width: '530px',
    height: '683px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-100px -15px",
        width: '420px',
        height: '541px',
    },
}));

const SSBUCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${mario}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-30px 70px",
    width: '350px',
    height: '400px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-40px 70px",
        width: '300px',
        height: '350px',
    },
}));

const CODCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${soldier}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-170px 40px",
    width: '450px',
    height: '501px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-150px 60px",
        width: '380px',
        height: '400px',
    },
}));

const RainbowSixCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${sledge}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-150px 35px",
    width: '380px',
    height: '586px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-120px 50px",
        width: '300px',
        height: '463px',
    },
}));

const MobileLegendsCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${alucard}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-280px 55px",
    width: '700px',
    height: '450px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-250px 60px",
        width: '600px',
        height: '400px',
    },
}));

const CounterStrikeCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${ct}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100px 30px",
    width: '700px',
    height: '450px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-100px 30px",
        width: '600px',
        height: '400px',
    },
}));

const GameCard = styled('div')(({theme, defaultBackground}) => ({
    overflow: 'hidden',
    borderRadius: '10px',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url('${defaultBackground}')`,
    color: 'rgba(255,255,255,0)',
    transition: 'background-image .5s, color .5s',
    width: '125px !important',
    height: '450px',
    [theme.breakpoints.down('lg')]: {
        width: '115px !important',
        height: '400px',
        [theme.breakpoints.down('sm')]: {
            width: '105px !important',
            height: '350px',
        },
    },
}));

const GameTitleText = styled('div')(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: "2.45rem",
    textAlign:'left',
    transform: 'rotate(-90deg)',
    position:'absolute',
    width: '420px',
    top: '47%',
    left:'-105px',
    [theme.breakpoints.down('lg')]: {
        fontSize: "2.30rem",
        top: '40%',
        left:'-130px',
        [theme.breakpoints.down('md')]: {
            left:'-115px',
            [theme.breakpoints.down('sm')]: {
                top: '32%',
                fontSize: "1.9rem",
                left:'-125px',
            },
        },
    },
}));

const mobileGamesCarouselSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 50,
    draggable:true,
    swipeToSlide:true,
    arrows:false,
    responsive: [
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
};

function MobileGameCarousel() {
    return (
        <Slider {...mobileGamesCarouselSettings}>
            <GameCard defaultBackground={eichenwald} className='overwatchBackgroundTransition characterImageScale'>
                <OverwatchCharacterImage className="child" />
                <GameTitleText>
                    OVERWATCH 2
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={worldsEdge} className='apexBackgroundTransition characterImageScale'>
                <ApexCharacterImage className="child" />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={nukeTown} className='codBackgroundTransition characterImageScale'>
                <CODCharacterImage className="child" />
                <GameTitleText>
                    CALL OF DUTY
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={dust2} className='csgoBackgroundTransition characterImageScale'>
                <CounterStrikeCharacterImage className="child" />
                <GameTitleText>
                    COUNTER-STRIKE 2
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={summonersRift} className='leagueBackgroundTransition characterImageScale'>
                <LOLCharacterImage className="child" />
                <GameTitleText>
                    LEAGUE OF LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={battlefield} className="mlbbBackgroundTransition characterImageScale">
                <MobileLegendsCharacterImage className="child" />
                <GameTitleText>
                    MOBILE LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={bank} className="rainbowsixBackgroundTransition characterImageScale">
                <RainbowSixCharacterImage className="child" />
                <GameTitleText>
                    RAINBOW SIX SIEGE
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={finalDestination} className='ssbuBackgroundTransition characterImageScale'>
                <SSBUCharacterImage className="child" />
                <GameTitleText>
                    SUPER SMASH BROS.
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={haven} className='valorantBackgroundTransition characterImageScale'>
                <ValorantCharacterImage className="child" />
                <GameTitleText>
                    VALORANT
                </GameTitleText>
            </GameCard>
        </Slider>
    );
}

function Games() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <Grid container sx={{mt:{ lg:6, md:5, xs:4 }, pt:4, pl:2, pr:2, pb:5, backgroundColor:"#f6f6f6"}} ref={ref} justifyContent="center">
            <Grid item md={12}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    UHE Teams
                </SectionTitle>
            </Grid>
            <Grid
                item
                sm={12}
                xs={12}
                sx={{
                    mt:{ sm:4, xs:4 },
                    display: {lg: 'none', md: 'none', sm:'block', xs:'block' }
                }}>
                <MobileGameCarousel />
            </Grid>
            <Grid
                item
                lg={12}
                md={12}
                sx={{
                    mt:{ lg:5, md:4 },
                    display: {lg: 'flex', md: 'flex', sm:'none', xs:'none' },
                    justifyContent: "center"
                }}>
                <GameCard defaultBackground={eichenwald} className='overwatchBackgroundTransition characterImageScale'>
                    <OverwatchCharacterImage className="child" />
                    <GameTitleText>
                        OVERWATCH 2
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={worldsEdge} className='apexBackgroundTransition characterImageScale'>
                    <ApexCharacterImage className="child" />
                    <GameTitleText>
                        APEX LEGENDS
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={nukeTown} className='codBackgroundTransition characterImageScale'>
                    <CODCharacterImage className="child" />
                    <GameTitleText>
                        CALL OF DUTY
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={dust2} className='csgoBackgroundTransition characterImageScale'>
                    <CounterStrikeCharacterImage className="child" />
                    <GameTitleText>
                        COUNTER-STRIKE 2
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={summonersRift} className='leagueBackgroundTransition characterImageScale'>
                    <LOLCharacterImage className="child" />
                    <GameTitleText>
                        LEAGUE OF LEGENDS
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={battlefield} className="mlbbBackgroundTransition characterImageScale">
                    <MobileLegendsCharacterImage className="child" />
                    <GameTitleText>
                        MOBILE LEGENDS
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={bank} className="rainbowsixBackgroundTransition characterImageScale">
                    <RainbowSixCharacterImage className="child" />
                    <GameTitleText>
                        RAINBOW SIX SIEGE
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={finalDestination} className='ssbuBackgroundTransition characterImageScale'>
                    <SSBUCharacterImage className="child" />
                    <GameTitleText>
                        SUPER SMASH BROS.
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={haven} className='valorantBackgroundTransition characterImageScale'>
                    <ValorantCharacterImage className="child" />
                    <GameTitleText>
                        VALORANT
                    </GameTitleText>
                </GameCard>
            </Grid>
        </Grid>
    );
}

export default Games;
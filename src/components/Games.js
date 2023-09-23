import * as React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import wraith from '../images/wraith_apex.png';
import jett from '../images/jett_valorant.webp';
import ahri from '../images/ahri_lol.png';
import lucio from '../images/lucio_overwatch.png';
import mario from '../images/mario_ssbu.png';
import soldier from '../images/soldier_cod.png';
import sledge from '../images/sledge_rainbowsix.webp';
import alucard from '../images/alucard_mlbb.png';
import worldsEdge from '../images/worlds_edge_v2_1.png';
// TODO remove example
import worldsEdgeGrey from '../images/worlds_edge_1_v3.png';
import summonersRift from '../images/summoners_rift_1.png';
import haven from '../images/haven_1.png';
//  TODO remove example
import havenGreen from '../images/haven_2.png';
import eichenwald from '../images/eichenwald_overwatch_1.png';
import finalDestination from '../images/final_destination_ssbu_1.png';
import nukeTown from '../images/nuketown_cod_1.png';
import bank from '../images/bank_rainbowsix_1.png';
import battlefield from '../images/battlefield_mlbb_1.png';
import SectionTitle from "./SectionTitle";
import {useInView} from "react-intersection-observer";
import './Games.css';


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
        [theme.breakpoints.down('md')]: {
            backgroundPosition: "220px 10px",
            width: '375px',
        },
    },
}));

const ValorantCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${jett}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-90px 30px",
    width: '370px',
    height: '600px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-75px 40px",
        width: '300px',
        height: '500px',
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    },
}));

const LOLCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${ahri}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-230px 0px",
    width: '650px',
    height: '500px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
    backgroundPosition: "-220px 5px",
    width: '600px',
    height: '431px',
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    },
}));

const OverwatchCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${lucio}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-140px -40px",
    width: '530px',
    height: '650px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-100px -15px",
        width: '420px',
        height: '500px',
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    },
}));

const SSBUCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${mario}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-30px 70px",
    width: '350px',
    height: '500px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-40px 70px",
        width: '300px',
        height: '500px',
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    },
}));

const CODCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${soldier}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-170px 40px",
    width: '450px',
    height: '700px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-150px 60px",
        width: '380px',
        height: '700px',
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    },
}));

const RainbowSixCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${sledge}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-150px 35px",
    width: '380px',
    height: '700px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-120px 50px",
        width: '300px',
        height: '700px',
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    },
}));

const MobileLegendsCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${alucard}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-280px 55px",
    width: '700px',
    height: '800px',
    transition: 'all .7s',
    position:'absolute',
    [theme.breakpoints.down('lg')]: {
        backgroundPosition: "-250px 60px",
        width: '600px',
        height: '800px',
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
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
    width: '125px',
    height: '450px',
    [theme.breakpoints.down('lg')]: {
        width: '100px',
        height: '400px',
        [theme.breakpoints.down('md')]: {
            // width: '375px',
            // height: '100px',
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
    },
    // transition: 'opacity .7s',
}));
function Games() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <Grid container sx={{mt:{ lg:3, md:3, xs:1 }, p:2}} ref={ref} justifyContent="center">
            <Grid item md={12}>
                <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                    UHE Teams
                </SectionTitle>
            </Grid>
            <Grid
                item
                md={12}
                className={inView ? 'slideIn1400ms' : 'hidden'}
                sx={{
                    mt:{ lg:4, md:3, xs:1 },
                    display: "flex",
                    justifyContent: "center"
                }}>
                <GameCard defaultBackground={worldsEdgeGrey} className='apexBackgroundTransition characterImageScale'>
                    <ApexCharacterImage className="child" />
                    <GameTitleText>
                        APEX LEGENDS
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={havenGreen} className='slideIn1300ms valorantBackgroundTransition characterImageScale'>
                    <ValorantCharacterImage className="child" />
                    <GameTitleText>
                        VALORANT
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={summonersRift} className='leagueBackgroundTransition characterImageScale'>
                    <LOLCharacterImage className="child" />
                    <GameTitleText>
                        LEAGUE OF LEGENDS
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={eichenwald} className='overwatchBackgroundTransition characterImageScale'>
                    <OverwatchCharacterImage className="child" />
                    <GameTitleText>
                        OVERWATCH 2
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={finalDestination} className='ssbuBackgroundTransition characterImageScale'>
                    <SSBUCharacterImage className="child" />
                    <GameTitleText>
                        SUPER SMASH BROS.
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={nukeTown} className='codBackgroundTransition characterImageScale'>
                    <CODCharacterImage className="child" />
                    <GameTitleText>
                        CALL OF DUTY
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={bank} className="rainbowsixBackgroundTransition characterImageScale">
                    <RainbowSixCharacterImage className="child" />
                    <GameTitleText>
                        RAINBOW SIX SIEGE
                    </GameTitleText>
                </GameCard>
                <GameCard style={{marginLeft:'10px'}} defaultBackground={battlefield} className="mlbbBackgroundTransition characterImageScale">
                    <MobileLegendsCharacterImage className="child" />
                    <GameTitleText>
                        MOBILE LEGENDS
                    </GameTitleText>
                </GameCard>
            </Grid>

        </Grid>

    );
}

export default Games;
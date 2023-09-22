import * as React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import wraith from '../images/wraith_apex.png';
import jett from '../images/jett_valorant.webp';
import ahri from '../images/ahri_lol.png';
import winston from '../images/winston_overwatch.png';
import lucio from '../images/lucio_overwatch.png';
import worldsEdge from '../images/worlds_edge_v2_1.png';
import summonersRift from '../images/summoners_rift_1.png';
import haven from '../images/haven_1.png';
import eichenwald from '../images/eichenwald_overwatch_1.png';
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
        backgroundPosition: "-40px 20px",
        width: '155px',
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
    backgroundPosition: "-60px 20px",
    width: '270px',
    height: '414px',
    transition: 'all .7s',
    position:'absolute'
    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
}));

const LOLCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${ahri}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-220px 5px",
    width: '600px',
    height: '431px',
    transition: 'all .7s',
    position:'absolute'
    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
}));

const OverwatchCharacterImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${lucio}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100px -15px",
    width: '420px',
    height: '500px',
    transition: 'all .7s',
    position:'absolute'
    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
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
            width: '375px',
            height: '100px',
        },
    },
}));

const GameTitleText = styled('div')(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: "2.30rem",
    textAlign:'left',
    transform: 'rotate(-90deg)',
    position:'absolute',
    width: '420px',
    top: '45%',
    left:'-105px',
    [theme.breakpoints.down('lg')]: {
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
                    Our Teams
                </SectionTitle>
            </Grid>

            <GameCard defaultBackground={worldsEdge} className="apexBackgroundTransition characterImageScale">
                <ApexCharacterImage className="child" />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={haven} className="valorantBackgroundTransition characterImageScale">
                <ValorantCharacterImage className="child" />
                <GameTitleText>
                    VALORANT
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={summonersRift} className="leagueBackgroundTransition characterImageScale">
                <LOLCharacterImage className="child" />
                <GameTitleText>
                    LEAGUE OF LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={eichenwald} className="overwatchBackgroundTransition characterImageScale">
                <OverwatchCharacterImage className="child" />
                <GameTitleText>
                    OVERWATCH 2
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} defaultBackground={eichenwald} className="overwatchBackgroundTransition characterImageScale">
                <OverwatchCharacterImage className="child" />
                <GameTitleText>
                    OVERWATCH 2
                </GameTitleText>
            </GameCard>
        </Grid>

    );
}

export default Games;
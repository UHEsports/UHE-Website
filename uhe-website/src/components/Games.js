import * as React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import apex from '../images/wraith_apex.png';
import valorant from '../images/jett_valorant.webp';
import league from '../images/ahri_lol.png';
import worldsEdge from '../images/worlds_edge_v2_1.png';
import summonersRift from '../images/summoners_rift_1.png';
import haven from '../images/haven_1.png';
import SectionTitle from "./SectionTitle";
import {useInView} from "react-intersection-observer";
import './Games.css';


const ApexImage = styled('div')(({ theme }) => ({
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
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    },
}));

const ValorantImage = styled('div')(({ theme }) => ({
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

const LOLImage = styled('div')(({ theme }) => ({
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

const GameCard = styled('div')(({theme, background}) => ({
    overflow: 'hidden',
    borderRadius: '10px',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url('${background}')`,
    color: 'rgba(255,255,255,0)',
    transition: 'background-image .5s, color .5s',
    width: '125px',
    height: '450px',
    [theme.breakpoints.down('lg')]: {
        width: '100px',
        height: '400px',
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

            <GameCard className="parent" background={worldsEdge}>
                <ApexImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} background={haven} className="parentValorant">
                <ValorantImage className="child" style={{backgroundImage: `url('${valorant}')`}} />
                <GameTitleText>
                    VALORANT
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} background={summonersRift} className="parentLeague">
                <LOLImage className="child" style={{backgroundImage: `url('${league}')`}} />
                <GameTitleText>
                    LEAGUE OF LEGENDS
                </GameTitleText>
            </GameCard>
            {/*test*/}
            <GameCard style={{marginLeft:'10px'}} className="parent" background={worldsEdge}>
                <ApexImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} className="parent" background={worldsEdge}>
                <ApexImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} background={haven} className="parentValorant">
                <ValorantImage className="child" style={{backgroundImage: `url('${valorant}')`}} />
                <GameTitleText>
                    VALORANT
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} background={summonersRift} className="parentLeague">
                <LOLImage className="child" style={{backgroundImage: `url('${league}')`}} />
                <GameTitleText>
                    LEAGUE OF LEGENDS
                </GameTitleText>
            </GameCard>
            <GameCard style={{marginLeft:'10px'}} background={summonersRift} className="parentLeague">
                <LOLImage className="child" style={{backgroundImage: `url('${league}')`}} />
                <GameTitleText>
                    LEAGUE OF LEGENDS
                </GameTitleText>
            </GameCard>
        </Grid>

    );
}

export default Games;
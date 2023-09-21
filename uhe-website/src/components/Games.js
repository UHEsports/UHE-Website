import * as React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import apex from '../images/wraith_apex.png'
import SectionTitle from "./SectionTitle";
import {useInView} from "react-intersection-observer";
import './Games.css';


const GameImage = styled('div')(({ theme }) => ({
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-40px 20px",
    width: '155px',
    height: '461px',
    transition: 'all .7s',
    position:'absolute'

    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
}));

const GameTitleText = styled('div')(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: "2.5rem",
    textAlign:'left',
    transform: 'rotate(-90deg)',
    width: '400px',
    top: '43%',
    left:'-120px',
    position:'absolute',
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

            <div className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
            <div style={{marginLeft:'10px'}} className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
            <div style={{marginLeft:'10px'}} className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
            <div style={{marginLeft:'10px'}} className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
            <div style={{marginLeft:'10px'}} className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
            <div style={{marginLeft:'10px'}} className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
            <div style={{marginLeft:'10px'}} className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
            <div style={{marginLeft:'10px'}} className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
            <div style={{marginLeft:'10px'}} className="parent">
                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}} />
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
        </Grid>

    );
}

export default Games;
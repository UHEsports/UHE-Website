import * as React from 'react';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import apex from '../images/wraith_apex.png'
import SectionTitle from "./SectionTitle";
import {useInView} from "react-intersection-observer";


const GameImage = styled('div')(({ theme }) => ({
    backgroundColor:'#61dafb',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "right top",
    backgroundPosition: "-30px 20px",
    width: '150px',
    height: '461px',
    transition: 'all .7s',
    // position:'absolute'
    // width: "100%",
    // height: "100%",
    // borderRadius:'10px',
    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
}));

const GameTitleText = styled('div')(({ theme }) => ({
    color: 'white',
    fontWeight: 'bold',
    fontSize: "2.5rem",
    transform: 'rotate(-90deg)',
    width: '400px',
    top: '50%',
    // bottom:'200px'
    position:'absolute'
}));
function Games() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <Grid sx={{mt:{ lg:3, md:3, xs:1 }, p:2}} ref={ref}>
            <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>
                Our Games
            </SectionTitle>
            <div className="parent">

                <GameImage className="child" style={{backgroundImage: `url('${apex}')`}}>
                    {/*<GameTitleText>*/}
                    {/*    APEX LEGENDS*/}
                    {/*</GameTitleText>*/}
                </GameImage>
                <GameTitleText>
                    APEX LEGENDS
                </GameTitleText>
            </div>
        </Grid>

    );
}

export default Games;
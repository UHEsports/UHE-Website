import { Grid, styled } from '@mui/material';
import SectionDescription from "../components/SectionDescription";

const LeadershipImage = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "300px",
    width: "250px",
    [theme.breakpoints.down('lg')]: {
        height: "275px",
        width:"225px",
        [theme.breakpoints.down('md')]: {
            height: "225px",
            width:"175px",
            [theme.breakpoints.down('sm')]: {
                height: "225px",
                width:"175px",
            },
        },
    },
}));

const LeadershipName = styled('div')(({ theme }) => ({
    fontWeight: "700",
    // wordSpacing: '-3px',
    letterSpacing: "-1px",
    fontSize: "40px",
    [theme.breakpoints.down('lg')]: {
        fontSize: "35px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
            fontWeight: "600",
        },
    },
}));


function LeadershipSection({ name, role, headshot }) {
    return(
        <Grid item container lg={4} md={4} sm={6} xs={12} sx={{mt:2, mb:{lg:1.5, md:1.5, sm:2, xs:0}, px:0.5}}>
            <Grid item container lg={12} md={12} sm={12} xs={12} justifyContent='center'>
                <LeadershipImage sx={{ml:0}} style={{backgroundImage: `url(${headshot})`}} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <LeadershipName sx={{mt:1.5}} style={{textAlign: 'center'}}>
                    {name}
                </LeadershipName>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <SectionDescription style={{textAlign: 'center'}}>
                    {role}
                </SectionDescription>
            </Grid>
        </Grid>

    );
}


export default LeadershipSection;
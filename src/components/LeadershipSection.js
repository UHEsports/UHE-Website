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
    wordSpacing: '-3px',
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
        <Grid item container lg={3} md={3} sm={5.5} xs={12} sx={{mt:3, mb:{lg:2, md:2, sm:3, xs:0}}}>
            <Grid item container lg={12} md={12} sm={12} xs={12} justifyContent='center'>
                <LeadershipImage sx={{ml:0}} style={{backgroundImage: `url(${headshot})`}} />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <LeadershipName sx={{mt:2}} style={{textAlign: 'center'}}>
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
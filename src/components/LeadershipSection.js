import { Grid, styled } from '@mui/material';
import SectionSubTitle from "../components/SectionSubTitle";
import SectionDescription from "../components/SectionDescription";
import group_3 from "../assets/images/group_3.jpg";
import {useMediaQuery} from "@mui/system";

const LeadershipImage = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "450px",
    width: "400px",
    [theme.breakpoints.down('lg')]: {
        height: "425px",
        width:"375px",
        [theme.breakpoints.down('md')]: {
            height: "375px",
            width:"325px",
            [theme.breakpoints.down('sm')]: {
                height: "300px",
                width:"275px"
            },
        },
    },
}));

const LeadershipRole = styled('div')(({ theme }) => ({
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

function LeadershipSection({ name, role, description, email }) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return(
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{mb:{lg:2, md:2, sm:3, xs:0}}} justifyContent={isSmallScreen ? 'center' : ''}  container>
            <Grid item lg={4} md={5} sm={12} xs={12} sx={{p:3, pb:{lg:3, md:3, sm:0, xs:0}}} justifyContent={isSmallScreen ? 'center' : 'flex-end'} container>
                <LeadershipImage sx={{ml:0}} style={{backgroundImage: `url(${group_3})`}} />
            </Grid>
            <Grid item lg={8} md={7} sm={11} xs={12} sx={{p:{lg:3, md:3, sm:0, xs:3}, pt:{lg:3, md:3, sm:0, xs:1}}} justifyContent={isSmallScreen ? 'center' : ''} container>
                <Grid item lg={11} md={12} sm={11} xs={12} container direction='column' justifyContent={isSmallScreen ? 'center' : ''} alignItems={isSmallScreen ? 'center' : ''} >
                    <SectionSubTitle sx={{mt:2}} style={{textAlign: 'left'}}>
                        {name}
                    </SectionSubTitle>
                    <LeadershipRole style={{textAlign: 'left'}}>
                        {role}
                    </LeadershipRole>
                    <SectionDescription sx={{mt:2}} style={{textAlign: 'left'}}>
                        {description}
                    </SectionDescription>
                    {/*TODO Change from hardcode to use the theme in material UI this is currently a bug*/}
                    <LeadershipRole sx={{mt:{lg:4, md:2, sm:2, xs:2}}} style={{textAlign:'left', color:'#00a772'}}>
                        {email}
                    </LeadershipRole>
                </Grid>
            </Grid>
        </Grid>

    );
}


export default LeadershipSection;
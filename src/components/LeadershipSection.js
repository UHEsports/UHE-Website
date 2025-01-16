import { Grid, styled, Divider } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../components/SectionTitle";
import SectionSubTitle from "../components/SectionSubTitle";
import SectionDescription from "../components/SectionDescription";
import group_3 from "../assets/images/group_3.jpg";
import {useMediaQuery} from "@mui/system";

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


function LeadershipSection({ name, role, description, email, headshot }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return(
        // <Grid item lg={12} md={12} sm={12} xs={12} sx={{mb:{lg:2, md:2, sm:3, xs:0}}} justifyContent={isSmallScreen ? 'center' : ''}  container>
        //     <Grid item lg={5} md={5} sm={12} xs={12} sx={{p:3, pb:{lg:3, md:3, sm:0, xs:0}}} justifyContent={isSmallScreen ? 'center' : 'flex-end'} container>
        //         <LeadershipImage sx={{ml:0}} style={{backgroundImage: `url(${headshot})`}} />
        //     </Grid>
        //     <Grid item lg={7} md={7} sm={11} xs={12} sx={{p:{lg:3, md:3, sm:0, xs:3}, pt:{lg:3, md:3, sm:0, xs:1}}} justifyContent={isSmallScreen ? 'center' : ''} container>
        //         <Grid item lg={11} md={12} sm={11} xs={12} container direction='column' justifyContent={isSmallScreen ? 'center' : ''} alignItems={isSmallScreen ? 'center' : ''} >
        //             <SectionSubTitle sx={{mt:2}} style={{textAlign: 'left'}}>
        //                 {name}
        //             </SectionSubTitle>
        //             <LeadershipRole style={{textAlign: 'left'}}>
        //                 {role}
        //             </LeadershipRole>
        //             <SectionDescription sx={{mt:2}} style={{textAlign: 'left'}}>
        //                 {description}
        //             </SectionDescription>
        //             {/*TODO Change from hardcode to use the theme in material UI this is currently a bug*/}
        //             <LeadershipRole sx={{mt:{lg:4, md:2, sm:2, xs:2}}} style={{textAlign:'left', color:'#00a772'}}>
        //                 {email}
        //             </LeadershipRole>
        //         </Grid>
        //     </Grid>
        // </Grid>
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
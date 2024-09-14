import { Grid, styled, Divider } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../components/SectionTitle";
import SectionSubTitle from "../components/SectionSubTitle";
import SectionDescription from "../components/SectionDescription";
import group_3 from "../assets/images/group_3.jpg";

const LeadershipImage = styled('div')(({ theme }) => ({
    backgroundSize: "cover",
    height: "425px",
    width: "400px",
    // [theme.breakpoints.down('lg')]: {
    //     height: "300px",
    //     [theme.breakpoints.down('md')]: {
    //         height: "250px",
    //     },
    // },
}));

const LeadershipRole = styled('div')(({ theme }) => ({
    fontWeight: "800",
    wordSpacing: '-3px',
    letterSpacing: "-1px",
    fontSize: "40px",
    // [theme.breakpoints.down('lg')]: {
    //     fontSize: "56px",
    //     [theme.breakpoints.down('sm')]: {
    //         fontSize: "40px",
    //     },
    // },
}));
function LeadershipSection({ name, role, description, email }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return(
        <Grid item lg={12} sx={{mt:3}} container>
            <Grid item lg={4} justifyContent='flex-end' container>
                <LeadershipImage sx={{ml:0, }} style={{backgroundImage: `url(${group_3})`}} />
                <Divider orientation="vertical" variant="middle" sx={{ borderRightWidth: 5, mx:5}} flexItem />
            </Grid>

            <Grid item lg={8} sx={{pl:0}} container>
                <Grid item lg={11}>
                    <SectionSubTitle sx={{mt:2}} style={{textAlign: 'left'}}>
                        {name}
                    </SectionSubTitle>
                    <LeadershipRole style={{textAlign: 'left'}}>
                        {role}
                    </LeadershipRole>
                    <SectionDescription sx={{mt:3}} style={{textAlign: 'left'}}>
                        {description}
                    </SectionDescription>
                    {/*TODO Change from hardcode to use the theme in material UI this is currently a bug*/}
                    <LeadershipRole sx={{mt:4}} style={{textAlign:'left', color:'#00a772'}}>
                        {email}
                    </LeadershipRole>
                </Grid>
            </Grid>
        </Grid>

    );
}


export default LeadershipSection;
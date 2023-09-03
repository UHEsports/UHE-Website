import * as React from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import group_1 from '../images/group_1.jpg'
import group_2 from '../images/group_2.jpg'
import group_3 from '../images/group_3.jpg'
import group_4 from '../images/group_4.png'

function HomePageImage() {
    return(
        <div>
            {/*<img*/}
            {/*    width="100%"*/}
            {/*    src={group_4}*/}
            {/*/>*/}
            <div id="group4">

            </div>
        </div>
    );
}
function AboutSection() {
    return (
        <Grid sx={{mt: 4}} container>
            <Grid item xs={5}>
                <div id="group3">
                    {/*test*/}
                </div>
            </Grid>
            <Grid item xs={7}>
                <Card
                    sx={{ p: 3, minWidth: 275 }}
                    style={{backgroundColor: '#F6F6F6'}}
                    variant="outlined" >
                    <CardContent>
                        <Typography
                            sx={{textAlign:'center', fontWeight:'bold'}}
                            variant="h4"
                            component="div">
                            About Us
                        </Typography>
                        <Typography
                            sx={{textAlign:'left'}}
                            variant="h5"
                            component="div">
                            UH Esports is a college esports program that draws on the strengths of our community of mentors,
                            educators, and alumni to provide students with <span style={{fontWeight:'bold'}}>opportunities</span> for collegiate competition
                            in esports, career paths into the wider video game industry, and a space tat welcomes the <span style={{fontWeight:'bold'}}>diversity</span> of students on all UH campuses
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

function Home() {
    const [scrollTop, setScrollTop] = React.useState(0);
    const handleScroll = () => setScrollTop(window.scrollY);
    React.useEffect(() =>{
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>

            <HomePageImage />
            <AboutSection />

        </div>

    );
}

export default Home;
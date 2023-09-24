import { Grid, styled } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import group_4 from "../images/group_4.png";

const OpeningImage = styled('div')(({ theme }) => ({
    backgroundImage: `url('${group_4}')`,
    backgroundSize: "cover",
    height: "1000px",
    display: "flex",
    color: "white",
    alignItems: "center",
    alignContent: 'flex-start',
    [theme.breakpoints.down('lg')]: {
        height: "600px",
        [theme.breakpoints.down('sm')]: {
            height: "300px"
        },
    },
}));

const OpeningImageText = styled('div')(({ theme}) => ({
    letterSpacing: "-1px",
    fontSize:"5rem",
    marginLeft:'20px',
    [theme.breakpoints.down('lg')]: {
        fontSize:"3.5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize:"2.75rem",
        },
    },
}));

const OpeningImageSubtitle = styled('div')(({ theme}) => ({
    letterSpacing: "-1px",
    marginLeft:"23px",
    fontSize:"3.5rem",
    [theme.breakpoints.down('lg')]: {
        fontSize:"2rem",
        [theme.breakpoints.down('sm')]: {
            fontSize:"1.5rem",
        },
    },
}));


function OpeningPageImage() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return(
        <OpeningImage ref={ref}>
            <Grid
                sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                }}
                container>
                <Grid item md={12}>
                    <OpeningImageText className={inView ? 'slideIn1300ms' : ''} item md={12}>
                        University of Hawaii Esports
                    </OpeningImageText>
                </Grid>
                <Grid item md={12}>
                    <OpeningImageSubtitle className={inView ? 'slideIn1500ms' : ''} item md={12}>
                        subtitle text to add
                    </OpeningImageSubtitle>
                </Grid>
            </Grid>
        </OpeningImage>
    );
}


export default OpeningPageImage;
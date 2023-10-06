import { Grid, styled } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const OpeningImage = styled('div')(({ theme, imageURL }) => ({
    backgroundImage: `url('${imageURL}')`,
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
    fontSize:"7.5rem",
    marginLeft:'20px',
    [theme.breakpoints.down('lg')]: {
        fontSize:"5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize:"3.5rem",
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


function OpeningPageImage({ header, subtitle, imageURL }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return(
        <OpeningImage ref={ref} imageURL={imageURL}>
            <Grid
                sx={{
                    textAlign: "left",
                    fontWeight: "900",
                }}
                container
                direction="column">
                <Grid item md={12}>
                    {inView ? (
                        <OpeningImageText className="slideIn1300ms" item md={12}>
                            {header}
                        </OpeningImageText>
                    ) : null}
                </Grid>
                <Grid item md={12}>
                    {inView ? (
                        <OpeningImageSubtitle className="slideIn1500ms" item md={12}>
                            {subtitle}
                        </OpeningImageSubtitle>
                    ) : null}
                </Grid>
            </Grid>
        </OpeningImage>
    );
}


export default OpeningPageImage;
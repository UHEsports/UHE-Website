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
    fontSize:"120px",
    marginLeft:'40px',
    fontWeight: 900,
    [theme.breakpoints.down('lg')]: {
        fontSize:"80px",
        [theme.breakpoints.down('sm')]: {
            marginLeft:'20px',
            fontSize:"44px",
        },
    },
}));

const OpeningImageSubtitle = styled('div')(({ theme}) => ({
    letterSpacing: "-1px",
    marginLeft:'41px',
    fontSize:"50px",
    fontWeight: 600,
    [theme.breakpoints.down('lg')]: {
        fontSize:"32px",
        [theme.breakpoints.down('sm')]: {
            marginLeft:"23px",
            fontSize:"24px",
        },
    },
}));


function OpeningPageImage({ header, subtitle1, subtitle2, imageURL }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return(
        <OpeningImage ref={ref} imageURL={imageURL}>
            <Grid
                sx={{
                    textAlign: "left",
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
                            {subtitle1}
                        </OpeningImageSubtitle>
                    ) : null}
                </Grid>
                <Grid item md={12}>
                    {inView ? (
                        <OpeningImageSubtitle className="slideIn1500ms" item md={12}>
                            {subtitle2}
                        </OpeningImageSubtitle>
                    ) : null}
                </Grid>
            </Grid>
        </OpeningImage>
    );
}


export default OpeningPageImage;
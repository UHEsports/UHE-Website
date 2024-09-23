import {styled} from "@mui/material/styles";

// Use this component like a div box
const SectionSubTitle = styled('div')(({ theme }) => ({
    fontWeight: "800",
    wordSpacing: '-3px',
    letterSpacing: "-1px",
    fontSize: "61px",
    [theme.breakpoints.down('lg')]: {
        fontSize: "51px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "35px",
        },
    },
}));

export default SectionSubTitle;
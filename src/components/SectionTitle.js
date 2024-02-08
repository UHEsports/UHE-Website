import {styled} from "@mui/material/styles";

// Use this component like a div box
const SectionTitle = styled('div')(({ theme }) => ({
    fontWeight: "800",
    wordSpacing: '-3px',
    letterSpacing: "-1px",
    fontSize: "72px",
    [theme.breakpoints.down('lg')]: {
        fontSize: "56px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "40px",
        },
    },
}));

export default SectionTitle;
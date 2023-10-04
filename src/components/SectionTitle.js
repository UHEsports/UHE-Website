import {styled} from "@mui/material/styles";

// Use this component like a div box
const SectionTitle = styled('div')(({ theme }) => ({
    fontWeight: "800",
    wordSpacing: '-3px',
    letterSpacing: "-1px",
    fontSize: "4.5rem",
    [theme.breakpoints.down('lg')]: {
        fontSize: "3.5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.5rem",
        },
    },
}));

export default SectionTitle;
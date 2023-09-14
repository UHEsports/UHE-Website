import {styled} from "@mui/material/styles";

// Use this component like a div box
const SectionTitle = styled('div')(({ theme }) => ({
    fontWeight: "bold",
    wordSpacing: '-3px',
    letterSpacing: "-1px",
    fontSize: "3.25rem",
    [theme.breakpoints.down('lg')]: {
        fontSize: "2.5rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.25rem",
        },
    },
}));

export default SectionTitle;
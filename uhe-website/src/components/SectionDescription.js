import {styled} from "@mui/material/styles";

// Use this component like a div box
const SectionDescription = styled('div')(({ theme }) => ({
    textAlign: 'left',
    letterSpacing: "0.15px",
    fontSize: "1.5rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.25rem",
    },
}));

export default SectionDescription;
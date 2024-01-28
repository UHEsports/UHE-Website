import {styled} from "@mui/material/styles";

// Use this component like a div box
const SectionDescription = styled('div')(({ theme }) => ({
    textAlign: 'left',
    letterSpacing: "0.15px",
    fontSize: "24px",
    [theme.breakpoints.down('sm')]: {
        fontSize: "17px",
    },
}));

export default SectionDescription;
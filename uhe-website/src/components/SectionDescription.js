import {styled} from "@mui/material/styles";

// Use this component like a div box
const SectionDescription = styled('div')(({ theme, slideIn}) => ({
    "@keyframes slideIn": {
        "0%": {
            transform: "translateY(100px)",
            opacity: 0,
        },
        "100%": {
            transform: "translateY(0px)",
            opacity: 1,
        }
    },
    // visibility: !slideIn && 'hidden',
    animation: slideIn && `slideIn 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    textAlign: 'left',
    letterSpacing: "0.15px",
    fontSize: "1.5rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.25rem",
    },
}));

export default SectionDescription;
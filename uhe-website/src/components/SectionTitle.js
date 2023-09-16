import {styled} from "@mui/material/styles";

// Use this component like a div box
const SectionTitle = styled('div')(({ theme, slideIn }) => ({
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
    animation: slideIn && `slideIn 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
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
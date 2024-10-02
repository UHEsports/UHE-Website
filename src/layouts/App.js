import './App.css';
import Navbar from "../components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Ilab from "../pages/Ilab";
import Education from "../pages/Education";
import ContactUs from "../pages/ContactUs";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import  ReactGA from 'react-ga4';

const TRACKING_ID = "G-XQZWBNG700"; // Tracking ID for Google Analytics
ReactGA.initialize(TRACKING_ID);
function App() {
    const { ref } = useInView({
        triggerOnce: false,
    });

    const scrollToTop = () => {
        // Delay is in place to allow for the page to load completely before scrolling
        // In place for chrome browser
        window.setTimeout(function() {
            window.scrollTo({
                top:0,
                behavior: "smooth",
            })
        }, 220);
    };
    const handleScroll = () => {
        let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
        let appID = document.getElementById('AppID');
        let scrollPosition = window.scrollY;
        const maxScrollHeight = appID.clientHeight-window.innerHeight;
        const scrollHeightOffset = 200;
        if (scrollPosition >= maxScrollHeight - scrollHeightOffset) {
            scrollToTopBtn.classList.add("slideIn1000ms");
            scrollToTopBtn.classList.remove("slideOut1000ms");
            scrollToTopBtn.classList.remove("hidden");
        } else {
            scrollToTopBtn.classList.remove("slideIn1000ms");
            scrollToTopBtn.classList.add("slideOut1000ms");
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div id="AppID" onScroll={handleScroll} className="App" ref={ref}>
        <Router>
            <Navbar id='test2' />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="ilab" element={<Ilab />} />
                <Route path="education" element={<Education />} />
                <Route path="contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
        <Button
            className="scrollToTopBtn hidden"
            variant="contained"
            arial-label="Scroll to top"
            color="uhegreen"
            sx={{
                borderRadius: '50%',
                position: "fixed",
                bottom: { xs: 25, sm: 240, md: 220, lg: 220 }, 
                right:{xs: 50, sm: 25, md: 25, lg: 25},
                width: { xs: '95px', sm: '90px', md: '80px', lg: '80px' }, 
                height: { xs: '95px', sm: '90px', md: '80px', lg: '80px' },             
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',

            }}
            onClick={scrollToTop}
        >
        <ArrowUpwardIcon sx={{ fontSize: { xs: '70px', sm: '35px', md: '35px', lg: '50px' } }} /> {/* adjust icon size */}
        </Button>
        <Footer />
    </div>
  );
}

export default App;

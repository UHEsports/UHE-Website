import './App.css';
import { IconButton } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Ilab from "../pages/Ilab";
import Education from "../pages/Education";
import ContactUs from "../pages/ContactUs";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from "react";
import {Link} from "@mui/material";
import Button from "@mui/material/Button";

function App() {
    const [pos, setPos] = useState(false);
    const handleTop = () => {
        document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        // let navbarID = document.getElementById('test2');
        // if (navbarID) {
        //     navbarID.scrollIntoView();
        // }

        window.scrollTo(0,0);
        setPos(false);
    };

    const handleScroll = () => {
        let appID = document.getElementById('test');
        // retrieve ID name and check if it is loaded in
        if (appID) {
            // console.log(appID.style.height);
            let scrollPosition = window.scrollY;
            const maxScrollHeight = appID.clientHeight-window.innerHeight;
            const scrollHeightOffset = 100;
            // console.log(window.scrollY)
            // console.log(appID.clientHeight-window.innerHeight)
            if (scrollPosition >= maxScrollHeight - scrollHeightOffset) {
                // console.log("clientheight offset: " + (appID.offsetHeight))
                // console.log("clientheight : " + (appID.clientHeight))
                console.log('hits');
                setPos(true)
            } else {
                setPos(false)
            }
        } else {
            console.log('miss');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div id="test" onScroll={handleScroll} className="App">
        <Router>
            <Navbar id='test2' />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="ilab" element={<Ilab />} />
                <Route path="education" element={<Education />} />
                <Route path="contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
        {/*<Link*/}
        {/*    component="button"*/}
        {/*    variant="body2"*/}
        {/*    underline="hover"*/}
        {/*    style={{*/}
        {/*        position: "fixed",*/}
        {/*        bottom: 10,*/}
        {/*        right: 10,*/}
        {/*        display: pos ? "block" : "none"*/}
        {/*        // display: "block"*/}
        {/*    }}*/}
        {/*    onClick={handleTop}*/}
        {/*>*/}
        {/*    <ArrowUpwardIcon />*/}
        {/*    Button Link*/}
        {/*</Link>*/}
        <Button
            componenet="label"
            variant="outlined"
            sx={{
                position: "fixed",
                bottom: 10,
                right: 10,
                display: pos ? "flex" : "none"
            }}
            startIcon={<ArrowUpwardIcon />}
            onClick={handleTop}
        >
            To Top
        </Button>
    </div>
  );
}

export default App;

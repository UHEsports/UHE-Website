import './App.css';
import { IconButton } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Ilab from "../pages/Ilab";
import Education from "../pages/Education";
import ContactUs from "../pages/ContactUs";
import { useRef, useState, useEffect } from "react";

function App() {
    // const ref = useRef();

    const [pos, setPos] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    // console.log(ref.current);
    const handleTop = () => {
        window.scrollTo(0,0);
        // console.log(window.scrollY);
        setPos(false);
    };

    // window.onscroll = function() {scrollFunction()};


    const handleScroll = () => {
        let appID = document.getElementById('test');
        if (appID) {
            // console.log(appID.style.height);
            console.log("windowHeight: " + window.scrollY);
            console.log("height offset" + (appID.clientHeight-window.innerHeight))
            // console.log(window.scrollY)
            // console.log(appID.clientHeight-window.innerHeight)
            if (window.scrollY >= appID.clientHeight-window.innerHeight - 50) {
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

    // const handleScroll = () => {
    //     if (
    //         ref.current.scrollHeight - Math.round(ref.current.scrollTop) ===
    //         ref.current.clientHeight
    //     ) {
    //         if (!pos) setPos(true);
    //     } else {
    //         if (pos) setPos(false);
    //     }
    // };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div id="test" onScroll={handleScroll} className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="ilab" element={<Ilab />} />
                <Route path="education" element={<Education />} />
                <Route path="contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
        <IconButton
            style={{
                position: "fixed",
                bottom: 10,
                right: 10,
                display: pos ? "block" : "none"
                // display: "block"
            }}
            onClick={handleTop}
        >
            Scroll to top
        </IconButton>
    </div>
  );
}

export default App;

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
    const ref = useRef();

    const [pos, setPos] = useState(false);

    const handleTop = () => {
        window.scrollTo(0,0)
        setPos(false);
    };

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollHeight - Math.round(document.body.scrollTop) === document.body.clientHeight) {
            setPos(true);
        } else {
            setPos(false);
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

    // useEffect(() => {
    //     const temp = ref.current;
    //     temp.addEventListener("scroll", handleScroll);
    //     return () => temp.removeEventListener("scroll", handleScroll);
    // });
  return (
    <div className="App">
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
            }}
            onClick={handleTop}
        >
            Up
        </IconButton>
    </div>
  );
}

export default App;

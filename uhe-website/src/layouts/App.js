import logo from '../logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Ilab from "../pages/Ilab";
import Education from "../pages/Education";
import ContactUs from "../pages/ContactUs";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="ilab" element={<Ilab />} />
                <Route path="education" element={<Education />} />
                <Route path="contact-us" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

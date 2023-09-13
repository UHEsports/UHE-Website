import './App.css';
import Navbar from "../components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Ilab from "../pages/Ilab";
import Education from "../pages/Education";
import ContactUs from "../pages/ContactUs";

function App() {
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
    </div>
  );
}

export default App;

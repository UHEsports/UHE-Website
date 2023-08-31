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
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="ilab" element={<Ilab />} />
                    <Route path="education" element={<Education />} />
                    <Route path="contact-us" element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
      {/*<Navbar />*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" className="changeColor">Hello World</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

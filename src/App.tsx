import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Service from './pages/Services/Service';
import About from './pages/About/About';
import { Box } from '@mui/material';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <>
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Service />}></Route>
        </Routes>
      </Router>
      {/* <Footer /> */}
      </Box>
    </>
  );
}

export default React.memo(App);

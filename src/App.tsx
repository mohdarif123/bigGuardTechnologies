import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Service from "./pages/Services/Service";
import About from "./pages/About/About";
import { Box } from "@mui/material";
import Footer from "./component/Footer/Footer";
import ContactIcon from "./assets/Icons/ContactIcon.svg";
import NavContact from "./pages/Contact/Contact";
import ContactFooter from "./pages/ContactFooter/ContactFooter";

function App() {
  return (
    <>
      <Box>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<NavContact />}></Route>
            <Route path="/services" element={<Service />}></Route>
          </Routes>
        </Router>
        {/* <Footer /> */}
        <ContactFooter />
        <Box
          component={"img"}
          src={ContactIcon}
          sx={{
            background: "rgb(58, 85, 148)",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
          }}
        />
      </Box>
    </>
  );
}

export default React.memo(App);

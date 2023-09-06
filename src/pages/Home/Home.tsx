import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import HomeStyle from "./HomeStyle";
import { primaryPureWhite } from "../../global/Style/Style";
import EastIcon from "@mui/icons-material/East";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Service";
import Footer from "../../component/Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const classes = HomeStyle;

  const getImportComponent = () => {
    return (
      <>
        {/* <About />
        <Services /> */}
        <Testimonials />
        <Contact /> 
        {/* <Footer /> */}
      </>
    );
  };

  const getHomePage = () => {
    return (
      <>
        <Box sx={classes.mainWrapper} mt={8.8}>
          <Grid container>
            <Grid item xl={7} lg={7} md={7}>
              <Box sx={classes.textWrapper}>
                <Typography variant="h2" sx={classes.textStyle}>
                  Network Security
                </Typography>
                <Typography variant="h2" sx={classes.textStyle}>
                  & Cloud
                </Typography>
                <Typography variant="h6" color={primaryPureWhite}>
                  We make technology accessible!
                </Typography>
                <Button
                  style={{}}
                  sx={classes.buttonStyle}
                  endIcon={<EastIcon />}
                >
                  Let's Discuss
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {getImportComponent()}
      </>
    );
  };

  return getHomePage();
};
export default React.memo(Home);

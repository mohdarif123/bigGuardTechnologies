import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeStyle from "./HomeStyle";
import { primaryPureWhite } from "../../global/Style/Style";
import EastIcon from "@mui/icons-material/East";
import About from "../About/About";
import Contact from "../ContactFooter/ContactFooter";
import Services from "../Services/Service";
import Footer from "../../component/Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import OurWorked from "../OurWorked/OurWorked";

const Home = () => {
  const classes = HomeStyle;
  const [openContactModal, setOpenContactModal] = useState(false);

  const openContactModalHandler = () => {
    setOpenContactModal(true);
  };

  const getImportComponent = () => {
    return (
      <>
        {/* <About />
        <Services /> */}
        <Testimonials />
        <OurWorked />
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
                <Typography variant="h2" sx={classes.textStyling}>
                  Network Security
                </Typography>
                <Typography variant="h2" sx={classes.textStyling}>
                  & Cloud
                </Typography>
                <Typography variant="h6" color={primaryPureWhite}>
                  We make technology accessible!
                </Typography>
                <Button
                  style={{}}
                  sx={classes.buttonStyle}
                  endIcon={<EastIcon />}
                  onClick={openContactModalHandler}
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

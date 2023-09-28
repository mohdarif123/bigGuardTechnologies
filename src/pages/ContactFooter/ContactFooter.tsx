import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import contactStyle from "./Contact.Style";
import LinkdlnIcon from "../../assets/Icons/LinkdlnIcon.svg";
import TwitterIcon from "../../assets/Icons/TwitterIcon.svg";
import InstragramIcon from "../../assets/Icons/InstragramIcon.svg";
import FacebookIcon from "../../assets/Icons/FacebookIcon.svg";
import PhoneIcon from "../../assets/Icons/PhoneIcon.gif";
import Email_Icon from "../../assets/Icons/Email_Icon.png";
import WebsiteIcon from "../../assets/Icons/websiteIcon.png";
import AddressIcon from "../../assets/Icons/AddressIcon.png";

const ContactFooter = () => {
  const classes = contactStyle;
  const currentYear = new Date().getFullYear();

  const getFooter = () => {
    return (
      <>
        <Box sx={classes.footerStyle}>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            &copy; {currentYear} BigGuard Technologies. All rights reserved.
          </Typography>
        </Box>
      </>
    );
  };

  const getContactUsMethod = () => {
    return (
      <>
        <Typography variant="h6" sx={{ color: "white" }}>
          contact us
        </Typography>
        <Box
          sx={{
            marginTop: {
              xl: "40px",
              lg: "40px",
              md: "25px",
              sm: "25px",
              xs: "25px",
            },
          }}
        >
          <Typography sx={classes.contactUsInnerTextStyle} variant="subtitle1">
            <Box
              component={"img"}
              src={PhoneIcon}
              sx={classes.contactUsIconStyle}
            />
            <span style={{ flexGrow: 1 }}>+91 9879876545</span>
          </Typography>

          <Typography
            sx={classes.contactUsInnerTextStyle}
            variant="subtitle1"
            mt={1}
          >
            <Box
              component={"img"}
              src={Email_Icon}
              sx={classes.contactUsIconStyle}
            />
            <span style={{ flexGrow: 1 }}>info@bigGuard.com</span>
          </Typography>

          <Typography
            sx={classes.contactUsInnerTextStyle}
            variant="subtitle1"
            mt={1}
          >
            <Box
              component={"img"}
              src={WebsiteIcon}
              sx={classes.contactUsIconStyle}
            />
            <span style={{ flexGrow: 1 }}>www.bigGuard.com</span>
          </Typography>

          <Typography
            sx={classes.contactUsInnerTextStyle}
            variant="subtitle1"
            mt={1}
          >
            <Box
              component={"img"}
              src={AddressIcon}
              sx={classes.contactUsIconStyle}
            />
            <span style={{ flexGrow: 1 }}>Rajpat Nagar,Delhi INDIA</span>
          </Typography>
        </Box>
      </>
    );
  };

  const getOurServicesMethod = () => {
    return (
      <>
        <Typography variant="h6" sx={{ color: "white" }}>
          Our Services
        </Typography>
        <Box
          sx={{
            marginTop: {
              xl: "40px",
              lg: "40px",
              md: "25px",
              sm: "25px",
              xs: "25px",
            },
          }}
        >
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Software development
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Network security & cloud
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Game Development
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Web Devlopment
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Graphic designing
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            sells & Marketing
          </Typography>
        </Box>
      </>
    );
  };

  const getAboutUsMethod = () => {
    return (
      <>
        <Typography variant="h6" sx={classes.aboutUsWrapper}>
          About us
        </Typography>
        <Box sx={classes.aboutUsSecondWrapper}>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Career At Comfygen
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Contact Us
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            About Us
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Client Testimonial
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle1">
            Our Blog
          </Typography>
        </Box>
      </>
    );
  };

  const getCompanyMethod = () => {
    return (
      <>
        <Typography variant="h4" sx={classes.companyNameTextStyle}>
          BigGuard Technologies
        </Typography>
        <Typography variant="subtitle1" sx={classes.bigGuardTextStyle}>
          BigGuard takes pride in being one of the leading cryptocurrency
          companies working to create aflawless development of cryptocurrency
          apps and software.
        </Typography>
        <Box mt={4} sx={classes.iconWrapper}>
          <Box component={"img"} src={LinkdlnIcon} />
          <Box component={"img"} src={TwitterIcon} />
          <Box component={"img"} src={InstragramIcon} />
          <Box component={"img"} src={FacebookIcon} />
        </Box>
      </>
    );
  };

  const getContactMainMethod = () => {
    return (
      <>
        <Box sx={classes.mainWrapper} style={{ paddingBottom: "40px" }}>
          <Grid container>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12} mt={5}>
              {getCompanyMethod()}
            </Grid>
            <Grid item xl={8} lg={8} md={12} sm={12} xs={12} mt={5}>
              <Grid container gap={{ xl: 0, lg: 0, md: 3, sm: 3, xs: 3 }}>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  {getAboutUsMethod()}
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  {getOurServicesMethod()}
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={12}
                  sm={12}
                  xs={12}
                  sx={classes.contactUsGridWrapper}
                >
                  {getContactUsMethod()}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {getFooter()}
      </>
    );
  };
  return getContactMainMethod();
};
export default React.memo(ContactFooter);

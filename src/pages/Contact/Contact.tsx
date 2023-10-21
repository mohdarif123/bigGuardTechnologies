import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import NavContactStyle from "./NavContact.style";
import React, { useState } from "react";
import TalkImage from "../../assets/Images/TalkImage.svg";
import { contactFormInitialState, handleFormValidation } from "./ContactData";

const Contact = () => {
  const classes = NavContactStyle;

  const [formField, setFormField] = useState(contactFormInitialState);

  const handleInputOnchange = (event: any) => {
    setFormField({
      ...formField,
      [event.target.name]: {
        value: event.target.value,
        error: "",
      },
    });
  };

  const validationCheckMethod = () => {
    const { isValid, errors } = handleFormValidation(formField);
    setFormField({ ...errors });
    return isValid;
  };

  const handleSubmit = () => {
    if (validationCheckMethod()) {
      console.log("submit");
    } else {
      console.log("please enter your remaining field");
    }
  };

  const getContactFormMethod = () => {
    return (
      <>
        {/* F3F2ED */}

        <Typography variant="h5" sx={classes.testing}>
          Hey! Let’s Talk
        </Typography>
        <Grid container mt={2} gap={2}>
          <Grid
            item
            xl={5.7}
            lg={5.7}
            md={5.7}
            p={2}
            sx={{
              background: "#F8F8FF",
              borderRadius: "15px",
              gap: "10px",
              spacing: "10px",
            }}
          >
            <img src={TalkImage} alt="TalkImage" />
          </Grid>

          <Grid
            item
            xl={5.7}
            lg={5.7}
            md={5.7}
            sx={{
              background: "#F8F8FF",
              borderRadius: "15px",
              gap: "10px",
              spacing: "10px",
            }}
            p={2}
          >
            <TextField
              value={formField.name.value}
              name="name"
              id="name"
              type="text"
              sx={classes.inputStyle1}
              placeholder="Enter name"
              onChange={(event: any) => handleInputOnchange(event)}
              helperText={formField.name.error}
            />
            <TextField
              value={formField.email.value}
              name="email"
              id="email"
              type="email"
              sx={classes.inputStyle}
              placeholder="Enter email"
              onChange={(event: any) => handleInputOnchange(event)}
              helperText={formField.email.error}
            />
            <TextField
              value={formField.subject.value}
              name="subject"
              id="subject"
              type="text"
              sx={classes.inputStyle}
              placeholder="Enter subject"
              onChange={(event: any) => handleInputOnchange(event)}
              helperText={formField.subject.error}
            />
            <TextField
              value={formField.message.value}
              name="message"
              id="message"
              type="text"
              sx={classes.inputStyle}
              placeholder="Enter message"
              multiline
              rows={4}
              onChange={(event: any) => handleInputOnchange(event)}
              helperText={formField.message.error}
            />
            <Box sx={classes.submitButtonWrapper}>
              <Button sx={classes.buttonStyle} onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };

  const getContactHeadingPart = () => {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h3" sx={{ color: "black" }}>
            {" "}
            Get In Touch
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }} mt={2}>
          <Typography variant="h6" sx={{ color: "black" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            voluptate at iste? Ea hic rem doloribus, ipsam nihil at harum dicta
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" sx={{ color: "black" }}>
            Lorem ipsum, dolor sit
          </Typography>
        </Box>
      </>
    );
  };
  const getMainNavContact = () => {
    return (
      <>
        <Box sx={classes.mainWrapper} mt={8}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={3}>
              {getContactHeadingPart()}
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={3}>
              {getContactFormMethod()}
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };
  return getMainNavContact();
};
export default React.memo(Contact);

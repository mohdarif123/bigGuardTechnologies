import React from "react";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import TestimonialStyle from "./Testimonials.style";

const Testimonials = () => {
  const classes = TestimonialStyle;

  const swiperParams = {
    modules: [Navigation],
    navigation: true,
    spaceBetween: 2,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      902: {
        slidesPerView: 2,
      },
    },
  };

  const projectData = [
    {
      projectName: "Simpana",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is great sdkj sdlflds pofdsf sdf re rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwvmpsd rew vdsp wemvds wer",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is grre wvmf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is grre wvmf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
    },
  ];

  const getCard = (items: any) => {
    return (
      <>
        <Box sx={classes.cardWrapperStyle} px={2}>
          <Box sx={{ display: "flex" }}>
            <Box sx={classes.cardSecondWrapper}>
              <Typography>{items?.projectOwnerImage}</Typography>
            </Box>
            <Box ml={2}>
              <Typography>{items?.projectName}</Typography>
              <Typography>{items?.projectLocation}</Typography>
            </Box>
          </Box>
          <Box sx={classes.cardDescriptionStyle}>
            <Typography variant="subtitle1">
              {items?.projectDescription}
            </Typography>
          </Box>
        </Box>
      </>
    );
  };
  const clientSaysMethod = () => {
    return (
      <>
        <Swiper {...swiperParams}>
          {projectData.map((data: any, index: number) => {
            return (
              <>
                <SwiperSlide>{getCard(data)}</SwiperSlide>
              </>
            );
          })}
          ...
        </Swiper>
      </>
    );
  };
  const getTestimonialsMainMethod = () => {
    return (
      <>
        <Box sx={classes.mainWrapper}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h2" sx={{ color: "black" }} mt={4}>
              Client says
            </Typography>
          </Box>
          <Box pt={6} pb={4}>
            {clientSaysMethod()}
          </Box>
        </Box>
      </>
    );
  };
  return getTestimonialsMainMethod();
};
export default Testimonials;

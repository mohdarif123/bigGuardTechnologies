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
import OurWorkedStyle from "./OurWorked.style";

const OurWorked = () => {
  const classes = OurWorkedStyle;

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
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is great sdkj sdlflds pofdsf sdf re rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwvmpsd rew vdsp wemvds wer",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is grre wvmf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds weabc lorem*50 india is great sdkj sdlflds pofdsf sdfwen dspojewrm vdsojfewm dfpwer msdfpfsdkfwoe dsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription:
        "abc lorem*50 india is greawrm vdsojfewm dfpwer msdbc lorem*50 india is gsdsf dfm sdfpo weroewmfsd epr dsfmer ewfmsdp fm ewpr mpre wvmpsd rew vdsp wemvds wer",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
    {
      projectName: "abc",
      projectLocation: "USA",
      projectOwnerImage: "img",
      projectDescription: "abc sdf sdfkj sdfjlk sdf djlkj l kj l klj ",
      projectGitLink: "git link",
      projectLiveLink: "abc.com",
    },
  ];

  const getCard = (items: any) => {
    return (
      <>
        <Box sx={classes.cardWrapperStyle} px={2}>
          <Box sx={{ display: "flex", width: "100%"}}>
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", color: "black", fontWeight: 600 }}
            >
              Project live link :{" "}
              <Typography component={"span"} sx={classes.projectLinkStyle}>
                {items?.projectLiveLink}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </>
    );
  };
  const getRealProject = () => {
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
  const getRealProjectMain = () => {
    return (
      <>
        <Box sx={classes.mainWrapper}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h2" sx={{ color: "black" }} mt={4}>
              My past work
            </Typography>
          </Box>
          <Box pt={6} pb={4}>
            {getRealProject()}
          </Box>
        </Box>
      </>
    );
  };
  return getRealProjectMain();
};
export default OurWorked;

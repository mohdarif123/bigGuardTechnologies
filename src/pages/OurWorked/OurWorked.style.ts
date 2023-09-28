const OurWorkedStyle = {
  mainWrapper: {
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "calc(100% - 8rem)",
    padding: "0 4rem",
    background: "#F8F8FF",
  },
  swiper: {
    width: "100%",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  swiperSlide: {
    backgroundPosition: "clearInterval",
    backgroundSize: "coverclearInterval",
    width: "300pxclearInterval",
    height: "300pxclearInterval",
  },
  swiperSlideImg: {
    display: "block",
    height: "500px",
  },
  cardStyle: {
    width: "80%",
    margin: "0 8px",
    gap: 2,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 10)",
  },
  cardWrapperStyle: {
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
    transition: "0.3s",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1)",
    height: "60vh",
    width: "70%",
    maxWidth: "100%",
    display: "flex",
    alignContent: "space-between",
    flexWrap: "wrap",
    margin: "0 auto",
  },
  cardSecondWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "45px",
    width: "45px",
    background: "red",
    borderRadius: "50%",
    color: "white",
  },
  cardDescriptionStyle: {
    overflow: "auto",
    width: "100%",
    minHeight: "250px",
    maxHeight: "250px",
    mt: 2,
    // height: "250px",
  },
  projectLinkStyle: {
    fontSize: "18px",
    color: "blue",
    "&:hover": {
      color: "red",
    },
    fontWeight: 600,
  },
} as const;
export default OurWorkedStyle;

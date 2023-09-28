import securityImage from "../../assets/Images/securityImage.jpg";
import cloudImage from "../../assets/Images/cloudImage.jpg";
import { primaryPureWhite } from "../../global/Style/Style";
const HomeStyle = {
  mainWrapper: {
    height: "100vh",
    width: "100%",
    backgroundImage: `url(${cloudImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  textWrapper: {
    padding: "10rem 0 0 4rem",
  },
  textStyle: {
    color: primaryPureWhite,
    fontWeight: 500,
  },
  buttonStyle: {
    fontSize: "18px",
    width: "200px",
    marginTop: "40px",
    background: "purple",
    borderRadius: "25px",
    border: "none",
    textAlign: "center",
    padding: "10px 15px",
    boxShadow: "0 2px 0 rgb(0 0 0 / 2%)",
    color: "#FFFFFF",
    cursor: "pointer",
    textTransform: "none",
    height: "47px",
    transition: "all .3s ease",
    "&:hover": {
      background: "#c20c85",
    },
    "&:disabled": {
      color: "rgb(255 255 255 / 50%)",
    },
  },
  textStyling: {
    color: "transparent",
    WebkitTextStroke: "2px white",
  },
} as const;
export default HomeStyle;

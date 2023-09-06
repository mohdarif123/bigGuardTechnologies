import { primaryPureBlack, primaryPureWhite } from "../../global/Style/Style";

const contactStyle = {
  mainWrapper: {
    width: "100%",
    // height: { xl: "100vh", lg: "100vh", md: "100%", sm: "100%", xs: "100%" },
    height: "100%",
    background: primaryPureBlack,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "calc(100% - 8rem)",
    padding: "0 4rem",
  },
  companyNameTextStyle: {
    color: primaryPureWhite,
    cursor: "pointer",
  },
  bigGuardTextStyle: {
    marginTop: "40px",
    color: "#696969",
  },
  iconWrapper: {
    display: "flex",
    gap: "2rem",
  },
  footerStyle: {
    color: primaryPureWhite,
    display: "flex",
    justifyContent: "center",
    background: "black",
    paddingBottom: "7px",
    alignItems: "center",
  },
  contactUsInnerTextStyle: {
    display: "flex",
    alignItems: "center",
    color: primaryPureWhite,
  },
  contactUsIconStyle: {
    width: "25px",
    height: "25px",
    marginRight: "10px",
  },
  aboutUsWrapper: {
    color: "white",
    marginLeft: { xl: "10px", lg: "10px" },
  },
  aboutUsSecondWrapper: {
    marginTop: {
      xl: "40px",
      lg: "40px",
      md: "25px",
      sm: "25px",
      xs: "25px",
    },
    marginLeft: { xl: "10px", lg: "10px" },
  },
  contactUsGridWrapper: {
    paddingBottom: { sm: "20px", xs: "20px" },
  },
} as const;
export default contactStyle;

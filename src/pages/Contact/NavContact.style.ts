import { keyframes } from "@emotion/react";

const NavContactStyle = {
  mainWrapper: {
    height: "100%",
    width: "100%",
    background:
      "radial-gradient(circle at 50% 20%, rgb(6, 123, 239) 0%, rgb(219, 115, 249) 50%)",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "calc(100% - 8rem)",
    padding: "0 4rem",
    paddingBottom: 1,
  },
  testing: {
    fontStyle: "italic",
    color: "transparent",
    "-webkit-text-stroke": "#fff",
    "-webkit-text-stroke-width": "1px",
    textShadow: "4px 4px 10px #2962ff",
    transition: "all 0.5s ease-in-out",
    letterSpacing: "0.2em",
    animation: "flicker 0.5s ease-in-out infinite alternate",
    "&:hover": {
      color: "#fff",
    },
    "@keyframes flicker": {
      "0%": {
        opacity: 0.5,
        textShadow: "2px 2px 10px #2962ff",
      },
      "100%": {
        opacity: 1,
        textShadow: "2px 2px 20px #2962ff",
      },
    },
  },
  inputStyle1: {
    borderRadius: "5px",
    width: "100%",
  },
  inputStyle: {
    borderRadius: "5px",
    width: "100%",
    mt: 2,
  },
  submitButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    mt: 3,
  },
  buttonStyle: {
    background: "black",
    width: "130px",
    height: "45px",
    color: "white",
    fontWeight: 600,
    "&:hover": {
      background: "skyblue",
      color: "black",
      fontWeight: 600,
    },
  },
} as const;
export default NavContactStyle;

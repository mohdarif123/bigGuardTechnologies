const NavbarStyle = {
  mainWrapper: {
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: {
    //   xl: "0 5rem",
    //   lg: "0 4rem",
    //   md: "0 4rem",
    //   sm: "0 2rem",
    //   xs: "0 1rem",
    // },
    padding:"0 4rem",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
  },
  navLinkWrapper: {
    display: "flex",
    padding: "0 5px",
  },
  navLinkWrapper22: {
    position: "fixed",
    top: "-100vh",
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    background: "skyblue",
    transition: "1s",
    transform: "translateY(100vh)",
  },
  navLinkWrapper2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 5px",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "#000",
    },
  },
  navLink2: {
    textDecoration: "none",
    color: "white",
    margin: "0 10px",
    visibility: "hidden",
  },
  navigationText: {
    cursor: "pointer",
    margin: "0 1rem",
    "&:hover": {
      color: "#000",
    },
  },
  navigationText2: {
    cursor: "pointer",
    margin: "0 1rem",
    "&:hover": {
      color: "skyblue",
    },
  },
  activeNavigationText: {
    cursor: "pointer",
    margin: "0 1rem",
    color: "white",
    fontWeight: "bold",
    textDecoration: "underline white",
  },
  activeNavigationText2: {
    cursor: "pointer",
    margin: "0 1rem",
    color: "skyblue",
    fontWeight: "bold",
    textDecoration: "underline skyblue",
  },
  logoTextStyle: {
    color: "white",
    fontWeight: 700,
    fontFamily: "Helvetica, Sans-serif",
  },
  logoInnerText: {
    color: "white",
    fontWeight: 300,
    fontFamily: "Helvetica, Sans-serif",
  },
} as const;

export default NavbarStyle;

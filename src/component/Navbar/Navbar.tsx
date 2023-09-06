import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarStyle from "./Navbar.style";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const classes = NavbarStyle;
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMdUpScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [scolling, setScrolling] = useState(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [navTextActiveIndex, setNavTextActiveIndex] = useState<number>(0);

  const navigationData = [
    {
      text: "Home",
      key: "/",
    },
    {
      text: "About",
      key: "/about",
    },
    {
      text: "Services",
      key: "/services",
    },
    {
      text: "Contact us",
      key: "/contact",
    },
  ];

  useEffect(() => {
    scollingHandler();
  }, []);

  const scollingHandler = () => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  const drawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleTextActive = (navIndex: any) => {
    setNavTextActiveIndex(navIndex);
  };

  const getNavbar = () => {
    return (
      <>
        <Box
          sx={{
            ...classes.mainWrapper,
            background: scolling ? "#000" : "#05294f",
          }}
        >
          <Box>
            <Typography variant="h6" sx={classes.logoTextStyle}>
              BigGuard
            </Typography>
            <Typography variant="subtitle2" sx={classes.logoInnerText}>
              Technologies
            </Typography>
          </Box>
          <Box
            sx={
              openDrawer && isMdScreen
                ? classes.navLinkWrapper22
                : classes.navLinkWrapper
            }
          >
            {navigationData.map((items: any, index) => {
              return (
                <React.Fragment key={index}>
                  <NavLink
                    to={items.key}
                    key={index}
                    onClick={() => setOpenDrawer(false)}
                    style={
                      openDrawer || isMdUpScreen
                        ? classes.navLink
                        : classes.navLink2
                    }
                  >
                    <Typography
                      variant="body1"
                      sx={
                        navTextActiveIndex === index && scolling
                          ? classes.activeNavigationText2
                          : navTextActiveIndex === index
                          ? classes.activeNavigationText
                          : scolling
                          ? classes.navigationText2
                          : classes.navigationText
                      }
                      onClick={() => handleTextActive(index)}
                    >
                      {items.text}
                    </Typography>
                  </NavLink>
                </React.Fragment>
              );
            })}
          </Box>
          {isMdScreen && (
            <IconButton
              onClick={() => drawerHandler()}
              size="large"
              aria-label="open drawer"
            >
              {openDrawer ? (
                <CloseIcon style={{ color: "#fff" }} />
              ) : (
                <MenuIcon style={{ color: "#fff" }} />
              )}
            </IconButton>
          )}
        </Box>
      </>
    );
  };
  return getNavbar();
};

export default React.memo(Navbar);

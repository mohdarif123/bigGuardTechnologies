import { Box, Typography } from "@mui/material";
import React from "react";
import footerStyle from "./FooterStyle";

const Footer = () => {
    const classes = footerStyle;
    const currentYear = new Date().getFullYear();

    const getFooter = () => {
        return (
            <>
                <Box sx={classes.mainContainer}>
                    <Typography>&copy; {currentYear} BigGuard Technologies. All rights reserved.</Typography>
                </Box>
            </>
        )
    }
    return getFooter();
}
export default React.memo(Footer);
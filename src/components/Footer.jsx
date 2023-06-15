import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height={60}
      alignItems="center"
      sx={{ backgroundColor: "#11bae1" }}
    >
      <Typography variant="subtitle2">
        SINI &copy; copyright {new Date().getFullYear()}
      </Typography>
      <Typography variant="subtitle2">&nbsp; | &nbsp;</Typography>
      <NavLink to="/devs" style={{ textDecoration: "none" }}>
        <Typography variant="subtitle2" color="black">
          developers
        </Typography>
      </NavLink>
      <Outlet />
    </Box>
  );
};

export default Footer;

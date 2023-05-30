import { NavLink, Outlet } from "react-router-dom";
// import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import logo from "../assets/SINI.png";

const Navigation = () => {
  return (
    <>
      <Box
        display="flex"
        sx={{ backgroundColor: "#11bae1" }}
        justifyContent="space-between"
      >
        <Box padding={3}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="SINI" />
          </NavLink>
        </Box>
        <Box display="flex" padding={4}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h5" marginRight={3} color="#FFF">
              Home
            </Typography>
          </NavLink>
          <NavLink to="/devs" style={{ textDecoration: "none" }}>
            <Typography variant="h5" marginRight={3} color="#FFF">
              Devs
            </Typography>
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <Typography variant="h5" color="#FFF">
              About
            </Typography>
          </NavLink>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Navigation;

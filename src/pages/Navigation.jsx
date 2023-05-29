import { NavLink, Outlet } from "react-router-dom";
// import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Navigation = () => {
  return (
    <>
      <Box display="flex">
        <div className="LogoContainerStyle">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1>Movie App</h1>
          </NavLink>
        </div>
        <Box display="flex">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1>Home</h1>
          </NavLink>
          <NavLink to="/devs" style={{ textDecoration: "none" }}>
            <h1>Devs</h1>
          </NavLink>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Navigation;

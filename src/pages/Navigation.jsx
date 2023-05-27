import { NavLink, Outlet } from "react-router-dom";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const NavigationContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  display: "flex",
  justifyContent: "space-around",
  height: "7rem",
  backgroundColor: "red",
  maxwidth: "100%",
}));

const LogoContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  justifyContent: "center",
}));

const NavTabs = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
  color: "black",
}));

const CustomStyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  justifyContent: "center",
  textDecoration: "none",
  color: "black",
}));

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
          <NavLink to="/movies" style={{ textDecoration: "none" }}>
            <h1>Movies</h1>
          </NavLink>
          <CustomStyledNavLink exact to="/" activeClassName="active">
            Home
          </CustomStyledNavLink>
          <CustomStyledNavLink to="/about" activeClassName="active">
            About
          </CustomStyledNavLink>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Navigation;

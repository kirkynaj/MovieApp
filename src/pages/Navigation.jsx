import {  NavLink, Outlet } from "react-router-dom";
import { styled } from "@mui/system";



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
  color: "black"
  
}));

const CustomStyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  justifyContent: "center",
  textDecoration: "none",
  color: "black"
}));

const Navigation = () => {
  return (
    <>
      <NavigationContainerStyle>
        <LogoContainerStyle>
          <h1>Movie App</h1>
        </LogoContainerStyle>
        <NavTabs>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1>Home</h1>
          </NavLink>
          <CustomStyledNavLink exact to="/" activeClassName="active">Home</CustomStyledNavLink>
          <CustomStyledNavLink to="/about" activeClassName="active">About</CustomStyledNavLink>
        </NavTabs>
      </NavigationContainerStyle>
      <Outlet />
    </>
  );
};

export default Navigation;

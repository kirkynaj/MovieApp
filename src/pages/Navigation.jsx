import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="NavigationContainerStyle">
        <div className="LogoContainerStyle"></div>
        <div className="NavTabs">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1>Home</h1>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

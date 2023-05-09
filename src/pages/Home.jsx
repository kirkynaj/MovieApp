//import React, { useMemo, useState } from "react";
import { styled } from "@mui/system";

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const Home = () => {
  //const [searchMovie, setSearchMovie] = useState("");

  const handleChange = (e) => {
    //setSearchMovie(e.target.value.toLowerCase());
  };

  return (
    <>
      <MyThemeComponent>Home Page</MyThemeComponent>
      <div className="MainContainerStyle">
        <div className="SearchContainerStyle">
          <input
            className="SearchBoxStyle"
            onChange={handleChange}
            placeholder="Search Movies"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

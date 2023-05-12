import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";

import { getSearchMovies } from "../utils/Fetch";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const Home = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState();

  useEffect(() => {
    getSearchMovies(searchMovie).then((data) => {
      setMovies(data);
    });
  }, [searchMovie]);
  console.log("movies =>", movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", movies);
    // setSearchMovie(e.target.value.toLowerCase());
  };
  console.log("inputSearch =>", searchMovie);
  return (
    <>
      <MyThemeComponent>Home Page</MyThemeComponent>
      <div className="MainContainerStyle">
        <div className="SearchContainerStyle">
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setSearchMovie(e.target.value)}
              value={searchMovie}
            ></input>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="TrendingContainerStyle">
          <Trending />
        </div>
        <div className="PopularContainerStyle">
          <Popular />
        </div>
        <div className="TopRatedContainerStyle">
          <TopRated />
        </div>
        <div className="UpcomingContainerStyle">
          <Upcoming />
        </div>
      </div>
    </>
  );
};

export default Home;

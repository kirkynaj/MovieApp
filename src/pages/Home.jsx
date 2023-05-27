import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box, TextField, Button } from "@mui/material";

import { getSearchMovies } from "../utils/Fetch";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";
import Search from "../components/Search";
import { TableFooter } from '@mui/material';


// const MyThemeComponent = styled("div")(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius,
// }));

const MainContainerStyle = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin:"0",
}));

const FooterContainerStyle = styled("div")(({ theme }) => ({
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  margin:"0",
  padding: "10rem",
  backgroundColor: "red",
}));

const Home = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState();
  const [searchResults, setsearchResults] = useState();

  useEffect(() => {
    getSearchMovies(searchMovie).then((data) => {
      setMovies(data);
    });
  }, [searchMovie]);
  console.log("movies =>", movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("first", movies);
    setsearchResults(movies);
    // setSearchMovie(e.target.value.toLowerCase());
  };
  console.log("inputSearch =>", searchMovie);
  return (
    <>
      {/* <MyThemeComponent>Home Page</MyThemeComponent> */}
      <MainContainerStyle>
        <div className="SearchContainerStyle">
          {/* <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setSearchMovie(e.target.value)}
              value={searchMovie}
            ></input>
            <button type="submit">Search</button>
          </form> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch", height: "8ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setSearchMovie(e.target.value)}
              value={searchMovie}
            />
            <Button variant="contained" type="submit">
              Search
            </Button>
          </Box>
        </div>
        <div className="SearchResultContainerStyle">
          <Search searchResults={searchResults} />
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
        
      </MainContainerStyle>
      <FooterContainerStyle>
          <h2>Something</h2>
        </FooterContainerStyle>

    </>
  );
};

export default Home;

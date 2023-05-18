import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "../utils/Fetch";
import { styled } from "@mui/system";

import { Typography } from "@mui/material";

const TopRatedContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.main,
  padding: "10px",
}));

const TopRatedCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

const TopRatedCardStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.secondary.main,
  width: "200px",
  padding: "10px",
  margin: "15px",
  borderRadius: theme.shape.borderRadius,
}));

const TopRated = () => {
  const [topRated, setTopRated] = useState();

  useEffect(() => {
    getTopRatedMovies().then((data) => {
      setTopRated(data);
    });
  }, []);

  return (
    <>
      <TopRatedContainerStyle>
        <Typography variant="h4" display="block" fontWeight="bold">
          Top Rated
        </Typography>
        <p>view all</p>
        <TopRatedCardContainerStyle>
          {topRated &&
            topRated.slice(0, 6).map((movie) => {
              return (
                <>
                  <TopRatedCardStyle>
                    <img
                      src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
                      alt="Movie Poster"
                      width="200px"
                    />
                    <h3>{movie.title || movie.name}</h3>
                  </TopRatedCardStyle>
                </>
              );
            })}
        </TopRatedCardContainerStyle>
      </TopRatedContainerStyle>
    </>
  );
};

export default TopRated;

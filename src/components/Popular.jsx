import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../utils/Fetch";

import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const MostPopContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  padding: "10px",
}));

const MostPopCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

const MostPopCardStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.secondary.main,
  width: "200px",
  padding: "10px",
  margin: "15px",
  borderRadius: theme.shape.borderRadius,
}));

const Popular = () => {
  const [popular, setPopular] = useState();

  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopular(data);
    });
  }, []);

  return (
    <>
      <MostPopContainerStyle>
        <Typography variant="h4" display="block" fontWeight="bold">
          Most Popular
        </Typography>
        <p>view all</p>
        <MostPopCardContainerStyle>
          {popular &&
            popular.slice(0, 6).map((movie) => {
              return (
                <>
                  <MostPopCardStyle>
                    <img
                      src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
                      alt="Movie Poster"
                      width="200px"
                    />
                    <h3>{movie.title || movie.name}</h3>
                  </MostPopCardStyle>
                </>
              );
            })}
        </MostPopCardContainerStyle>
      </MostPopContainerStyle>
    </>
  );
};

export default Popular;

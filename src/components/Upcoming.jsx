import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../utils/Fetch";

import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const UpcomingContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  padding: "10px",
}));

const UpcomingCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

const UpcomingCardStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.secondary.main,
  width: "200px",
  padding: "10px",
  margin: "15px",
  borderRadius: theme.shape.borderRadius,
}));

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState();

  useEffect(() => {
    getUpcomingMovies().then((data) => {
      setUpcoming(data);
    });
  }, []);

  return (
    <>
      <UpcomingContainerStyle>
        <Typography variant="h4" display="block" fontWeight="bold">
          Coming Soon...
        </Typography>
        <p>view all</p>
        <UpcomingCardContainerStyle>
          {upcoming &&
            upcoming.slice(0, 6).map((movie) => {
              return (
                <>
                  <UpcomingCardStyle>
                    <img
                      src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
                      alt="Movie Poster"
                      width="200px"
                    />
                    <h3>{movie.title || movie.name}</h3>
                  </UpcomingCardStyle>
                </>
              );
            })}
        </UpcomingCardContainerStyle>
      </UpcomingContainerStyle>
    </>
  );
};

export default Upcoming;

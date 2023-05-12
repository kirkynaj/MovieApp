import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../utils/Fetch";
import { styled } from "@mui/system";

const UpcomingContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  justifyContent: "center",
}));

const UpcomingCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

const UpcomingCardStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  width: "200px",
  padding: "10px",
  margin: "15px",
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
        <h2>Coming Soon...</h2>
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

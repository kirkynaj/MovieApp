import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "../utils/Fetch";
import { styled } from "@mui/system";

const TopRatedContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.main,
  justifyContent: "center",
}));

const TopRatedCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

const TopRatedCardStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  width: "200px",
  padding: "10px",
  margin: "15px",
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
        <h2>Top Rated</h2>
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

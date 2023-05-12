import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../utils/Fetch";
import { styled } from "@mui/system";

const MostPopContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  justifyContent: "center",
}));

const MostPopCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

const MostPopCardStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.secondary,
  width: "200px",
  padding: "10px",
  margin: "15px",
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
        <h2>Most Popular</h2>
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

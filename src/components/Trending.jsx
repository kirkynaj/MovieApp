import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../utils/Fetch";
import { styled } from "@mui/system";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";

const TrendContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.primary.textMain,
  background: theme.palette.primary.main,
  justifyContent: "center",
}));

const TrendCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

// const TrendCardStyle = styled("div")(({ theme }) => ({
//   color: theme.palette.primary.textMain,
//   background: theme.palette.primary.secondary,
//   width: "200px",
//   padding: "10px",
//   margin: "15px",
// }));

const Trending = () => {
  const [trending, setTrending] = useState();

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setTrending(data);
    });
  }, []);
  console.log("trending =>", trending);

  return (
    <>
      <TrendContainerStyle>
        <h2>Trending Movies</h2>
        <p>view all</p>
        <TrendCardContainerStyle>
          {trending &&
            trending.slice(0, 6).map((movie) => {
              // console.log("movie =>", movie);
              return (
                <>
                  <Card sx={{ maxWidth: 345 }} key={movie.id}>
                    <CardMedia
                      component="img"
                      height="300"
                      alt="Movie Poster"
                      image={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
                    />
                  </Card>
                  {/* <TrendCardStyle>
                    <img
                      src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
                      alt="Movie Poster"
                      width="200px"
                    />
                    <h3>{movie.title || movie.name}</h3>
                  </TrendCardStyle> */}
                </>
              );
            })}
        </TrendCardContainerStyle>
      </TrendContainerStyle>
    </>
  );
};

export default Trending;

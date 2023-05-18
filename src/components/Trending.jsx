import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../utils/Fetch";
import noPoster from "../assets/no-poster-available.jpg";

import { styled } from "@mui/material";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const TrendContainerStyle = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.primary.main,
  padding: "10px",
}));

const TrendCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

// const TrendCardStyle = styled("div")(({ theme }) => ({
//   color: theme.palette.primary.textMain,
//   background: theme.palette.secondary.main,
//   width: "200px",
//   padding: "10px",
//   margin: "15px",
//   borderRadius: theme.shape.borderRadius,
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
        <Typography variant="h4" display="block" fontWeight="bold">
          Trending
        </Typography>
        <p>view all</p>
        <TrendCardContainerStyle>
          {trending &&
            trending.slice(0, 6).map((movie) => {
              // console.log("movie =>", movie);
              return (
                <>
                  <Card sx={{ width: 230 }}>
                    {movie.poster_path === null ? (
                      <CardMedia
                        sx={{ height: 300 }}
                        image={noPoster}
                        title="Poster Not Available"
                        alt="No Poster Available"
                      />
                    ) : (
                      <CardMedia
                        sx={{ height: 300 }}
                        image={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
                        title={movie.title || movie.name}
                        alt="Movie Poster"
                      />
                    )}

                    <CardContent>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {movie.release_date.slice(0, 4)}
                      </Typography>
                      <Typography variant="h5" display="block" gutterBottom>
                        {movie.title || movie.name}
                      </Typography>
                      <Button variant="outlined">View Info</Button>
                    </CardContent>
                  </Card>
                  {/* <TrendCardStyle>
                    <img
                      src={`https://www.themoviedb.org/t/p/w1280${movie.poster_path}`}
                      alt="Movie Poster"
                      width="200px"
                    />
                    <Typography variant="caption" display="block" gutterBottom>
                      {movie.release_date.slice(0, 4)}
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                      {movie.title || movie.name}
                    </Typography>
                    <Button variant="outlined" size="medium">
                      View Info
                    </Button>
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

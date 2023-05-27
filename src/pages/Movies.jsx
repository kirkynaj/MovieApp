import React, { useState, useEffect } from "react";
import { getMovieDetails, getMovies } from "../utils/Fetch";
import noPoster from "../assets/no-poster-available.jpg";

import { styled } from "@mui/system";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const MovieCardContainerStyle = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexWrap: "wrap",
}));

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState();
  const [page, setPage] = useState(1);
  const movieID = movies.map((movie) => movie.id);
  console.log("movie ID", movieID);
  const idCount = movieID.length;
  useEffect(() => {
    getMovies(page).then((data) => {
      setMovies(data);
    });
  }, []);

  useEffect(() => {
    getMovieDetails().then((data) => {
      setMovieDetails(data);
    });
  }, []);

  console.log("movie list =>", movies);

  return (
    <>
      {movies &&
        movies.map((movie) => {
          return (
            <>
              <Typography variant="h5">{movie.id}</Typography>
              <br />
            </>
          );
        })}

      {/* <Container maxWidth="xl">
        <Typography variant="h4" display="block" fontWeight="bold">
          Movie List
        </Typography>
        <MovieCardContainerStyle>
          {movies &&
            movies.map((movie) => {
              return (
                <>
                  <Card sx={{ width: 230 }}>
                    {movie.poster_path === null ? (
                      <CardMedia
                        sx={{ height: 330 }}
                        image={noPoster}
                        title="Poster Not Available"
                        alt="No Poster Available"
                        key={movie.id}
                      />
                    ) : (
                      <CardMedia
                        sx={{ height: 330 }}
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
                      <Typography
                        variant="subtitle"
                        display="block"
                        gutterBottom
                      >
                        {movie.title || movie.name}
                      </Typography>
                      <Button variant="outlined">View Info</Button>
                    </CardContent>
                  </Card>
                </>
              );
            })}
        </MovieCardContainerStyle>
      </Container> */}
    </>
  );
};
export default Movies;

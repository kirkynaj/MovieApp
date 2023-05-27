import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../utils/Fetch";
import noPoster from "../assets/no-poster-available.jpg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

// import { styled } from "@mui/material";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Container,
  Box,
} from "@mui/material";

const Trending = () => {
  const [trending, setTrending] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setTrending(data);
    });
  }, []);
  console.log("trending =>", trending);

  const handleClickSingle = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          display="block"
          fontWeight="bold"
          marginTop={3}
        >
          Trending
        </Typography>
        <NavLink to="/trending" style={{ textDecoration: "none" }}>
          <Button variant="text" color="success">
            view all
          </Button>
        </NavLink>
        <Outlet />
        <Box display="flex" padding={3} flexWrap="wrap" justifyContent="center">
          {trending &&
            trending.slice(0, 5).map((movie) => {
              // console.log("movie =>", movie);
              return (
                <>
                  <Card
                    sx={{
                      width: 230,
                      margin: 1,
                      // "&:hover": {
                      //   backgroundColor: "primary.main",
                      //   opacity: [0.9, 0.8, 0.7],
                      // },
                    }}
                  >
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
                      <Button
                        variant="outlined"
                        onClick={() => handleClickSingle(movie.id)}
                      >
                        View Info
                      </Button>
                    </CardContent>
                  </Card>
                </>
              );
            })}
        </Box>
      </Container>
    </>
  );
};

export default Trending;

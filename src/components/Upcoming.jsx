import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../utils/Fetch";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import noPoster from "../assets/no-poster-available.jpg";
// import { styled } from "@mui/system";

import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
} from "@mui/material";

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState();
  const navigate = useNavigate();
  const page = 1;

  useEffect(() => {
    getUpcomingMovies(page).then((data) => {
      setUpcoming(data);
    });
  }, []);

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
          marginTop={2}
        >
          Coming Soon...
        </Typography>
        <NavLink to="/upcoming" style={{ textDecoration: "none" }}>
          <Button variant="text" color="success">
            view all
          </Button>
        </NavLink>
        <Outlet />
        <Box display="flex" flexWrap="wrap" padding={3} justifyContent="center">
          {upcoming &&
            upcoming.slice(0, 5).map((movie) => {
              return (
                <>
                  <Card
                    sx={{
                      width: 230,
                      margin: 1,
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

export default Upcoming;

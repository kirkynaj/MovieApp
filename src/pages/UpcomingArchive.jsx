import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../utils/Fetch";
import noPoster from "../assets/no-poster-available.jpg";
import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/material";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Pagination,
  Stack,
  Container,
  Box,
} from "@mui/material";
import { HashLoader } from "react-spinners";

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const totalPages = 3;

  useEffect(() => {
    setIsLoading(true);
    getUpcomingMovies(page).then((data) => {
      setUpcoming(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }, [page]);

  const handlePageChange = (event, value) => {
    console.log("value", value);
    setPage(value);
  };

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
          textAlign="center"
          marginTop={5}
        >
          Coming Soon...
        </Typography>
        <Stack spacing={2} alignItems="center" marginBottom={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            size="large"
          />
        </Stack>
        {isLoading ? (
          <Box display="flex" justifyContent="center" margin={20}>
            <HashLoader
              color={"#11bae1"}
              loading={isLoading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={2}
            />
          </Box>
        ) : (
          <Box
            display="flex"
            flexWrap="wrap"
            padding={3}
            justifyContent="center"
          >
            {upcoming &&
              upcoming.map((movie) => {
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
        )}
        <Stack spacing={2} alignItems="center" marginTop={2} marginBottom={5}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            size="large"
          />
        </Stack>
      </Container>
    </>
  );
};

export default Upcoming;

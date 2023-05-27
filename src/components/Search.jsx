import React, { useState, useEffect } from "react";
import noPoster from "../assets/no-poster-available.jpg";
import { getSearchMovies } from "../utils/Fetch";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Box,
  Button,
  Container,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { HashLoader } from "react-spinners";

const ResultCardContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  margin: "10px",
  width: "20rem",
}));

const Search = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState();
  const [searchResults, setsearchResults] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSearchMovies(searchMovie).then((data) => {
      setMovies(data);
    });
  }, [searchMovie]);
  // console.log("movies =>", movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setsearchResults(movies);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  // console.log("search results =>", searchResults);

  const handleClick = () => {
    setsearchResults("");
  };

  const handleClickSingle = (id) => {
    navigate(`/movie/${id}`);
  };

  // const handleClickNext = () => {
  //   setPage(page + 1);
  // };

  // const handleClickPrevious = () => {
  //   setPage(page - 1);
  // };

  return (
    <>
      <Container maxWidth="xl">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "40ch", height: "8.5ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => setSearchMovie(e.target.value)}
            value={searchMovie}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </Box>
      </Container>
      {!searchResults ? (
        <></>
      ) : isLoading ? (
        <Container maxWidth="xl" key={movies.id}>
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
        </Container>
      ) : (
        <Container maxWidth="xl">
          <Typography variant="h4" display="block" fontWeight="bold">
            Search Results
          </Typography>
          <Button variant="text" color="success" onClick={handleClick}>
            clear
          </Button>
          <Box
            display="flex"
            flexWrap="wrap"
            padding={3}
            justifyContent="center"
          >
            {searchResults &&
              searchResults.map((movie) => {
                return (
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
                );
              })}
          </Box>
          {/* <Button
            variant="outlined"
            onClick={handleClickPrevious}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button variant="outlined" onClick={handleClickNext}>
            Next
          </Button> */}
        </Container>
      )}
    </>
  );
};
export default Search;

import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../utils/Fetch";
import noPoster from "../assets/no-poster-available.jpg";
import { useNavigate } from "react-router-dom";
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
import { HashLoader } from "react-spinners";
import Footer from "../components/Footer";

const TrendingArchive = () => {
  const [trending, setTrending] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies().then((data) => {
      setTrending(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }, []);
  // console.log("trending =>", trending);

  const handleClickSingle = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
        <Typography
          variant="h4"
          display="block"
          fontWeight="bold"
          marginTop={5}
          textAlign="center"
        >
          Trending Movies
        </Typography>
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
            {trending &&
              trending.map((movie) => {
                // console.log("movie =>", movie);
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
      </Container>
      <Footer />
    </>
  );
};

export default TrendingArchive;

import React, { useState, useEffect } from "react";
import { getNowPlaying } from "../utils/Fetch";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

import { Box, Typography, CardMedia, Card, Button } from "@mui/material";

const Hero = () => {
  const [latestMovie, setLatestMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getNowPlaying().then((data) => {
      setLatestMovie(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }, []);
  const backdropMovie = latestMovie[Math.floor(Math.random() * 21)];
  // console.log("latest movie =>", latestMovie);
  // console.log("backdrop =>", backdropMovie);

  const handleClickSingle = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
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
        <Box key={backdropMovie?.id} height="auto" marginBottom={5}>
          <Card sx={{ maxWidth: "vw" }}>
            <CardMedia
              sx={{
                height: 600,
                objectFit: "contain",
                // opacity: 0.5,
              }}
              image={`https://www.themoviedb.org/t/p/w1280${backdropMovie?.backdrop_path}`}
              alt="Movie Poster"
            >
              <Box width={400} paddingTop={12} paddingLeft={10}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="#FFF"
                  sx={{ textShadow: "2px 2px 4px #000000" }}
                >
                  Featured Movie:
                </Typography>
                <Card
                  sx={{
                    width: 200,
                    margin: 1,
                  }}
                >
                  <CardMedia
                    sx={{ height: 300, boxShadow: 10 }}
                    image={`https://www.themoviedb.org/t/p/w1280${backdropMovie?.poster_path}`}
                    title={backdropMovie?.title}
                    alt="Movie Poster"
                  />
                </Card>
                <Typography
                  variant="h4"
                  padding={1}
                  color="#FFF"
                  sx={{ textShadow: "1px 1px 1px #000000" }}
                >
                  {backdropMovie?.title}
                </Typography>
                <Button
                  sx={{
                    margin: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                  variant="contained"
                  onClick={() => handleClickSingle(backdropMovie?.id)}
                >
                  View Info
                </Button>
              </Box>
            </CardMedia>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Hero;

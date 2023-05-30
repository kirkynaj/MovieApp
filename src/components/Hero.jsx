import React, { useState, useEffect } from "react";
import { getNowPlaying } from "../utils/Fetch";
import { useNavigate } from "react-router-dom";

import { Box, Typography, CardMedia, Card, Button } from "@mui/material";

const Hero = () => {
  const [latestMovie, setLatestMovie] = useState([]);
  const backdropMovie = latestMovie[1];
  const navigate = useNavigate();

  useEffect(() => {
    getNowPlaying().then((data) => {
      setLatestMovie(data);
    });
  }, []);
  // console.log("latest movie =>", latestMovie);
  // console.log("backdrop =>", backdropMovie);

  const handleClickSingle = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
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
            <Box width={500} paddingTop={5} paddingLeft={10}>
              <Typography variant="h4" fontWeight="bold" color="#FFF">
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
              <Typography variant="h4" padding={1} color="#FFF">
                {backdropMovie?.title}
              </Typography>
              <Typography variant="h5"></Typography>
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
    </>
  );
};

export default Hero;

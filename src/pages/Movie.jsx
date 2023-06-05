import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import noPoster from "../assets/no-poster-available.jpg";
import { getCredits, getImageLists, getMovieDetails } from "../utils/Fetch";

import {
  Container,
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Typography,
  Avatar,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Footer from "../components/Footer";

const Movie = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [images, setImages] = useState();
  const [casts, setCasts] = useState();
  // const [crews, setCrews] = useState();

  const movieID = params.id;
  const voteAve = movieDetails.vote_average;
  const percentValue = (voteAve * 100).toFixed(2);
  // const popularity = movieDetails.popularity;
  // const percentValuePop = (popularity * 100).toFixed(2);
  const releaseDate = movieDetails.release_date;

  useEffect(() => {
    getMovieDetails(movieID).then((data) => {
      setMovieDetails(data);
    });
    getImageLists(movieID).then((data) => {
      setImages(data.backdrops);
    });
    getCredits(movieID).then((data) => {
      setCasts(data.cast);
      // setCrews(data.crew);
    });
  }, [movieID]);
  console.log("movie details =>", movieDetails);

  console.log("casts =>", casts);

  return (
    <>
      <Container maxWidth="vw">
        <Box marginBottom={10} marginTop={3}>
          <CardMedia
            sx={{
              height: 400,
              width: "100%",
              borderRadius: 3,
              boxShadow: 10,
              objectFit: "cover",
            }}
            image={`https://www.themoviedb.org/t/p/w1280${movieDetails.backdrop_path}`}
            alt="Movie backdrop"
          />
          <Box display="flex" padding={3} marginTop={-12} flexWrap="wrap">
            <Card
              sx={{
                width: 230,
                margin: 1,
              }}
            >
              {movieDetails.poster_path === null ? (
                <CardMedia
                  sx={{ height: 330, boxShadow: 10 }}
                  image={noPoster}
                  title="Poster Not Available"
                  alt="No Poster Available"
                  key={movieDetails.id}
                />
              ) : (
                <CardMedia
                  sx={{ height: 330, boxShadow: 10 }}
                  image={`https://www.themoviedb.org/t/p/w1280${movieDetails.poster_path}`}
                  title={movieDetails.title || movieDetails.name}
                  alt="Movie Poster"
                />
              )}
            </Card>
            <Box padding={3} marginTop={10}>
              <Box>
                <Typography variant="h4" display="block" fontWeight="bold">
                  {movieDetails.title} ({releaseDate?.slice(0, 4)})
                </Typography>
                <Box display="flex">
                  {movieDetails.genres?.map((genre) => (
                    <Typography
                      variant="subtitle1"
                      paddingTop={1}
                      marginRight={1}
                    >
                      | {genre.name} |
                    </Typography>
                  ))}
                </Box>
                <Typography variant="subtitle1" paddingTop={1}>
                  Runtime: {movieDetails.runtime}m
                </Typography>
                <Typography variant="subtitle1" paddingTop={1}>
                  Vote Count: {movieDetails.vote_count}
                </Typography>
              </Box>
              <Box display="flex" paddingTop={1}>
                <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={percentValue.slice(0, 2)}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      color="textSecondary"
                    >
                      {`${Math.round(percentValue.slice(0, 2))}%`}
                    </Typography>
                  </Box>
                </Box>
                <Box paddingLeft={1} paddingTop={1}>
                  <Typography variant="subtitle1">User Score</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Container width="xl">
            <Typography variant="h5" fontWeight="bold">
              Overview:
            </Typography>
            <Typography variant="h6" padding={3}>
              {movieDetails.overview}
            </Typography>
            <Typography variant="h5" fontWeight="bold" marginTop={5}>
              Casts:
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
              {casts?.map((cast) => {
                return (
                  <Box display="block" margin={5} sx={{ maxWidth: 100 }}>
                    <Avatar
                      alt={cast.name}
                      src={`https://www.themoviedb.org/t/p/w1280${cast.profile_path}`}
                      sx={{ width: 80, height: 80 }}
                    />
                    <Typography variant="h6">{cast.name}</Typography>
                    <Typography variant="subtitle2">
                      {cast.character}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box flexWrap="wrap" marginTop={5}>
              <Typography variant="h5" fontWeight="bold">
                Backdrop Images:
              </Typography>
              <ImageList cols={2} variant="quilted" sx={{ padding: 3 }}>
                {images?.map((image) => (
                  <ImageListItem>
                    <img
                      src={`https://www.themoviedb.org/t/p/w1280${image.file_path}`}
                      alt="Backdrop Images"
                      loading="lazy"
                    />
                    {/* <ImageListItemBar
                      title={movieDetails.title}
                      actionIcon={<StarBorderIcon />}
                    /> */}
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Container>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
export default Movie;

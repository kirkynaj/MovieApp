import React from "react";
import noPoster from "../assets/no-poster-available.jpg";

import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const ResultCardContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  margin: "10px",
}));

const Search = ({ searchResults }) => {
  console.log("search results =>", searchResults);

  return (
    <>
      {!searchResults ? (
        <div></div>
      ) : (
        <div>
          <Typography variant="h4" display="block" fontWeight="bold">
            Search Results
          </Typography>
          <ResultCardContainerStyle>
            {searchResults &&
              searchResults.map((movie) => {
                return (
                  <Card sx={{ width: 200 }}>
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
                );
              })}
          </ResultCardContainerStyle>
        </div>
      )}
    </>
  );
};
export default Search;

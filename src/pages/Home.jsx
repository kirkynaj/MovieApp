import React from "react";
// import { styled } from "@mui/system";
import { Container, Box } from "@mui/material";

import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <Container maxWidth="100%" sx={{ margin: 0, padding: 0 }}>
        <Box>
          <Search />
        </Box>
        <Box bgcolor="#FAFAFA" margin={0}>
          <Trending />
        </Box>
        <Box>
          <Popular />
        </Box>
        <Box bgcolor="#FAFAFA" margin={0}>
          <TopRated />
        </Box>
        <Box>
          <Upcoming />
        </Box>
      </Container>
    </>
  );
};

export default Home;

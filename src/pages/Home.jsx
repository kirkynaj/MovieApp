import React from "react";
// import { styled } from "@mui/system";
import { Box } from "@mui/material";

import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";
import Search from "../components/Search";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Box width="100%">
        <Box>
          <Hero />
        </Box>
        <Box>
          <Search />
        </Box>
        <Box bgcolor="#FAFAFA">
          <Trending />
        </Box>
        <Box>
          <Popular />
        </Box>
        <Box bgcolor="#FAFAFA">
          <TopRated />
        </Box>
        <Box>
          <Upcoming />
        </Box>
      </Box>
      <Box>
        <h2>Something</h2>
      </Box>
    </>
  );
};

export default Home;

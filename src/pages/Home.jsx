import React from "react";
import { styled } from "@mui/system";
import { Container, Box } from "@mui/material";

import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";
import Search from "../components/Search";
import { TableFooter } from "@mui/material";

// const MyThemeComponent = styled("div")(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius,
// }));

// const MainContainerStyle = styled("div")(({ theme }) => ({
//   width: "100%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   margin: "0",
// }));

// const FooterContainerStyle = styled("div")(({ theme }) => ({
//   width: "100%",
//   flexDirection: "column",
//   justifyContent: "center",
//   margin: "0",
//   padding: "10rem",
//   backgroundColor: "#11bae1",
// }));

const Home = () => {
  return (
    <>
      <Box width="100%">
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
      </Box>
      <Box width="100%">
        <h2>Something</h2>
      </Box>
    </>
  );
};

export default Home;

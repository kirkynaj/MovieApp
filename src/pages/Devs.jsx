import React from "react";

import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import kirkPic from "../assets/16712217.jpeg";
import OrwillePic from "../assets/Orwille.png";

const Devs = () => {
  return (
    <>
      <Box>
        <Typography variant="h3" alignContent={"center"}>
          Two devs one project
        </Typography>
        <Container maxWidth="sm">
          <img src="" alt="" />
          <Grid container spacing={20} flexDirection={"column"}>
            <Grid item xs={12} sm={6} md={10}>
              {
                <Box>
                  <Avatar
                    alt="Dev Name"
                    src={kirkPic}
                    sx={{ width: 400, height: 400 }}
                  />
                  <Typography variant="h3">Kirk</Typography>
                  <Typography variant="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque sunt repudiandae consectetur asperiores reiciendis
                    optio, inventore enim quidem rerum nostrum. Odio quia omnis
                    tempore. Aliquam natus nihil ullam iusto soluta.
                  </Typography>
                </Box>
              }
            </Grid>
            <Grid item xs={12} sm={6} md={10}>
              <Box justifyContent="center" alignItems="center">
                <Avatar
                  alt="Dev Name"
                  src={OrwillePic}
                  sx={{ width: 400, height: 400 }}
                />
                <Typography variant="h3">Orwille</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque sunt repudiandae consectetur asperiores reiciendis
                  optio, inventore enim quidem rerum nostrum. Odio quia omnis
                  tempore. Aliquam natus nihil ullam iusto soluta.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Devs;

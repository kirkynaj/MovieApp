import React from "react";

import { Box, Typography, Container, Grid, Avatar, Card } from "@mui/material";
import kirkPic from "../assets/16712217.jpeg";
import OrwillePic from "../assets/Orwille.png";


const Devs = () => {
  return (
    <>
      <Box >
        <Typography 
        variant="h3" 
        align="center"
        padding={10}
        >
          Two devs one project
        </Typography>
        <Container style={{ display: 'flex', justifyContent: 'center' }}
        
        maxWidth="sm">
          <img src="" alt="" />
          <Box container spacing={20} align="center" direction="column">
           
              
                <Card>
                  <Avatar
                    alt="Dev Name"
                    src={kirkPic}
                    sx={{ width: 400, height: 400 }}
                  />
                  <Typography variant="h3" align="center"
                  padding={5}>Kirk</Typography>
                  <Typography variant="p"
                  padding={5}>
                  Never stop learning... Opportunities may come.
                  </Typography>
                </Card>
              
            
            
              <Card justifyContent="center" alignItems="center" padding={10}>
                <Avatar
                  
                  alt="Dev Name"
                  src={OrwillePic}
                  sx={{ width: 400, height: 400 }}
                />
                <Typography variant="h3" align="center" padding={5}>Orwille</Typography>
                <Typography variant="p" align="center" padding={5}>
                Graphic designer, web developer in the making, outdoor enthusiast
                </Typography>
              </Card>
           
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Devs;

import React from "react";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <>
      <Box><Typography 
       variant="h1" 
       color="initial"
       padding={20}
       >TMDB's API
       </Typography>
       <Typography 
       variant="h4" 
       color="initial"
       padding={20}
       >The API service is for those of you interested in using our movie, TV show or actor images and/or data in your application. Our API is a system we provide for you and your team to programmatically fetch and use our data and/or images.
       </Typography>
       <Typography 
       variant="h4" 
       color="initial"
       padding={20}
       >We do not claim ownership of any of the images or data in the API. We comply with the Digital Millennium Copyright Act (DMCA) and expeditiously remove infringing content when properly notified. Any data and/or images you upload you expressly grant us a license to use. You are prohibited from using the images and/or data in connection with libelous, defamatory, obscene, pornographic, abusive or otherwise offensive content.
       </Typography>
      </Box>
    </>
  );
};
export default About;

import React, {useEffect,useRef} from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import {Typed} from 'react-typed';

const AboutMe = () => {
  const name = "Your Name"; // Replace with your name
  const description = "A brief description about yourself..."; // Replace with your description
  const profilePicture = "path/to/your/profile-picture.jpg"; // Replace with your profile picture path
//   const descriptionRef = useRef(null);

//   useEffect(() => {
//     if (descriptionRef.current) {
//       new Typed(descriptionRef.current, {
//         strings: [description],
//         typeSpeed: 120,
//         loop: true,
//       });
//     }
//   }, [description]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#e7e9f0',
        borderRadius: '8px',
        margin: '20px',
        color:"#051747"
      }}
    >
      <Avatar
        alt={name}
        src={profilePicture}
        sx={{ width: 100, height: 100, marginBottom: '16px' }}
      />
      <Typography variant="h4" component="h2" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" align="center">
       {description}
      {/* <Typography variant="body1" align="center" ref={descriptionRef}/> */}
      </Typography>
    </Box>
  );
};

export default AboutMe;
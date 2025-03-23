import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const MyWork = () => {
  const projects = [
    {
      title: "Project One",
      description: "Description of project one...",
      image: "path/to/project-one-image.jpg", // Replace with your project image path
      link: "https://link-to-project-one.com" // Replace with your project link
    },
    {
      title: "Project Two",
      description: "Description of project two...",
      image: "path/to/project-two-image.jpg", // Replace with your project image path
      link: "https://link-to-project-two.com" // Replace with your project link
    },
    // Add more projects as needed
  ];

  return (
    <Box sx={{ padding: '20px',backgroundColor: '#FEFEFE', color:"#051747" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        My Work
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#e7e9f0' }}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography variant="body2" color="primary">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyWork;

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import {Box} from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box  sx={{backgroundColor: "#FEFEFE", }}>
    <App />
    </Box>
  </React.StrictMode>
);


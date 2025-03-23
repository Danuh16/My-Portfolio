import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import rootReducer from './redux/reducers';
import { Box } from '@mui/material';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Box >
        <Header />
        <AboutMe />
        <MyWork />
        <Contact />
      </Box>
    </Provider>
  );
}

export default App;

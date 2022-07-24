import React from 'react';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import { SliderBar } from './components/Navbar/sliderNav';

const App = () => (
  <>
    <Navbar />
    <SliderBar />
    <Main />
  </>
);

export default App;

import React from 'react';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import { SliderBar } from './components/Navbar/sliderNav';
import PopUp from "./components/PopUp/PopUp"

const App = () => (
  <>
    <Navbar />
    <SliderBar />
    <Main />
    <PopUp />
  </>
);

export default App;

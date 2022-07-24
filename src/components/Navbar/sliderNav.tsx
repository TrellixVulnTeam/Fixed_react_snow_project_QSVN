import React from 'react';
import { sliderPics } from '../../assets';

const sliderNav = [
  { text: 'Love' },
  { text: 'Adventure' },
  { text: 'Fun' },
  { text: 'friendship' },
  { text: 'freedom' },
  { text: 'nature' },
];

const pics = sliderNav.map((slide, index) => (
  <img key={`slide${index}`} className="slider__img" alt="" src={sliderPics[index]} />
));

const txt = sliderNav.map((slide) => (
  <p className="slider__text" key={`a${slide.text}`}>
    {slide.text}
  </p>
));

export const SliderBar = () => (
  <div className="slider home__slider">
    {pics}
    {txt}
  </div>
);

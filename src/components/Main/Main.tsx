import React from 'react';
import { navNames } from '../Navbar/Navbar';
import { About } from './components/About/About';
import { Calendar } from './components/Calendar/Calendar';
import { News } from './components/News/News';
import { Membership } from './components/Membership/Membership';
import { HOC } from './components/HOC';
import './Main.scss';

const temArray = navNames.filter((item) => item !== 'home');

const tempObject: { [key: string]: JSX.Element | null } = {
  about: <About />,
  calendar: <Calendar />,
  membership: <Membership />,
  partners: null,
  news: <News />,
  contact: null,
};

const getSectionsBlocks = temArray.map((name) => (
  <HOC name={name} content={tempObject[name]} key={name} />
));

export const Main = () => <main>{getSectionsBlocks}</main>;
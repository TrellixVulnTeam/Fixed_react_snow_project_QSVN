import React from 'react';
import { calendarData } from './Calendar.data';

const eventItems = calendarData.map((item) => (
  <React.Fragment key={item.title}>
    <h3 className="calendar__subtitle--minor">{item.title}</h3>
    <p className="paragraph calendar__paragraph--date">
      {item.date}
      <strong>{item.city}</strong>
    </p>
    <p className="paragraph calendar__paragraph">{item.about}</p>
  </React.Fragment>
));

export const Calendar = () => (
  <>
    <h1 className="section__title">Calendar</h1>
    <div className="calendar__content">
      <h2 className="calendar__subtitle--main">Upcoming Events</h2>
      {eventItems}
    </div>
  </>
);

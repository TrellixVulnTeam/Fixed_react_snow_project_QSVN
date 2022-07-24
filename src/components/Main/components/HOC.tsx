import React from 'react';
import { picsObj } from '../../../assets';

type HOCProps = {
  name: string;
  content: JSX.Element | null;
};

export const HOC = ({ name, content }: HOCProps) => {
  const condition = name !== 'about' && (
    <>
      <div className="interlude">
        <img
          className="interlude__img interlude__img--before-calendar"
          src={picsObj[name]}
          alt={''}
        />
      </div>
      <div id={`${name}`}></div>
    </>
  );

  return (
    <>
      {condition}
      <section className={`section ${name}`}>{content}</section>
    </>
  );
};

import { useEffect, useState } from 'react';

interface NewsProps {
  image: string;
  title: string;
  description: string;
}

enum ButtonName {
  more = 'more',
  less = 'less',
}

const extendStyles = {
  height: '100%',
  WebkitLineClamp: '999999',
};

export const NewsContainer = ({ image, title, description }: NewsProps) => {
  const [btnName, setbtnName] = useState<ButtonName>(ButtonName.more);
  const [pStyle, setpStyle] = useState<undefined | typeof extendStyles>(extendStyles);

  function clickHandler() {
    setbtnName(btnName === ButtonName.more ? ButtonName.less : ButtonName.more);
  }

  useEffect(() => {
    setpStyle(btnName === ButtonName.more ? undefined : extendStyles);
  }, [btnName]);

  return (
    <div className="news-container">
      <img className="news__img news__img--main" src={image} alt="???" />
      <h2 className="news__subtitle">{title}</h2>
      <p className="paragraph news__paragraph" style={pStyle}>
        {description}
      </p>
      <div onClick={clickHandler} className="news__btn">
        Show
        <span> {btnName}</span>
      </div>
    </div>
  );
};
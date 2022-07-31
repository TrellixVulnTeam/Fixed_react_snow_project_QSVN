import { NewsContainer } from './components/NewsContainer';
import { newsData } from './News.data';
import './News.scss';

const getNewscontent = newsData.map((news) => (
  <NewsContainer
    image={news.awsomePic}
    description={news.description}
    title={news.newstitle}
    key={news.id}
  />
));

export const News = () => {
  return (
    <>
      <h1 className="section__title">news</h1>
      {getNewscontent}
    </>
  );
};
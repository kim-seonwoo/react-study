import Categories from './Categories';
import NewsList from './newsList';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
